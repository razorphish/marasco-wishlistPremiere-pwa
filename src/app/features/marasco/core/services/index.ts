import { StorageService } from './storage.service';
import {
  AuthTokenFactory,
  AuthTokenService
} from './auth-token.service';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';
import { AuthHttpService } from './auth-http.service';
import { JsonApiService } from './json-api.service';
import { UserService } from './user.service';
import { NotificationService } from './notification.service';
import { BodyService } from './body.service';
import { LayoutService } from './layout.service';

import { MenuService, MenuFactory } from './menu.service';
import { MenuItemService } from './menuItem.service';

import { PwaService, PwaFactory } from '@app/features/marasco/core/services/pwa.service';

export const services = [
  StorageService,
  AuthTokenService,
  AuthService,
  TokenInterceptor,
  AuthHttpService,

  JsonApiService,
  UserService,
  MenuService,
  NotificationService,
  MenuItemService,
  BodyService,
  LayoutService,
  PwaService
];

export * from './storage.service';
export * from './auth-token.service';
export * from './auth.service';
export * from './auth-http.service';
export * from './token.interceptor';
export * from './json-api.service';
export * from './user.service';
export * from './notification.service';
export * from './body.service';
export * from './layout.service';
export * from './menu.service';
export * from './menuItem.service';
export * from './pwa.service';
