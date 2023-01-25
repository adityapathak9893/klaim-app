import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  getAuthorDetails,
  getCompanyInfoData,
  getLogInAuthorization,
  logout,
  setShowAboutUs,
  setShowForm,
  setShowUserProfile,
} from "../actions";
import {
  initializedAppState,
  initializedAuthorDetails,
  initializedAuthorQuoteDetails,
} from "../models/initializations";
import {
  AppState,
  AuthorDetails,
  AuthorQuoteDetails,
  CompanyInfoData,
  ProfileResponse,
} from "../models/interfaces";

const AppReducer = createReducer(initializedAppState, (app) => {
  app
    .addCase(
      getCompanyInfoData.pending,
      (state: AppState): AppState => ({
        ...state,
        loadingIndicator: true,
        accessDenied: "",
      })
    )
    .addCase(
      getCompanyInfoData.rejected,
      (state: AppState): AppState => ({
        ...state,
        loadingIndicator: false,
        accessDenied: "Access Denied",
      })
    )
    .addCase(
      getCompanyInfoData.fulfilled,
      (
        state: AppState,
        { payload }: PayloadAction<CompanyInfoData>
      ): AppState => ({
        ...state,
        accessDenied: "",
        loadingIndicator: false,
        companyInfoData: payload,
      })
    )
    .addCase(
      logout.pending,
      (state: AppState): AppState => ({ ...state, loadingIndicator: true })
    )
    .addCase(
      logout.rejected,
      (state: AppState): AppState => ({ ...state, loadingIndicator: false })
    )
    .addCase(
      logout.fulfilled,
      (
        state: AppState,
        {
          payload,
        }: PayloadAction<{
          userAuthorizationApproved: boolean;
          userProfileDetailes: ProfileResponse;
          showUserProfile: boolean;
        }>
      ): AppState => ({
        ...state,
        loadingIndicator: false,
        userAuthorizationApproved: payload.userAuthorizationApproved,
        userProfileDetailes: payload.userProfileDetailes,
        showUserProfile: payload.showUserProfile,
        authorDetails: initializedAuthorDetails,
        authorQuoteDetails: initializedAuthorQuoteDetails,
        isProfileUpdateCancelled: false,
        profileUpdateUnderProgress: false,
        isAuthorDetailsLoaded: false,
      })
    )
    .addCase(
      getLogInAuthorization.pending,
      (state: AppState): AppState => ({
        ...state,
        loadingIndicator: true,
        accessDenied: "",
      })
    )
    .addCase(
      getLogInAuthorization.rejected,
      (state: AppState): AppState => ({
        ...state,
        loadingIndicator: false,
        accessDenied: "Access Denied",
      })
    )
    .addCase(
      getLogInAuthorization.fulfilled,
      (
        state: AppState,
        {
          payload,
        }: PayloadAction<{
          userAuthorizationApproved: boolean;
          userProfileDetailes: ProfileResponse;
          showUserProfile: boolean;
        }>
      ): AppState => ({
        ...state,
        accessDenied: "",
        loadingIndicator: false,
        userAuthorizationApproved: payload.userAuthorizationApproved,
        userProfileDetailes: payload.userProfileDetailes,
        showUserProfile: payload.showUserProfile,
      })
    )
    .addCase(
      getAuthorDetails.pending,
      (state: AppState): AppState => ({
        ...state,
        isProfileUpdateCancelled: false,
        accessDenied: "",
        profileUpdateUnderProgress: true,
      })
    )
    .addCase(
      getAuthorDetails.rejected,
      (state: AppState): AppState => ({
        ...state,
        isProfileUpdateCancelled: true,
        profileUpdateUnderProgress: false,
        isAuthorDetailsLoaded: false,
      })
    )
    .addCase(
      getAuthorDetails.fulfilled,
      (
        state: AppState,
        {
          payload,
        }: PayloadAction<{
          isProfileUpdateCancelled: boolean;
          authorDetails: AuthorDetails;
          authorQuoteDetails: AuthorQuoteDetails;
        }>
      ): AppState => ({
        ...state,
        accessDenied: "",
        isProfileUpdateCancelled: payload.isProfileUpdateCancelled,
        profileUpdateUnderProgress: false,
        authorDetails: payload.authorDetails,
        authorQuoteDetails: payload.authorQuoteDetails,
        isAuthorDetailsLoaded: true,
      })
    )
    .addCase(setShowUserProfile, (state, action) => {
      state.showUserProfile = action.payload;
    })
    .addCase(setShowAboutUs, (state, action) => {
      state.showAboutUs = action.payload;
    })
    .addCase(setShowForm, (state, action) => {
      state.showForm = action.payload;
    });
});

export default AppReducer;
