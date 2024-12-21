import { CompaniesEntities } from "../entities";
import { Error } from "../common";

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
