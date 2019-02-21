import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MarascoAdminLayoutModule } from "./layout";

import { I18nModule } from "./i18n/i18n.module";
import { UserModule } from "./user/user.module";
import { BootstrapModule } from "@app/features/marasco/shared/bootstrap.module";

import { SmartadminWidgetsModule } from "./widgets/smartadmin-widgets.module";

import { UtilsModule } from "./utils/utils.module";
import { PipesModule } from "./pipes/pipes.module";
import { InlineGraphsModule } from "./graphs/inline/inline-graphs.module";
import { SmartadminFormsLiteModule } from "./forms/smartadmin-forms-lite.module";
import { SmartProgressbarModule } from "./ui/smart-progressbar/smart-progressbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MarascoAdminLayoutModule,
    BootstrapModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,

    UserModule,
    MarascoAdminLayoutModule,
    BootstrapModule,

    I18nModule,

    UtilsModule,
    PipesModule,

    SmartadminFormsLiteModule,

    SmartProgressbarModule,

    InlineGraphsModule,

    SmartadminWidgetsModule,

  ]
})
export class SharedModule { }
