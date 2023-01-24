import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { getCompanyInfoData } from "../actions";
import { initializedAppState } from "../models/initializations";
import { AppState, CompanyInfoData } from "../models/interfaces";

const AppReducer = createReducer(initializedAppState, (app) => {
  app
    .addCase(
      getCompanyInfoData.pending,
      (state: AppState): AppState => ({ ...state })
    )
    .addCase(
      getCompanyInfoData.rejected,
      (state: AppState): AppState => ({ ...state })
    )
    .addCase(
      getCompanyInfoData.fulfilled,
      (
        state: AppState,
        { payload }: PayloadAction<CompanyInfoData>
      ): AppState => ({ ...state, companyInfoData: payload })
    );
});

export default AppReducer;
