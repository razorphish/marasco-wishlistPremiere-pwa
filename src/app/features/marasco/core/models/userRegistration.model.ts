export interface UserRegistration {
    email: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    password?: string;
    passwordConfirm?: string;
    termsAgreed?: boolean;
    applicationId?: string;
    wishlistItemCategories?: any;
    devices?: any;
    notifications?: any;
}