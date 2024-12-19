export interface IRestaurant {
  id: string;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  company: ICompany;
  companyId: string;
}

export interface ICompany {
  id: string;
  name: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
  restaurants: IRestaurant[];
}
