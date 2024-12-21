import { CompaniesEntities, Error } from "src/types/shared";

export namespace CompaniesDTO {
  export namespace Request {
    export interface CreateCompany
      extends Pick<CompaniesEntities.Company, "name" | "address"> {}
  }
  export namespace Response {
    export interface CreateCompany extends CompaniesEntities.Company {
      error?: Error;
    }
  }
}
