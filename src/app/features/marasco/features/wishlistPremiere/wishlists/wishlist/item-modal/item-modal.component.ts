import { WishlistItemCategory } from './../../../../../core/interfaces/Wishlist-item-category.interface';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  TemplateRef
} from '@angular/core';
import { Store, select } from '@ngrx/store';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { environment } from '@env/environment';

import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import { WishlistItem } from '@app/features/marasco/core/interfaces/Wishlist-item.interface';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';

@Component({
  selector: 'wishlist-item-modal',
  templateUrl: './item-modal.component.html'
})
export class WishlistItemModalComponent implements OnInit {
  public bsModalRef: BsModalRef;
  public dbName = environment.wishlist.firebaseDbName;
  public dropdownList = [];
  public dropdownSettings = {};
  public selectedItems = [];

  public validationOptions: any = {
    // Rules for form validation
    rules: {
      // username: {
      //   required: true
      // },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 20
      },
      passwordConfirm: {
        required: true,
        equalTo: '#password'
      },
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      termsAgreed: {
        required: true
      }
    },

    // Messages for form validation
    messages: {
      // username: {
      //   required: 'Please enter a username or email'
      // },
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a VALID email address'
      },
      password: {
        required: 'Please enter your password'
      },
      passwordConfirm: {
        required: 'Please enter your password one more time',
        equalTo: 'Please enter the same password as above'
      },
      firstName: {
        required: 'Please select your first name'
      },
      lastName: {
        required: 'Please select your last name'
      },
      termsAgreed: {
        required: 'You must agree with Terms and Conditions'
      }
    }
  };

  public wishlistItem: WishlistItem = {
    name: ''
  };
  public wishlistItemCategories: WishlistItemCategory[];

  @Input() wishlist: Wishlist;
  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() upload = new EventEmitter();
  @Input() public options = {
    mode: 'popup',
    disabled: false,
    inline: true
  };

  constructor(
    private _store: Store<fromWishlist.WishlistState>,
    private _modalService: BsModalService
  ) {}

  ngOnInit() {
    const currentWishlistItemCategoryState = this._store.pipe(
      select(fromWishlist.getUserWishlistCategories)
    );
    currentWishlistItemCategoryState.subscribe((wishlistItemCategories: WishlistItemCategory[]) => {
      this.wishlistItemCategories = wishlistItemCategories;

      this.wishlistItemCategories.push({
        _id: '0',
        name: 'Miscellaneous'
      })

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
  }

  public openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this._modalService.show(template);
  }

  public onModalClose() {
    this.bsModalRef.hide();
  }

  public onSelectItem($event) {}

  public addItem() {
    this.bsModalRef.hide();
  }
}
