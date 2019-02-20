import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';

import { SmartadminValidationModule } from '@app/features/marasco/shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '@app/features/marasco/shared/forms/input/smartadmin-input.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ForgotRoutingModule,

    FormsModule,
    SmartadminValidationModule,
    SmartadminInputModule
  ],
  declarations: [ForgotComponent]
})
export class ForgotModule { }
