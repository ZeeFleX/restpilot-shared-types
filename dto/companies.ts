import { CompaniesEntities } from "src/types/shared";

export namespace CompaniesDTO {
  export namespace Request {
    export interface CreateCompany
      extends Pick<CompaniesEntities.Company, "name" | "address"> {}
  }
  export namespace Response {}
}
