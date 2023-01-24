import { COMPANY_INFO_MOCK_DATA } from "../models/constants";
import { CompanyInfoData } from "../models/interfaces";

export const getCompanyInfoCall = async (): Promise<CompanyInfoData> => {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(COMPANY_INFO_MOCK_DATA), 1000);
  });
};
