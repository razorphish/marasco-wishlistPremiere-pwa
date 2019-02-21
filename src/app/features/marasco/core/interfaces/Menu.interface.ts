export interface MenuItem {
    title?: string;
    icon?: string;
    wishlistId?: string;
}

export interface Menu {
    userId?: string;
    items?: MenuItem[];
}
