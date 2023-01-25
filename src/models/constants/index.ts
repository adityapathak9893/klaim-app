import {
  AuthorDetails,
  AuthorQuoteDetails,
  CompanyInfoData,
  LoginCredentials,
  ProfileResponse,
} from "../interfaces";

export const GET_COMPANY_INFO: string = "GET_COMPANY_INFO";
export const SET_SIGNIN_STATUS: string = "SET_SIGNIN_STATUS";
export const SET_SHOW_ABOUT_US: string = "SET_SHOW_ABOUT_US";
export const SET_SHOW_USER_PROFILE: string = "SET_SHOW_USER_PROFILE";
export const SET_SHOW_FORM: string = "SET_SHOW_FORM";
export const GET_LOGIN_AUTHORIZATION: string = "GET_LOGIN_AUTHORIZATION";
export const GET_AUTHOR_DETAILS: string = "GET_AUTHOR_DETAILS";
export const GET_AUTHOR_QUOTE_DETAILS: string = "GET_AUTHOR_QUOTE_DETAILS";
export const LOG_OUT: string = "LOG_OUT";
export const COMPANY_INFO_MOCK_DATA: CompanyInfoData = {
  info: "Our mission is to help healthcare providers get paidwhat they’re owed, on time.",
};
export const SAVED_USER_DETAILS: LoginCredentials = {
  email: "alexey@klaim.ai",
  password: "lkJlkn8hj",
};
export const SAVED_USER_PROFILE: ProfileResponse = {
  fullname: "Alexey Kornilov",
  email: "alexey@klaim.ai",
};

export const AUTHOR_DETAILS: AuthorDetails = {
  authorId: 1,
  name: "Charlie Chaplin",
};

export const AUTHOR_QUOTE_DETAILS: AuthorQuoteDetails = {
  quoteId: 1,
  authorId: 1,
  quote: "A day without laughter is a day wasted.",
};
