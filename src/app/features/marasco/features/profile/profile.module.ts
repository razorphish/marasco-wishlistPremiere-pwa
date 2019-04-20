import { NgModule } from '@angular/core';

import { routing } from './profile.routing';
import { SharedModule } from '@app/features/marasco/shared/shared.module';
import { ActivityLogSubjectService } from '../../shared/activitylog.subject-service';
import { SettingsModule } from '../wishlistPremiere/wishlists/shared/settings/settings.module';

@NgModule({
  imports: [SettingsModule, SharedModule, routing],
  declarations: [],
  providers: [ActivityLogSubjectService]
})
export class ProfileModule {}
