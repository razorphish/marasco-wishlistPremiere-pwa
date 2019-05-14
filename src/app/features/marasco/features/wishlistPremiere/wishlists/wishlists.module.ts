import { NgModule } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MomentModule } from 'ngx-moment';

import { SharedModule } from '../../../shared/shared.module';
import { SmartadminDatatableModule } from '../../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../../shared/forms/input/smartadmin-input.module';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { Dropzone2Module } from '@app/features/marasco/shared/forms/dropzone2/dropzone2.module';
import { NestableListModule } from '@app/features/marasco/shared/ui/nestable-list/nestable-list.module';
import { SortablejsModule } from 'angular-sortablejs';

import { SettingsModule } from './shared/settings/settings.module';

import {
  WishlistsComponent,
  WishlistsRoutingModule,
  WishlistComponent,
  WishlistResolve,
  WishlistGuard,
  WishlistListComponent,
  WishlistListResolve,
  WishlistDetailsComponent,
  WishlistDetailsResolve,
  WishlistDetailsGuard,
  WishlistItemModalComponent,
  WishlistItemCategoryModalComponent,
  WishlistOptionsModalComponent,
  WishlistFollowModalComponent,
  WishlistFollowingComponent,
  WishlistFollowingGuard,
  WishlistFollowingResolve,
  WishlistFolliwngModalComponent
} from '../wishlists';

@NgModule({
  imports: [
    SharedModule,
    SettingsModule,
    SmartadminDatatableModule,
    SmartadminValidationModule,
    SmartadminInputModule,
    WishlistsRoutingModule,
    Dropzone2Module,
    NestableListModule,
    NgMultiSelectDropDownModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150 }),
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        m: 59
      }
    })
  ],
  exports: [],
  declarations: [
    WishlistsComponent,

    WishlistListComponent,

    WishlistComponent,
    WishlistFollowModalComponent,

    WishlistDetailsComponent,

    WishlistItemModalComponent,
    WishlistItemCategoryModalComponent,
    WishlistOptionsModalComponent,

    WishlistFollowingComponent,
    WishlistFolliwngModalComponent
  ],
  providers: [
    WishlistListResolve,

    WishlistResolve,
    WishlistGuard,

    WishlistDetailsResolve,
    WishlistDetailsGuard,

    WishlistFollowingResolve,
    WishlistFollowingGuard,

    UpperCasePipe
  ]
})
export class WishlistsModule {}
