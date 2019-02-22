import { MenuFirstListCreated } from './../store/menu/menu.actions';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '@env/environment';
import { switchMap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { Store } from '@ngrx/store';

import { MenuRestore, MenuInit } from '../store/menu/menu.actions';
import { AuthState } from '../store/auth/auth.reducer';

import { MenuModel } from './../models/menu.model';

const MENU_ = 'menu';
const MENU_FIRST_LIST_CREATED = 'menu_first_list_created';

@Injectable()
export class MenuService {

    private _menu: MenuModel = {};

    private menuSubject = new BehaviorSubject<MenuModel>(this._menu);

    /**
     * Token that can be subscribed (observer) to directly when changes are made
     */
    public menu$ = this.menuSubject.asObservable();

    subscribe(next, err?, complete?) {
        return this.menuSubject.subscribe(next, err, complete)
    }

    constructor(
        private _storage: StorageService,
        private _store: Store<AuthState>
    ) { }

    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._store.dispatch(new MenuInit());

            this._storage.get(MENU_).then(
                menu => {
                    // tslint:disable-next-line:no-unused-expression
                    environment.log.auth &&
                        console.log((!!menu ? 'menu' : 'no menu') + ' at boot');

                    if (!!menu) {
                        try {
                            const payload = this.readPayload(menu);
                            this._store.dispatch(new MenuRestore(payload));
                        } catch (error) {
                            menu = null;
                        }
                    }

                    this.menu = menu;

                    this.menu$
                        .pipe(
                            switchMap(this.dumpMenu),
                            switchMap(this.updateMenuFirstItemCreated))
                        .subscribe(() => { });

                    resolve(menu);
                },
                error => {
                    resolve(null);
                }
            );
        });
    }

    dumpMenu = menu => {
        // tslint:disable-next-line:no-unused-expression
        environment.log.auth && console.log('\n\n\n================\ndump menu', menu);

        return !!menu
            ? this._storage.set(MENU_, menu)
            : this._storage.remove(MENU_).then(() => null);
    }

    updateMenuFirstItemCreated = menu => {
        return this._storage.get(MENU_FIRST_LIST_CREATED).then(menuFirstListCreated => {
            if (menu || menuFirstListCreated) {
                this._store.dispatch(new MenuFirstListCreated(true));
                return menuFirstListCreated
                    ? menu
                    : this._storage.set(MENU_FIRST_LIST_CREATED, Date.now()).then(_ => menu);
            } else {
                return Promise.resolve(menu);
            }
        });
    }

    set menu(value: MenuModel) {
        this.menuSubject.next(value);
    }

    get menu(): MenuModel {
        return this.menuSubject.value;
    }

    trigger() {
       // this.processMenu(this.store);
        // this.menuSubject.next(this.store)
    }

    readPayload(menu) {
        return menu;
    }

    private processMenu(state) {

    }
}

export function MenuFactory(service: MenuService): Function {
    return () => service.load();
}
