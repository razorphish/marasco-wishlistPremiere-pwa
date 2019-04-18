import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import { StorageService } from './storage.service';

import { ProfileState } from '../store/profile/profile.reducer';
import { User } from '../interfaces/UserInfo.interface';
import { ProfileRestore } from '../store/profile';

const USER_PROFILE = 'user_profile';

@Injectable()
export class UserProfileStateService {
  private _userProfileSource: User;

  private _userProfileSubject = new BehaviorSubject<User>(
    this._userProfileSource
  );

  public onWishlistFollowsLoad = new BehaviorSubject<User>(
    this._userProfileSource
  );

  public userProfile$ = this._userProfileSubject.asObservable();

  constructor(
    private _storage: StorageService,
    private _store: Store<ProfileState>
  ) {}

  update(user: User) {
    this.userProfile = user;

    return new Promise(resolve => {
      resolve(this.userProfile);
    });
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._storage.get(USER_PROFILE).then(
        userResult => {
          environment.log.wishlist &&
            console.log(
              (!!userResult
                ? 'User profile exists'
                : 'User profile does not exist') + ' at boot'
            );

          if (!!userResult) {
            try {
              this._store.dispatch(new ProfileRestore(userResult));
            } catch (error) {
              userResult = null;
            }
          }

          this.userProfile = userResult;

          this.userProfile$
            .pipe(switchMap(this.dumpUserProfile))
            .subscribe(() => {});

          resolve(userResult);
        },
        error => {
          resolve(null);
        }
      );
    });
  }

  set userProfile(value: User) {
    this._userProfileSubject.next(value);
  }

  get userProfile(): User {
    return this._userProfileSubject.value;
  }

  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/

  dumpUserProfile = userProfile => {
    environment.log.wishlist &&
      console.log(
        '\n\n\n================\ndump user wishlist follows',
        userProfile
      );

    return !!userProfile
      ? this._storage.set(USER_PROFILE, userProfile)
      : this._storage.remove(USER_PROFILE).then(() => null);
  };
}

export function UserProfileStateServiceFactory(
  service: UserProfileStateService
): Function {
  return () => service.load();
}
