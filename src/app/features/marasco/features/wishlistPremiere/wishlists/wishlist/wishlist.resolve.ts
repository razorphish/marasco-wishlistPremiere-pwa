import { Wishlist } from '../../../../core/interfaces/Wishlist.interface';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { filter, mergeMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';

// Local

import { ActivityLogSubjectService } from '../../../../shared/activitylog.subject-service';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import { WishlistService } from '@app/features/marasco/core/services';

@Injectable()
export class WishlistResolve implements Resolve<any> {
  constructor(
    private _store: Store<any>,
    private _activityLogService: ActivityLogSubjectService,
    private _wishlistService: WishlistService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    this._activityLogService.addGet(`Getting user id: ${id}`);

    if (id === '0') {
      return of('0');
    }

    // return this._store.pipe(
    //   select(fromWishlist.getUserWishlists),
    //   take(1),
    //   mergeMap((_) => _),
    //   filter((wishlist: Wishlist) => wishlist._id === id)
    // );
    return this._wishlistService.get(id);
  }
}
