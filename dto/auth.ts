import { AuthEntities, CompaniesEntities } from "../entities";
import { Error } from "../common";

export namespace AuthDTO {
  export namespace Request {
    export interface SignUp {
      phone: string;
      email: string;
      firstname: string;
      lastname: string;
      surname?: string;
      password: string;
      confirmPassword: string;
      role?: string;
    }

    export interface SignIn {
      phone: string;
      password: string;
    }

    export interface CompanySignUp extends SignUp {
      companyName: string;
      inn: string;
      address: string;
    }

    export interface UserDelete {
      id: string;
    }
  }

  export namespace Response {
    export interface SignIn {
      accessToken: string;
    }

    export interface SignUp extends Partial<AuthEntities.User> {
      error?: Error;
    }
    export interface CompanySignUp {
      user?: Partial<Omit<AuthEntities.User, "password">>;
      company?: Partial<CompaniesEntities.Company>;
      error?: Error;
    }

    export interface UserDelete {
      user: Partial<AuthEntities.User>;
    }
  }
}
