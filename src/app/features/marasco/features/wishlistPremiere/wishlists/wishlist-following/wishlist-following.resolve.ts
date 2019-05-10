import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

// Local
import { ActivityLogSubjectService } from '../../../../shared/activitylog.subject-service';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';

import { SubSink } from 'subsink';

@Injectable()
export class WishlistFollowingResolve implements Resolve<any> {
  private subs$ = new SubSink();

  constructor(
    private _store: Store<any>,
    private _activityLogService: ActivityLogSubjectService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    this._activityLogService.addGet(`Getting user wishlist follows`);

    let wishlists = this._store.pipe(
      select(fromWishlist.getUserWishlistFollowings),
      //takeUntil(this.unsubscribe$),
      take(1),
      map((_) => _)
    );

    return wishlists;
  }

  ngOnDestroy(){
    this.subs$.unsubscribe();
  }
}
