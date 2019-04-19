import { NgModule } from '@angular/core';
import { SharedModule } from '@app/features/marasco/shared/shared.module';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports: [SharedModule, UserProfileRoutingModule],
  declarations: [UserProfileComponent],
  providers: []
})
export class UserProfileModule {}
