
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/features/marasco/shared/shared.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [SharedModule, LandingRoutingModule],
  declarations: [LandingComponent],
  providers: []
})
export class LandingModule {}
