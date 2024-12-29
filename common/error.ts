export interface Error {
  code: number;
  message: keyof typeof ERROR_CODES;
}

export enum ERROR_CODES {
  "USER_NOT_CREATED" = 1000,
  "USER_ALREADY_EXISTS" = 1001,
  "PASSWORD_MISMATCH" = 1002,
  "COMPANY_NOT_CREATED" = 2000,
}
