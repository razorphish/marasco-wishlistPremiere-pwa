import { NotificationService } from '../../../../core/services/notification.service';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';
import { UserService } from '@app/features/marasco/core/services';
import { User } from '@app/features/marasco/core/interfaces/UserInfo.interface';
import { UserInfo } from '@app/features/marasco/core/models/userInfo.model';
import { UserEdit } from '@app/features/marasco/core/models/userEdit.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'user-profile-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class UserProfileEditModalComponent implements OnInit, OnDestroy {
  //*=================I/O============================= */
  @Input() user: User;
  @Input() public options = {
    mode: 'popup',
    disabled: false,
    inline: true
  };

  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();

  /**============Privately exposed properties ========= */
  private subs$ = new SubSink();

  /**============Publicly exposed properties ========== */
  public validationOptions: any;

  constructor(
    private _notificationService: NotificationService,
    private _activityLogService: ActivityLogSubjectService,
    private _userService: UserService,
    private _modalService: BsModalService
  ) {
    const initialState: any = this._modalService.config.initialState;
    this.user = initialState.user;
  }

  ngOnInit() {
    this.validationOptions = {
      // Rules for form validation
      user: this.user,
      rules: {
        firstName: {
          required: true
        },
        lastName: {
          required: true
        },
        password: {
          minlength: 6,
          maxlength: 20
        },
        passwordConfirm: {
          equalTo: '#password'
        }
      },

      // Messages for form validation
      messages: {
        firstName: {
          required: 'Please enter your First Name'
        },
        lastName: {
          required: 'Please enter your Last Name'
        },
        password: {
          required: 'Please enter your password'
        },
        passwordConfirm: {
          required: 'Please enter your password one more time',
          equalTo: 'Please enter the same password as above'
        }
      },
      userService: this._userService,
      activityLogService: this._activityLogService,
      notificationService: this._notificationService,
      close: this.close,
      subs: this.subs$,
      submitHandler: this.saveUser
    };
  }

  /**
   *Saves the current user profile
   *
   * @param {*} $event
   * @memberof UserProfileEditModalComponent
   */
  public saveUser($event) {
    let user: UserInfo = this['settings'].user;
    let model: UserEdit = {
      _id: user._id,
      firstName: $event.elements.firstName.value,
      lastName: $event.elements.lastName.value,
      password: $event.elements.password.value,
      passwordConfirm: $event.elements.passwordConfirm.value,
      email: user.email
    };

    this['settings'].subs.add(this['settings'].userService
      .update(model)
      .subscribe(
        (item) => {
          if (item) {
            this['settings'].activityLogService.addUpdate(
              `User Profile updated [${item._id}] [${item.firstName} ${
                item.lastName
              }]`
            );
            this['settings'].notificationService.smallBox({
              title: 'Update Success!',
              content: 'Your profile has been successfully updated! ',
              color: '#739E73',
              timeout: 2000,
              icon: 'fa fa-check',
              number: '4',
              sound: false
            });
            this['settings'].close.emit(true);
          } else {
            this['settings'].activityLogService.addError(
              'Profile: Update Failed'
            );
            this['settings'].notificationService.bigBox({
              title: 'Oops! the database has returned an error',
              content: 'Your profile has not been updated',
              color: '#C46A69',
              icon: 'fa fa-warning shake animated',
              number: '1',
              timeout: 3000, // 3 seconds
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
            timeout: 3000, // 3 seconds
            sound: false
          });
        },
        () => {
          // Clean up
        }
      ));
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
