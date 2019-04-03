import { WishlistItemCategory } from './../../../../../../core/interfaces/Wishlist-item-category.interface';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromWishlistItemCategory from '@app/features/marasco/core/store/wishlist';

@Component({
  selector: 'wishlist-item-category-modal',
  templateUrl: './item-category-modal.component.html'
})
export class WishlistItemCategoryModalComponent implements OnInit {
  @Input() userId: string;
  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() wishlistItemCategory = new EventEmitter();

  public validationOptions: any;

  constructor(private _store: Store<any>) {}

  addCategory($event) {
    let model: WishlistItemCategory = {
      name: $event.elements.name.value,
      userId: this['settings'].userId
    };
    this['settings'].store.dispatch(
      new fromWishlistItemCategory.CreateWishlistItemCategoryAction(model)
    );
  }

  ngOnInit() {
    this.validationOptions = {
      // Rules for form validation
      store: this._store,
      userId: this.userId,
      rules: {
        name: {
          required: true
        }
      },
  
      // Messages for form validation
      messages: {
        name: {
          required: 'Please select a category name'
        }
      },
      submitHandler: this.addCategory
    };
  }
}
