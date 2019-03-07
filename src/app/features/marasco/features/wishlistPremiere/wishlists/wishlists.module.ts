import { NgModule } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { SmartadminDatatableModule } from '../../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../../shared/forms/input/smartadmin-input.module';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import {
  WishlistsComponent,
  WishlistsRoutingModule,
  WishlistListComponent,
  WishlistComponent,
  WishlistListResolve,
  WishlistResolve,
  WishlistGuard,
} from '../wishlists';
import { WishlistService } from '@app/features/marasco/core/services/wishlists.service';
import { WishlistFactory } from '@app/features/marasco/core/services/wishlist.factory';

@NgModule({
  imports: [
    SharedModule,
    SmartadminDatatableModule,
    SmartadminValidationModule,
    SmartadminInputModule,
    WishlistsRoutingModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [],
  declarations: [WishlistsComponent, WishlistListComponent, WishlistComponent],
  providers: [
    WishlistService,
    WishlistGuard,
    WishlistListResolve,
    WishlistResolve,
    WishlistFactory,
    UpperCasePipe
  ]
})
export class WishlistsModule { }
