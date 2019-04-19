import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from './../../../core/interfaces/UserInfo.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import { UserService } from '@app/features/marasco/core/services';
import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';
import { UserInfo } from '@app/features/marasco/core/models/userInfo.model';
import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import * as moment from 'moment';

@Component({
  selector: 'sa-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  private unsubscribeUser$ = new Subject<void>();
  private unsubscribeWishlist$ = new Subject<void>();

  public isLoggedIn: boolean;
  public user: User;
  public wishlists: Wishlist[];

  constructor(
    private _store: Store<any>,
    private _activityLogService: ActivityLogSubjectService,
    private _router: Router,
    private _userService: UserService
  ) {}
  
  createEvent($event) {
    this._router.navigate(['/wishlistPremiere/wishlists/details/0']);
  }

  edit() {}

  ngOnInit() {
    const currentState = this._store.pipe(select(fromAuth.getUser));
    const wishlistCurrentState = this._store.pipe(
      select(fromWishlist.getUserWishlists)
    );

    currentState.pipe(takeUntil(this.unsubscribeUser$)).subscribe((data) => {
      this.isLoggedIn = !!data;
      if (!!data) {
        this.user = data.user;
      }
    });

    wishlistCurrentState
      .pipe(takeUntil(this.unsubscribeWishlist$))
      .subscribe((data) => {
        if (!!data) {
          this.wishlists = data;
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribeUser$.next();
    this.unsubscribeWishlist$.next();

    this.unsubscribeUser$.complete();
    this.unsubscribeWishlist$.complete();
  }
}
