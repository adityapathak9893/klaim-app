import {
  AUTHOR_DETAILS,
  AUTHOR_QUOTE_DETAILS,
  COMPANY_INFO_MOCK_DATA,
  SAVED_USER_DETAILS,
  SAVED_USER_PROFILE,
} from "../models/constants";
import {
  AboutUsAPIResponse,
  AuthorDetailsAPIResponse,
  AuthorQuoteDetails,
  LoginCredentials,
  ProfileResponse,
  userAuthorizationAPIResponse,
} from "../models/interfaces";
import _ from "lodash";

export const getCompanyInfoCall = async (): Promise<AboutUsAPIResponse> => {
  return new Promise((resolve) => {
    window.setTimeout(
      () =>
        resolve({
          success: true,
          data: COMPANY_INFO_MOCK_DATA,
        }),
      2000
    );
  });
};

export const getLogInAuthorizationCall = async (
  loginCredentials: LoginCredentials
): Promise<userAuthorizationAPIResponse> => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (_.isEqual(loginCredentials, SAVED_USER_DETAILS)) {
        resolve({
          success: true,
          data: { token: "fb566635a66295da0c8ad3f467c32dcf" },
        });
      } else {
        reject({
          success: false,
          data: { message: "Access denied." },
        });
      }
    }, 1000);
  });
};

export const getProfileCall = async (): Promise<ProfileResponse> => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(SAVED_USER_PROFILE);
    }, 2000);
  });
};

export const logOutCall = async (): Promise<boolean> => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(true);
    }, 3000);
  });
};

export const getAuthorDetailsCall = async (
  isCancelled: boolean
): Promise<AuthorDetailsAPIResponse> => {
  return new Promise((resolve, reject) => {
    if (!isCancelled) {
      window.setTimeout(() => {
        resolve({ success: true, data: AUTHOR_DETAILS });
      }, 5000);
    } else {
      reject({
        success: false,
        data: { message: "User has Cancelled the operation" },
      });
    }
  });
};

export const getAuthorQuoteDetailsCall =
  async (): Promise<AuthorQuoteDetails> => {
    return new Promise((resolve) => {
      resolve(AUTHOR_QUOTE_DETAILS);
    });
  };
