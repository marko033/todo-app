export enum UserRoles {
  Admin = 'ADMIN',
  Controller = 'CONTROLLER',
  Executor = 'EXECUTOR',
}
export interface IUser {
  userName: string;
  password: string;
  role?: UserRoles;
}
