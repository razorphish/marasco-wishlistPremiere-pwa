import { NgModule } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { SmartadminDatatableModule } from '../../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../../shared/forms/input/smartadmin-input.module';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { Dropzone2Module } from '@app/features/marasco/shared/forms/dropzone2/dropzone2.module';
import { NestableListModule } from '@app/features/marasco/shared/ui/nestable-list/nestable-list.module';
import { SortablejsModule } from 'angular-sortablejs';

import {
  WishlistsComponent,
  WishlistsRoutingModule,
  WishlistListComponent,
  WishlistComponent,
  WishlistListResolve,
  WishlistResolve,
  WishlistGuard,
  WishlistItemModalComponent,
  WishlistItemCategoryModalComponent
} from '../wishlists';

@NgModule({
  imports: [
    SharedModule,
    SmartadminDatatableModule,
    SmartadminValidationModule,
    SmartadminInputModule,
    WishlistsRoutingModule,
    Dropzone2Module,
    NestableListModule,
    NgMultiSelectDropDownModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150 })
  ],
  exports: [],
  declarations: [
    WishlistsComponent,
    WishlistListComponent,
    WishlistComponent,
    WishlistItemModalComponent,
    WishlistItemCategoryModalComponent
  ],
  providers: [
    WishlistGuard,
    WishlistListResolve,
    WishlistResolve,
    UpperCasePipe
  ]
})
export class WishlistsModule {}
