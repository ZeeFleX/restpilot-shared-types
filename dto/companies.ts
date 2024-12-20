import { CompaniesEntities } from '../entities';

export namespace CompaniesDTO {
  export namespace Request {}
  export namespace Response {
    export interface CreateCompany
      extends Omit<CompaniesEntities.Company, 'id' | 'restaurants'> {}
  }
}
