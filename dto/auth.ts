import { AuthEntities, CompaniesEntities } from 'src/types/shared';
import { Error } from 'src/types/shared';

export namespace AuthDTO {
  export namespace Request {
    export interface SignUp {
      phone: string;
      password: string;
    }

    export interface SignIn {
      phone: string;
      password: string;
    }

    export interface CompanySignUp extends SignUp {
      name: string;
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
      user: SignUp;
      company: Partial<CompaniesEntities.Company>;
      error?: Error;
    }

    export interface UserDelete {
      user: Partial<AuthEntities.User>;
    }
  }
}
