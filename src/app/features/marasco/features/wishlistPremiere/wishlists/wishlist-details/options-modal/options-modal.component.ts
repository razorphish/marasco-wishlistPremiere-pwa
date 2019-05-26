import { NotificationService } from './../../../../../core/services/notification.service';
import { WishlistService } from './../../../../../core/services/wishlists.service';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';

import { SubSink } from 'subsink';

@Component({
  selector: 'wishlist-options-modal',
  templateUrl: './options-modal.component.html'
})
export class WishlistOptionsModalComponent implements OnInit, OnDestroy {
  //*=================I/O============================= */
  @Input() wishlistObject: Wishlist;
  @Input() public options = {
    mode: 'popup',
    disabled: false,
    inline: true
  };

  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();

  public wishlist: Wishlist;

  /**============Privately exposed properties ========= */
  private subs$ = new SubSink();

  /**============Publicly exposed properties ========== */
  public validationOptions: any;

  constructor(
    private _notificationService: NotificationService,
    private _activityLogService: ActivityLogSubjectService,
    private _wishlistService: WishlistService,
    private _modalService: BsModalService
  ) {
    const initialState: any = this._modalService.config.initialState;
    this.wishlist = initialState.wishlist;
  }

  ngOnInit() {
    this.validationOptions = {
      // Rules for form validation
      wishlist: this.wishlist,
      userId: this.wishlist.userId,
      rules: {
        name: {
          required: true
        }
      },

      // Messages for form validation
      messages: {
        name: {
          required: 'Please enter a name for the item'
        }
      },
      wishlistService: this._wishlistService,
      activityService: this._activityLogService,
      notificationService: this._notificationService,
      close: this.close,
      subs: this.subs$,
      submitHandler: this.saveOptions
    };

    // this._wishlistService.onWishlistChanged.subscribe((wishlist) => {
    //   this.wishlist = wishlist;
    // });
  }

  public saveOptions($event) {
    let wishlist: Wishlist = this['settings'].wishlist;
    let model: Wishlist = {
      name: wishlist.name,
      preferences: {
        //includePriceWhenSharing: $event.elements.includePriceWhenSharing.checked,
        //markPurchasedItem: $event.elements.markPurchasedItem.checked,
        hideFromMe: $event.elements.hideFromMe.checked,
        currencyUnitSymbol: $event.elements.currencyUnitSymbol.value,
        notifyOnAddItem: $event.elements.notifyOnAddItem.checked,
        notifyOnRemoveItem: $event.elements.notifyOnRemoveItem.checked,
        notifyOnClose: $event.elements.notifyOnClose.checked,
        collaborative: $event.elements.collaborative.checked
      }
    };

    Object.assign(wishlist, model);

    this['settings'].subs.add(
      this['settings'].wishlistService.update(wishlist).subscribe(
        (item) => {
          if (item) {
            this['settings'].activityService.addUpdate(
              `Updated wishlist ${item._id}`
            );
            this['settings'].notificationService.smallBox({
              title: 'Wishlist Updated',
              content: 'Wishlist has been updated successfully. ',
              color: '#739E73',
              timeout: 2000, // 2 seconds
              icon: 'fa fa-check',
              number: '4',
              sound: false
            });
            this['settings'].close.emit(true);
          } else {
            this['settings'].activityLogService.addError(
              'No wishlist present: Update Failed'
            );
            this['settings'].notificationService.bigBox({
              title: 'Oops! the database has returned an error',
              content:
                'No wishlist returned which means that wishlist was not updated',
              color: '#C46A69',
              icon: 'fa fa-warning shake animated',
              number: '1',
              timeout: 4000, // 4 seconds
              sound: false
            });
          }
        },
        (err) => {
          this['settings'].activityLogService.addError(err);
          this['settings'].notificationService.bigBox({
            title: 'Oops!  there is an issue with the call to update',
            content: err,
            color: '#C46A69',
            icon: 'fa fa-warning shake animated',
            number: '1',
            timeout: 4000, // 4 seconds
            sound: false
          });
        },
        () => {
          // Clean up
        }
      )
    );
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
