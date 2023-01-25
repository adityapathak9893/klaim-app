export interface AppState {
  loadingIndicator: boolean;
  companyInfoData: CompanyInfoData;
  showAboutUs: boolean;
  showUserProfile: boolean;
  showForm: boolean;
  userAuthorizationApproved: boolean;
  userProfileDetailes: ProfileResponse;
  accessDenied: string;
  authorDetails: AuthorDetails;
  authorQuoteDetails: AuthorQuoteDetails;
  isProfileUpdateCancelled: boolean;
  profileUpdateUnderProgress: boolean;
  isAuthorDetailsLoaded: boolean;
}

export interface AuthorDetails {
  authorId?: number;
  name?: string;
  message?: string;
}

export interface AuthorQuoteDetails {
  quoteId: number;
  authorId: number;
  quote: string;
}

export interface CompanyInfoData {
  info?: string;
  message?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

export interface ProfileResponse {
  fullname: string;
  email: string;
}

export interface AboutUsAPIResponse {
  success: boolean;
  data: CompanyInfoData;
}

export interface userAuthorizationAPIResponse {
  success: boolean;
  data: TokenResponse;
}

export interface AuthorDetailsAPIResponse {
  success: boolean;
  data: AuthorDetails | { message: string };
}

export interface AuthorQuoteDetailsAPIResponse {
  success: boolean;
  data: AuthorQuoteDetails | { message: string };
}

export interface userProfileAPIResponse {
  success: boolean;
  data: ProfileResponse;
}
