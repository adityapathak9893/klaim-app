import { useDispatch, useSelector } from "react-redux";
import {
  getAuthorDetails,
  getCompanyInfoData,
  getLogInAuthorization,
  logout,
  setShowAboutUs,
  setShowForm,
  setShowUserProfile,
} from "../../actions";
import { AppDispatch, RootState } from "../../app/store";
import { LoginCredentials } from "../../models/interfaces";

export const useStateSelector = () => ({
  companyInfoData: useSelector(
    (state: RootState) => state.klaimData.companyInfoData
  ),
  showUserProfile: useSelector(
    (state: RootState) => state.klaimData.showUserProfile
  ),
  showAboutUs: useSelector((state: RootState) => state.klaimData.showAboutUs),
  showForm: useSelector((state: RootState) => state.klaimData.showForm),
  userAuthorizationApproved: useSelector(
    (state: RootState) => state.klaimData.userAuthorizationApproved
  ),
  userProfileDetailes: useSelector(
    (state: RootState) => state.klaimData.userProfileDetailes
  ),
  accessDenied: useSelector((state: RootState) => state.klaimData.accessDenied),
  loadingIndicator: useSelector(
    (state: RootState) => state.klaimData.loadingIndicator
  ),
  authorDetails: useSelector(
    (state: RootState) => state.klaimData.authorDetails
  ),
  authorQuoteDetails: useSelector(
    (state: RootState) => state.klaimData.authorQuoteDetails
  ),
  isProfileUpdateCancelled: useSelector(
    (state: RootState) => state.klaimData.isProfileUpdateCancelled
  ),
  profileUpdateUnderProgress: useSelector(
    (state: RootState) => state.klaimData.profileUpdateUnderProgress
  ),
  isAuthorDetailsLoaded: useSelector(
    (state: RootState) => state.klaimData.isAuthorDetailsLoaded
  ),
});

export const useActionDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return {
    getCompanyInfoData: () => dispatch(getCompanyInfoData()),
    setShowUserProfile: (showUserProfile: boolean) =>
      dispatch(setShowUserProfile(showUserProfile)),
    setShowAboutUs: (showAboutUs: boolean) =>
      dispatch(setShowAboutUs(showAboutUs)),
    setShowForm: (showForm: boolean) => dispatch(setShowForm(showForm)),
    getLogInAuthorization: (loginCredentials: LoginCredentials) =>
      dispatch(getLogInAuthorization(loginCredentials)),
    logout: () => dispatch(logout()),
    getAuthorDetails: (isCancelled: boolean) =>
      dispatch(getAuthorDetails(isCancelled)),
  };
};
