import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCompanyInfoCall } from "../data-services";
import { GET_COMPANY_INFO } from "../models/constants";
import { CompanyInfoData } from "../models/interfaces";

export const getCompanyInfoData = createAsyncThunk<CompanyInfoData>(
  GET_COMPANY_INFO,
  async () => {
    return await getCompanyInfoCall();
  }
);
