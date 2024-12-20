import { IUser } from 'src/types';

export interface ISignInResponseDTO {
  accessToken: string;
}

export interface ISignUpResponseDTO extends Omit<IUser, 'password'> {}
