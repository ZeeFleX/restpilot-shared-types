export interface ISignUpRequestDTO {
  phone: string;
  password: string;
}

export interface ISignInRequestDTO {
  phone: string;
  password: string;
}

export interface ICompanySignUpRequestDTO extends ISignUpRequestDTO {
  name: string;
  address: string;
}
