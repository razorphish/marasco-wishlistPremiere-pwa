import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'wishlist-item-modal',
  templateUrl: './item-modal.component.html'
})
export class WishlistItemModalComponent implements OnInit {
  public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings = {};

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

  @Input() wishlist: any = {};
  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() upload = new EventEmitter();
  @Input() public options = {
    mode: 'popup',
    disabled: false,
    inline: true
  };

  constructor() {}

  addCategory($event){

  }

  onSelectItem($event: any) {
    // Clear out current wishlist roles
    //console.log(item);
    console.log($event);
  }

  ngOnInit() {
    this.dropdownList = [
      {
        _id: 0,
        name: 'Miscellaneous'
      }
    ];

    this.selectedItems.push(this.dropdownList[0]);

    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      closeDropDownOnSelection: true,
      noDataAvailablePlaceholderText: 'No Categories Available'
    };
  }
}
