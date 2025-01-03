export namespace CompaniesEntities {
  export interface Restaurant {
    id: string;
    name: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    company: Company;
    companyId: string;
  }

  export interface Company {
    id: string;
    companyName: string;
    address: string;
    inn: string;
    createdAt: Date;
    updatedAt: Date;
    restaurants?: Restaurant[];
  }
}
