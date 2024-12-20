import { AuthEntities } from 'src/types/shared';

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
  }

  export namespace Response {
    export interface SignIn {
      accessToken: string;
    }

    export interface SignUp extends Omit<AuthEntities.User, 'password'> {}
  }
}
