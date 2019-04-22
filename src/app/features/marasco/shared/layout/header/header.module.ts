import { RecentWishlistsComponent } from './recent-wishlists/recent-wishlists.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CollapseMenuComponent } from './collapse-menu/collapse-menu.component';
import { FullScreenComponent } from './full-screen/full-screen.component';

import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesMessageComponent } from './activities/activities-message/activities-message.component';
import { ActivitiesNotificationComponent } from './activities/activities-notification/activities-notification.component';
import { ActivitiesTaskComponent } from './activities/activities-task/activities-task.component';
import { HeaderComponent } from './header.component';

import { UtilsModule } from '@app/features/marasco/shared/utils/utils.module';
import { PipesModule } from '@app/features/marasco/shared/pipes/pipes.module';
import { I18nModule } from '@app/features/marasco/shared/i18n/i18n.module';
import { UserModule } from '@app/features/marasco/shared/user/user.module';
import { BsDropdownModule, PopoverModule, TypeaheadModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BsDropdownModule,
    UtilsModule,
    PipesModule,
    I18nModule,
    UserModule,
    PopoverModule,
    TypeaheadModule
  ],
  declarations: [
    ActivitiesMessageComponent,
    ActivitiesNotificationComponent,
    ActivitiesTaskComponent,
    RecentWishlistsComponent,
    FullScreenComponent,
    CollapseMenuComponent,
    ActivitiesComponent,
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
