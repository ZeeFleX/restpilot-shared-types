import { IUser } from "src/types/shared";

export namespace DTO {
  namespace Auth {
    namespace Request {
      interface SignUpDTO {
        phone: string;
        password: string;
      }

      interface SignInDTO {
        phone: string;
        password: string;
      }

      interface CompanySignUpDTO extends SignUpDTO {
        name: string;
        address: string;
      }
    }

    namespace Response {
      interface SignInDTO {
        accessToken: string;
      }

      interface SignUpDTO extends Omit<IUser, "password"> {}
    }
  }
}
