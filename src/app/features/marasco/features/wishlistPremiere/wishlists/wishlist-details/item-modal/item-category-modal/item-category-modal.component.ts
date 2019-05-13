import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';
import { WishlistItemCategoryService } from './../../../../../../core/services/wishlist-item-category.service';
import { WishlistItemCategory } from './../../../../../../core/interfaces/Wishlist-item-category.interface';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotificationService } from '@app/features/marasco/core/services';

@Component({
  selector: 'wishlist-item-category-modal',
  templateUrl: './item-category-modal.component.html'
})
export class WishlistItemCategoryModalComponent implements OnInit {
  @Input() userId: string;

  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();
  @Output() wishlistItemCategory = new EventEmitter();

  /**============Privately exposed properties ========= */
  private unsubscribe$ = new Subject<void>();

  /**============Publicly exposed properties ========== */
  public validationOptions: any;

  constructor(
    private _activityLogService: ActivityLogSubjectService,
    private _notificationService: NotificationService,
    private _wishlistItemCategoryService: WishlistItemCategoryService
  ) {}

  addCategory($event) {
    let model: WishlistItemCategory = {
      name: $event.elements.name.value,
      userId: this['settings'].userId,
      close: this['settings'].close
    };

<<<<<<< HEAD
    this['settings'].store.dispatch(
      new fromWishlistItemCategory.CreateWishlistItemCategoryAction(model, this['settings'].close)
    );
=======
    // this['settings'].store.dispatch(
    //   new fromWishlistItemCategory.CreateWishlistItemCategoryAction(model)
    // );
    this['settings'].wishlistItemCategoryService
      .insert(model)
      .pipe(takeUntil(this['settings'].unsub))
      .subscribe(
        item => {
          if (!!item) {
            this['settings'].activityService.addUpdate(
              `Category added ${item.name}`
            );
            this['settings'].notificationService.smallBox({
              title: 'Item Category Created',
              content: `Item category '${item.name}' has been created successfully. `,
              color: '#739E73',
              timeout: 2000, // 2 seconds
              icon: 'fa fa-check',
              number: '4',
              sound: false
            });
            this['settings'].close.emit(true);
          } else {
            this['settings'].activityLogService.addError(
              'No item category present: Creation Failed'
            );
            this['settings'].notificationService.bigBox({
              title: 'Oops! the database has returned an error',
              content:
                'No category returned which means that cateogry was not created',
              color: '#C46A69',
              icon: 'fa fa-warning shake animated',
              number: '1',
              timeout: 4000, // 4 seconds
              sound: false
            });
          }
        },
        err => {
          this['settings'].activityLogService.addError(err);
          this['settings'].notificationService.bigBox({
            title: 'Oops!  there is an issue with the call to create category',
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
      );
>>>>>>> 5f44dd16f9144f142b311cac8abcc898ac397c28
  }

  ngOnInit() {
    this.validationOptions = {
      // Rules for form validation
<<<<<<< HEAD
      store: this._store,
      close: this.close,
      userId: this.userId,
      rules: {
        name: {
          required: true
        }
      },
  
=======
      activityService: this._activityLogService,
      close: this.close,
>>>>>>> 5f44dd16f9144f142b311cac8abcc898ac397c28
      // Messages for form validation
      messages: {
        name: {
          required: 'Please select a category name'
        }
      },
      notificationService: this._notificationService,
      rules: {
        name: {
          required: true
        }
      },
      submitHandler: this.addCategory,
      userId: this.userId,
      unsub: this.unsubscribe$,
      wishlistItemCategoryService: this._wishlistItemCategoryService
    };
  }
}
