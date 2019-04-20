import { NgModule } from '@angular/core';
import { SharedModule } from '@app/features/marasco/shared/shared.module';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileEditModalComponent } from './edit-modal/edit-modal.component';
import { SmartadminValidationModule } from '@app/features/marasco/shared/forms/validation/smartadmin-validation.module';

@NgModule({
  imports: [SharedModule, UserProfileRoutingModule,    SmartadminValidationModule,],
  declarations: [
    
    UserProfileComponent,
    UserProfileEditModalComponent
  ],
  providers: []
})
export class UserProfileModule {}
