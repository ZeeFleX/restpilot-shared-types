export namespace AuthEntities {
  export interface Role {
    id?: string;
    name: string;
    description?: string;
  }

  export interface User {
    id: string;
    phone: string;
    role: Role;
    createdAt: Date;
  }
}
