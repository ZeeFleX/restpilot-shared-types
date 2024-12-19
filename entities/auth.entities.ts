export interface IRole {
  id?: string;
  name: string;
  description?: string;
}

export interface IUser {
  id: number;
  phone: string;
  role: IRole;
  createdAt: Date;
}
