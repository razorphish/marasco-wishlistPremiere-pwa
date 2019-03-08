import { NgModule } from '@angular/core';

import { routing } from './wishlistPremiere-routing';
import { SharedModule } from '@app/features/marasco/shared/shared.module';

import { HttpModule } from '@angular/http';
import { ActivityLogSubjectService } from '../../shared/activitylog.subject-service';

//https://www.npmjs.com/package/ng-multiselect-dropdown
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    routing,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    ActivityLogSubjectService
  ]
})
export class WishlistPremiereModule { }
