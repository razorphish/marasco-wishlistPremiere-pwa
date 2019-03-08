import { StorageService } from './storage.service';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';
import { AuthHttpService } from './auth-http.service';
import { JsonApiService } from './json-api.service';
import { UserService } from './user.service';
import { NotificationService } from './notification.service';
import { BodyService } from './body.service';
import { LayoutService } from './layout.service';

import { AuthTokenFactory, AuthTokenService } from './auth-token.service';

import { MenuService, MenuFactory } from './menu.service';
import { MenuItemService } from './menuItem.service';

import { PwaService, PwaFactory } from './pwa.service';

import {
  WishlistStateService,
  WishlistStateServiceFactory
} from './wishlists.state.service';

import { WishlistService } from './wishlists.service';
import { WishlistFactory } from './wishlist.factory';

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
  PwaService,
  WishlistService,
  WishlistStateService,
  WishlistFactory
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
export * from './wishlists.state.service';

export * from './wishlists.service';
