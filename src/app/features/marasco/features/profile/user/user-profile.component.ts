import { UserInfo } from '@app/features/marasco/core/models/userInfo.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';
import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SubSink } from 'subsink';

@Component({
  selector: 'sa-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  private subs$ = new SubSink();

  public isLoggedIn: boolean;
  public user: UserInfo;
  public wishlists: Wishlist[];

  bsModalRef: BsModalRef;

  constructor(
    private _store: Store<any>,
    private _activityLogService: ActivityLogSubjectService,
    private _router: Router,
    private _modalService: BsModalService
  ) {}

  public closeModal() {
    this.bsModalRef.hide();
  }

  public createEvent($event) {
    this._router.navigate(['/wishlistPremiere/wishlists/details/0']);
  }

  edit() {}

  public onModalClose() {
    this.bsModalRef.hide();
  }

  public openModal(event, template: TemplateRef<any>, user: UserInfo) {
    const initialState = {
      user: user || {
        name: ''
      }
    };

    event.preventDefault();
    this.bsModalRef = this._modalService.show(template, { initialState });
  }

  ngOnInit() {
    const currentState = this._store.pipe(select(fromAuth.getUser));
    const wishlistCurrentState = this._store.pipe(
      select(fromWishlist.getUserWishlists)
    );

    this.subs$.add(
      currentState.subscribe((data) => {
        this.isLoggedIn = !!data;
        if (!!data) {
          this.user = data.user;
        }
      })
    );

    this.subs$.add(
      wishlistCurrentState.subscribe((data) => {
        if (!!data) {
          this.wishlists = data;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
