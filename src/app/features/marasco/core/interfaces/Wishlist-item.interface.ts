import {  Image } from './Image.interface';

export interface WishlistItem {
    _id?: string;
    wishlistId? : string;
    name: string;
    categoryId?: any;
    price?: number;
    url?: string;
    notes?: string;
    purchased?: boolean;
    images?: Image[];
    statusId?: string; //created|deleted
    sortOrder? : number;
    dateCreated?: Date;
    dateModifed?: Date
}
