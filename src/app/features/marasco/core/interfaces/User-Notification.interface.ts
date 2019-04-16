import { NotificationKey } from './Notification-Key.interface';

export interface   UserNotification {
  _id?: string;
  userId: string;
  uuid: string;
  endpoint: string;
  expirationTime?: string;
  keys?: NotificationKey;
  dateCreated?: Date;
  dateModified?: Date;
}