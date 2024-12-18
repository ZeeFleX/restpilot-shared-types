import { IRole } from './role.entities';

export interface IUser {
  id: number;
  phone: string;
  role: IRole;
  createdAt: Date;
}
