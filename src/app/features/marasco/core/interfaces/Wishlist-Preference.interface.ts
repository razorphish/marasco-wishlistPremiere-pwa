export interface WishlistPreference {
    _id?: string;
    includePriceWhenSharing: boolean;
    hideFromMe: boolean;
    markPurchasedItem: boolean;
    currencyUnitSymbol: string;
    notifyOnAddItem: boolean;
    notifyOnRemoveItem: boolean;
    notifyOnClose: boolean;
}
