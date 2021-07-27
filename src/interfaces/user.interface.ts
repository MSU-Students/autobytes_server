export interface IUser {
    id?: string
    userName: string;
    password?: string;
    firstName: string;
    lastName: string;
    userType: string;
    status?: string,
    idNumber: string;
    disabled?: boolean;
    refreshToken?: string;

}