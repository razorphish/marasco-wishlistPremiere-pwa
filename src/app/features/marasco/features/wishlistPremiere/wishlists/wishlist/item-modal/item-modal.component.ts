import { WishlistItemCategory } from './../../../../../core/interfaces/Wishlist-item-category.interface';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  TemplateRef,
  OnDestroy
} from '@angular/core';
import { Store, select } from '@ngrx/store';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { environment } from '@env/environment';

import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import { WishlistItem } from '@app/features/marasco/core/interfaces/Wishlist-item.interface';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FirebaseStorageConfigOptions } from '@app/features/marasco/shared/forms/dropzone2/firebase-storage-config-options.interface';

@Component({
  selector: 'wishlist-item-modal',
  templateUrl: './item-modal.component.html'
})
export class WishlistItemModalComponent implements OnInit, OnDestroy {
  //*=================I/O============================= */
  @Input() wishlist: Wishlist;
  @Input() public options = {
    mode: 'popup',
    disabled: false,
    inline: true
  };

  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() upload = new EventEmitter();

  /**============Privately exposed properties ========= */
  private unsubscribe$ = new Subject<void>();

  /**============Publicly exposed properties ========== */
  public bsModalRef: BsModalRef;
  public dbName = environment.wishlist.firebaseDbName;
  public configOptions: FirebaseStorageConfigOptions;
  public dropdownList = [];
  public dropdownSettings = {};
  public imageName: string;
  public selectedItems = [];

  public validationOptions: any;

  public wishlistItem: WishlistItem = {
    name: '',
    purchased: false
  };

  public wishlistItemCategories: WishlistItemCategory[];

  constructor(
    private _store: Store<fromWishlist.WishlistState>,
    private _modalService: BsModalService
  ) {}

  ngOnInit() {
    const currentWishlistItemCategoryState = this._store.pipe(
      select(fromWishlist.getUserWishlistCategories)
    );

    this.configOptions = {
      path: `${this.wishlist._id}/${new Date().getTime()}_`,
      meta: {
        wishlistId: this.wishlist._id,
        nativelySaved: false
      }
    };

    currentWishlistItemCategoryState
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((wishlistItemCategories: WishlistItemCategory[]) => {
        this.wishlistItemCategories = wishlistItemCategories;

        if (this.wishlistItemCategories.length === 0) {
          this.wishlistItemCategories.push({
            _id: '0',
            name: 'Miscellaneous'
          });
        }

        this.dropdownList = this.wishlistItemCategories;
      });

    this.selectedItems.push(this.dropdownList[0]);

    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      closeDropDownOnSelection: true,
      noDataAvailablePlaceholderText: 'No Categories Available'
    };

    this.validationOptions = {
      // Rules for form validation
      wishlistId: this.wishlist._id,
      userId: this.wishlist.userId,
      store: this._store,
      rules: {
        // username: {
        //   required: true
        // },
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
      submitHandler: this.addItem,
      onSuccessCreate: this.close
    };
  }

  public openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this._modalService.show(template);
  }

  public onModalClose() {
    this.bsModalRef.hide();
  }

  public onImageUploaded($event) {
    this.imageName = $event;
  }

  public addItem($event) {
    let model: WishlistItem = {
      name: $event.elements.name.value,
      price: $event.elements.price.value,
      url: $event.elements.url.value,
      purchased: $event.elements.purchased.checked,
      notes: $event.elements.notes.value,
      image: $event.elements.image.value,
      wishlistId: this['settings'].wishlistId
    };

    if (!!$event.elements.categoryId.value) {
      model.categoryId = $event.elements.categoryId.value;
    }

    this['settings'].store.dispatch(
      new fromWishlist.CreateWishlistItemAction(model)
    );

    //this.bsModalRef.hide();
  }

  ngOnDestroy() {
    this.dropdownList = [];
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
