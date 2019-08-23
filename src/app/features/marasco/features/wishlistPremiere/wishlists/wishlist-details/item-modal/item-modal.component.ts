import { WishlistItemCategory } from './../../../../../core/interfaces/Wishlist-item-category.interface';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import { Store, select } from '@ngrx/store';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { environment } from '@env/environment';

import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import { WishlistItem } from '@app/features/marasco/core/interfaces/Wishlist-item.interface';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import { FirebaseStorageConfigOptions } from '@app/features/marasco/shared/forms/dropzone2/firebase-storage-config-options.interface';
import { SubSink } from 'subsink';
import { initialState } from 'ngx-bootstrap/timepicker/reducer/timepicker.reducer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'wishlist-item-modal',
  templateUrl: './item-modal.component.html',
})
export class WishlistItemModalComponent implements OnInit, OnDestroy {
  //*=================I/O============================= */
  @Input() wishlist: Wishlist;
  @Input() userId: string;
  @Input() public options = {
    mode: 'popup',
    disabled: false,
    inline: true,
  };

  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() upload = new EventEmitter();

  /**============Privately exposed properties ========= */
  private subs$ = new SubSink();

  /**============Publicly exposed properties ========== */
  public bsModalRef: BsModalRef;
  public dbName = environment.wishlist.firebaseDbName;
  public configOptions: FirebaseStorageConfigOptions;
  public dropdownList = [];
  public dropdownSettings = {};
  public isUpdate: boolean;
  public selectedItems = [];

  public validationOptions: any;

  public wishlistItem: WishlistItem;

  public wishlistItemCategories: WishlistItemCategory[];

  private defautlWishlistItemState: WishlistItem;

  constructor(
    private _store: Store<fromWishlist.WishlistState>,
    private _modalService: BsModalService
  ) {
    const initialState: any = this._modalService.config.initialState;
    this.defautlWishlistItemState = initialState.wishlistItem;
    this.wishlistItem = initialState.wishlistItem;
    this.isUpdate = !!this.wishlistItem._id;
  }

  ngOnInit() {
    const currentWishlistItemCategoryState = this._store.pipe(
      select(fromWishlist.getUserWishlistCategories)
    );

    this.configOptions = {
      path: `${this.wishlist._id}/${new Date().getTime()}_`,
      meta: {
        wishlistId: this.wishlist._id,
        nativelySaved: false,
      },
    };

    this.subs$.add(
      currentWishlistItemCategoryState.subscribe(
        (wishlistItemCategories: WishlistItemCategory[]) => {
          if (Array.isArray(wishlistItemCategories)) {
            this.wishlistItemCategories = wishlistItemCategories;
            this.dropdownList = this.wishlistItemCategories;
          }
        }
      )
    );

    this.selectedItems.push(this.dropdownList[0]);

    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      closeDropDownOnSelection: true,
      noDataAvailablePlaceholderText: 'No Categories Available',
    };

    this.validationOptions = {
      // Rules for form validation
      wishlistId: this.wishlist._id,
      wishlistItemId: this.wishlistItem._id,
      userId: this.userId || this.wishlist.userId,
      close: this.closeModal,
      store: this._store,
      rules: {
        name: {
          required: true,
        },
      },


      // Messages for form validation
      messages: {
        name: {
          required: 'Please enter a name for the item',
        },
      },
      submitHandler: this.addItem,
    };
  }

  public openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this._modalService.show(template);
  }

  public onModalClose() {
    this.bsModalRef.hide();
  }

  public closeModal() {
     this.close.emit(true);
  }

  public onImageUploaded($event) {
    this.wishlistItem.image = $event;
  }

  public addItem($event) {
    const correlationId = '1234321';
    let model: WishlistItem = {
      name: $event.elements.name.value,
      price: $event.elements.price.value,
      url: $event.elements.url.value,
      purchased: $event.elements.purchased.checked,
      notes: $event.elements.notes.value,
      image: $event.elements.image.value,
      wishlistId: this['settings'].wishlistId,
      userId: this['settings'].userId,
      _id: this['settings'].wishlistItemId
    };

    if (!!$event.elements.categoryId.value && $event.elements.categoryId.value !== "0") {
      model.categoryId = $event.elements.categoryId.value;
    }

    // Save
    if (model._id) {
      // Update
      this['settings'].store.dispatch(
        new fromWishlist.EditWishlistItemAction(model)
      );
      this['settings'].close();
    } else {
      // Insert
      if (model.purchased) {
        model.purchasedBy = this['settings'].userId;
      }

      model.afterItemInsert = this.onSubmit

      this['settings'].store.dispatch(
        new fromWishlist.CreateWishlistItemAction(model)
      );

      this['settings'].store.select('confirmInsertResponse')
      .pipe(filter((_:any) => _.id === correlationId))
      .subscribe(_ => {
        alert(_);
      })
    }
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }

  //***********************PRIVATE ************************/
  private clearForm() {
    this.wishlistItem = this.defautlWishlistItemState;
  }

  private hideModal() {
    this.bsModalRef.hide();
  }

  private onSubmit(close: boolean) {
    if (close) {
      this.hideModal();
    } else {
      this.clearForm();
    }

  }
}
