import React, { useEffect } from "react";
import "./App.css";
import { useActionDispatch, useStateSelector } from "../Hooks";
import { Buttons } from "../Buttons/Buttons";
import { SignInForm } from "../SignInForm/SignInForm";
import { ProgressIndicator } from "../ProgressIndicator/ProgressIndicator";
import { UserProfile } from "../UserProfile/UserProfile";

export const App: React.FC = () => {
  const {
    companyInfoData,
    showAboutUs,
    showForm,
    loadingIndicator,
    accessDenied,
    showUserProfile,
  } = useStateSelector();
  const { getCompanyInfoData } = useActionDispatch();
  useEffect(() => {
    getCompanyInfoData();
  }, []);

  const getUpdatedUI = (): JSX.Element => {
    return (
      <div className="dynamicUIWrapper">
        <div className="buttonsWrapper">
          <Buttons />
        </div>
        {showAboutUs && (
          <div className="aboutUsWrapper">
            <p>{companyInfoData.info}</p>
          </div>
        )}
        {showForm && (
          <div className="formWrapper">
            <SignInForm />
          </div>
        )}
        {showUserProfile && <UserProfile />}
      </div>
    );
  };

  const getAccessDeniedUI = (): JSX.Element => {
    return (
      <div className="accessDeniedWrapper">
        <p>{accessDenied}</p>
      </div>
    );
  };

  return (
    <div className="appContainer">
      {loadingIndicator ? (
        <div className="progressIndWrapper">
          <ProgressIndicator />
        </div>
      ) : !!accessDenied ? (
        getAccessDeniedUI()
      ) : (
        getUpdatedUI()
      )}
    </div>
  );
};
