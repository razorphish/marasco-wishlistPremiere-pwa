import { NgModule } from '@angular/core';

import { routing } from './home.routing';
import { SharedModule } from '@app/features/marasco/shared/shared.module';
import { ActivityLogSubjectService } from '../../shared/activitylog.subject-service';

@NgModule({
  imports: [SharedModule, routing],
  declarations: [],
  providers: [
    ActivityLogSubjectService
  ]
})
export class HomeModule {}
