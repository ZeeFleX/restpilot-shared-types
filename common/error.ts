export interface Error {
  code: number;
  message: ERROR_CODES;
}

enum ERROR_CODES {
  "USER_ALREADY_EXISTS",
}
