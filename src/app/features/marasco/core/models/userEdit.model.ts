export interface UserEdit {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  passwordConfirm?: string;
}