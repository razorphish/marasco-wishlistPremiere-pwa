import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

// Local libraries
import { Wishlist } from '../../../../core/interfaces/Wishlist.interface';
import { WishlistService } from '../../../../core/services/wishlists.service';
import { ActivityLogSubjectService } from '../../../../shared/activitylog.subject-service';

@Injectable()
export class WishlistListResolve implements Resolve<Wishlist[]> {
  constructor(
    private _wishlistService: WishlistService,
    private _activityLogService: ActivityLogSubjectService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {

    this._activityLogService.addGet('Get all wishlists');
    return this._wishlistService.allDetails();
  }
}
