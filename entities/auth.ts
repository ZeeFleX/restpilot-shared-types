export namespace AuthEntities {
  export interface Role {
    id?: string;
    name: string;
    description?: string;
  }

  export interface User {
    id: string;
    phone: string;
    email: string;
    firstname: string;
    lastname: string;
    surname: string;
    role: Role;
    createdAt: Date;
  }
}
