import { CompaniesEntities } from "../entities";
import { Error } from "../common";

export namespace CompaniesDTO {
  export namespace Request {
    export interface CreateCompany
      extends Pick<
        CompaniesEntities.Company,
        "companyName" | "address" | "inn"
      > {
      ownerUserId: string;
    }
  }
  export namespace Response {
    export interface CreateCompany extends CompaniesEntities.Company {
      error?: Error;
    }
  }
}
