import {
  AppState,
  AuthorDetails,
  AuthorQuoteDetails,
  CompanyInfoData,
  ProfileResponse,
} from "../interfaces";

export const initializedCompanyInfoData: CompanyInfoData = { info: "" };
export const initializedUserProfileDetails: ProfileResponse = {
  fullname: "",
  email: "",
};

export const initializedAuthorDetails: AuthorDetails = {
  authorId: 0,
  name: "",
};

export const initializedAuthorQuoteDetails: AuthorQuoteDetails = {
  quoteId: 0,
  authorId: 0,
  quote: "",
};

export const initializedAppState: AppState = {
  loadingIndicator: true,
  companyInfoData: initializedCompanyInfoData,
  showAboutUs: true,
  showUserProfile: false,
  showForm: false,
  userAuthorizationApproved: false,
  userProfileDetailes: initializedUserProfileDetails,
  accessDenied: "",
  authorDetails: initializedAuthorDetails,
  authorQuoteDetails: initializedAuthorQuoteDetails,
  isProfileUpdateCancelled: false,
  profileUpdateUnderProgress: false,
  isAuthorDetailsLoaded: false,
};
