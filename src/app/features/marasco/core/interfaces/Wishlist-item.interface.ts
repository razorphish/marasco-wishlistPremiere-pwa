import { Image } from './Image.interface';

export interface WishlistItem {
  _id?: string;
  categoryId?: any;
  wishlistId?: string;
  userId?: string;
  purchasedBy?: string;
  name: string;
  price?: number;
  quantity?: number;
  url?: string;
  notes?: string;
  purchased?: boolean;
  image?: string;
  statusId?: string; //active|deleted
  sortOrder?: number;
  dateCreated?: Date;
  dateModifed?: Date;
  onSuccessCreate?: any;
}
