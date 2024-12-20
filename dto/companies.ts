import { CompaniesEntities } from "src/types/shared";

export namespace CompaniesDTO {
  export namespace Request {
    export interface CreateCompany
      extends Omit<CompaniesEntities.Company, "id" | "restaurants"> {}
  }
  export namespace Response {}
}
