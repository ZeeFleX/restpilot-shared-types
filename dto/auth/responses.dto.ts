import { IUser } from "src/types/shared";

export interface ISignInResponseDTO {
  accessToken: string;
}

export interface ISignUpResponseDTO extends Omit<IUser, "password"> {}
