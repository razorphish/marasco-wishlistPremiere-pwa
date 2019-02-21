import { Menu, MenuItem } from '../interfaces/Menu.interface';

// https://stackoverflow.com/questions/14142071/typescript-and-field-initializers
export class MenuModel implements Menu {
    userId?: string;
    items?: MenuItem[];

    constructor(init?: Partial<MenuModel>) {
        if (init) {
            Object.assign(this, init);
        }

        const menuItem: MenuItem = {
            title: 'My wishlist',
            icon: '',
            wishlistId: ''
        };

        this.items.push(menuItem);
    }
}
