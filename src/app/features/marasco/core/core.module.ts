
import {
  NgModule,
  ModuleWithProviders,
  APP_INITIALIZER,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IonicStorageModule } from '@ionic/storage';
import { EffectsModule } from '@ngrx/effects';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppEffects } from './app.effects';
import * as fromStore from './store';
import { AuthGuard } from './guards/auth.guard';

import {
  services,
  AuthTokenFactory,
  AuthTokenService,
  TokenInterceptor,
  WishlistStateService,
  WishlistStateServiceFactory,
  WishlistItemCategoriesStateServiceFactory,
  WishlistItemCategoriesStateService,
  PwaFactory,
  PwaService
} from '@app/features/marasco/core/services';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { MenuService, MenuFactory } from './services/menu.service';
import { AppGuard } from './guards/app.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    // HotkeysModule.forRoot(),

    StoreModule.forRoot(fromStore.reducers, {
      metaReducers: fromStore.metaReducers
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([...fromStore.effects, AppEffects]),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule, 
    AngularFirestoreModule
  ],
  exports: [],
  providers: [
    AuthGuard,
    AppGuard,

    ...services,
    ...fromStore.services,

    {
      provide: APP_INITIALIZER,
      useFactory: AuthTokenFactory,
      deps: [AuthTokenService],
      multi: true
    },

    {
      provide: APP_INITIALIZER,
      useFactory: WishlistStateServiceFactory,
      deps: [WishlistStateService],
      multi: true
    },

    {
      provide: APP_INITIALIZER,
      useFactory: WishlistItemCategoriesStateServiceFactory,
      deps: [WishlistItemCategoriesStateService],
      multi: true
    },

    {
      provide: APP_INITIALIZER,
      useFactory: MenuFactory,
      deps: [MenuService],
      multi: true
    },

    {
      provide: APP_INITIALIZER,
      useFactory: PwaFactory,
      deps: [PwaService],
      multi: true
    },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },

    {
      provide: StorageBucket,
      useValue: environment.firebase.storageBucket
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
