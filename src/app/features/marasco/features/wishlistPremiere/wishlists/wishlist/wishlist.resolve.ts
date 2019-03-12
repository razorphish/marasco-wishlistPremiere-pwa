
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';

// Local
import { WishlistService } from '../../../../core/services/wishlists.service';

import { ActivityLogSubjectService } from '../../../../shared/activitylog.subject-service';

@Injectable()
export class WishlistResolve implements Resolve<any> {
  constructor(
    private _wishlistService: WishlistService,
    private _activityLogService: ActivityLogSubjectService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    this._activityLogService.addGet(`Getting user id: ${id}`);

    if (id === "0") {
      return of("0");
    }
    return this._wishlistService.get(id);
  }
}
