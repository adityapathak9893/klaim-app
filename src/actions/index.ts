import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuthorDetailsCall,
  getAuthorQuoteDetailsCall,
  getCompanyInfoCall,
  getLogInAuthorizationCall,
  getProfileCall,
  logOutCall,
} from "../data-services";
import {
  GET_AUTHOR_DETAILS,
  GET_COMPANY_INFO,
  GET_LOGIN_AUTHORIZATION,
  LOG_OUT,
  SET_SHOW_ABOUT_US,
  SET_SHOW_FORM,
  SET_SHOW_USER_PROFILE,
} from "../models/constants";
import {
  initializedAuthorDetails,
  initializedAuthorQuoteDetails,
  initializedUserProfileDetails,
} from "../models/initializations";
import {
  AboutUsAPIResponse,
  AuthorDetails,
  AuthorDetailsAPIResponse,
  AuthorQuoteDetails,
  CompanyInfoData,
  LoginCredentials,
  ProfileResponse,
} from "../models/interfaces";

export const getCompanyInfoData = createAsyncThunk<CompanyInfoData>(
  GET_COMPANY_INFO,
  async () => {
    const data: AboutUsAPIResponse = await getCompanyInfoCall();
    if (data.success) {
      return {
        info: data.data.info,
      };
    } else {
      return {
        info: data.data.message,
      };
    }
  }
);

export const getLogInAuthorization = createAsyncThunk<
  {
    userAuthorizationApproved: boolean;
    userProfileDetailes: ProfileResponse;
    showUserProfile: boolean;
  },
  LoginCredentials
>(GET_LOGIN_AUTHORIZATION, async (loginCredentials: LoginCredentials) => {
  const authorizationData = await getLogInAuthorizationCall(loginCredentials);
  if (authorizationData.success) {
    const profileData = await getProfileCall();
    return {
      userAuthorizationApproved: true,
      userProfileDetailes: profileData,
      showUserProfile: true,
    };
  } else {
    return {
      userAuthorizationApproved: false,
      userProfileDetailes: initializedUserProfileDetails,
      showUserProfile: false,
    };
  }
});

export const logout = createAsyncThunk<{
  userAuthorizationApproved: boolean;
  userProfileDetailes: ProfileResponse;
  showUserProfile: boolean;
}>(LOG_OUT, async () => {
  const data: boolean = await logOutCall();
  return {
    userAuthorizationApproved: !data,
    userProfileDetailes: initializedUserProfileDetails,
    showUserProfile: false,
  };
});

export const setShowAboutUs = createAction(
  SET_SHOW_ABOUT_US,
  (showAboutUs: boolean) => ({ payload: showAboutUs })
);

export const setShowUserProfile = createAction(
  SET_SHOW_USER_PROFILE,
  (showUserProfile: boolean) => ({ payload: showUserProfile })
);

export const setShowForm = createAction(SET_SHOW_FORM, (showForm: boolean) => ({
  payload: showForm,
}));

export const getAuthorDetails = createAsyncThunk<
  {
    isProfileUpdateCancelled: boolean;
    authorDetails: AuthorDetails;
    authorQuoteDetails: AuthorQuoteDetails;
  },
  boolean
>(GET_AUTHOR_DETAILS, async (isCancelled: boolean) => {
  const authorDetailsAPIResponseData: AuthorDetailsAPIResponse =
    await getAuthorDetailsCall(isCancelled);
  if (authorDetailsAPIResponseData.success) {
    const authorQuoteDetailsData: AuthorQuoteDetails =
      await getAuthorQuoteDetailsCall();
    return {
      authorDetails: authorDetailsAPIResponseData.data,
      authorQuoteDetails: authorQuoteDetailsData,
      isProfileUpdateCancelled: false,
    };
  }
  return {
    authorDetails: initializedAuthorDetails,
    authorQuoteDetails: initializedAuthorQuoteDetails,
    isProfileUpdateCancelled: true,
  };
});
