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

import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';

@Component({
  selector: 'wishlist-options-modal',
  templateUrl: './options-modal.component.html'
})
export class WishlistOptionsModalComponent implements OnInit, OnDestroy {
  //*=================I/O============================= */
  @Input() wishlist: Wishlist;
  @Input() public options = {
    mode: 'popup',
    disabled: false,
    inline: true
  };

  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();

  /**============Privately exposed properties ========= */
  private unsubscribe$ = new Subject<void>();

  /**============Publicly exposed properties ========== */
  public validationOptions: any;

  constructor(
    private _notificationService: NotificationService,
    private _activityLogService: ActivityLogSubjectService,
    private _wishlistService: WishlistService) {}

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
      unsub: this.unsubscribe$,
      submitHandler: this.saveOptions
    };

    this._wishlistService.onWishlistChanged.subscribe((wishlist) => {
      this.wishlist = wishlist;
    });
  }

  public saveOptions($event) {
    let wishlist: Wishlist = this['settings'].wishlist;
    let model: Wishlist = {
      name: wishlist.name,
      preferences: {
        includePriceWhenSharing: $event.elements.includePriceWhenSharing.checked,
        markPurchasedItem: $event.elements.markPurchasedItem.checked,
        hideFromMe: $event.elements.hideFromMe.checked,
        currencyUnitSymbol: $event.elements.currencyUnitSymbol.value,
        notifyOnAddItem: $event.elements.notifyOnAddItem.checked,
        notifyOnRemoveItem: $event.elements.notifyOnRemoveItem.checked,
        notifyOnClose: $event.elements.notifyOnClose.checked
      }
    };

    Object.assign(wishlist, model);

    this['settings'].wishlistService
      .update(wishlist)
      .pipe(takeUntil(this['settings'].unsub))
      .subscribe(
        (item) => {
          if (item) {
            this['settings'].activityService.addUpdate(`Updated wishlist ${item._id}`);
            this['settings'].notificationService.smallBox({
              title: 'Wishlist Updated',
              content: 'Wishlist has been updated successfully. ',
              color: '#739E73',
              timeout: 4000,
              icon: 'fa fa-check',
              number: '4'
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
              timeout: 6000 // 6 seconds
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
            timeout: 6000 // 6 seconds
          });
        },
        () => {
          // Clean up
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
