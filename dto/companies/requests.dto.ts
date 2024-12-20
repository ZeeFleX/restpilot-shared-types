import { ICompany } from "../../entities";

export interface ICreateCompanyRequestDTO
  extends Omit<ICompany, "id" | "restaurants"> {}
