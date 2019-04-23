import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sa-recent-wishlists',
  templateUrl: './recent-wishlists.component.html',
  providers: [ActivityLogSubjectService]
})
export class RecentWishlistsComponent implements OnInit {

  public activities: Array<any>;

  constructor(
    private _activityLogService: ActivityLogSubjectService) {
  }

  ngOnInit() {
    this.activities = this._activityLogService.store.updates;

    this._activityLogService.subscribe((activities) => {
      this.activities = activities.updates;
    })
  }

  clearWishlists() {
    this._activityLogService.refresh();
    this.activities = this._activityLogService.store.updates;
  }

}
