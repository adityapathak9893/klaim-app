import { Button, Space } from "antd";
import React, { FC } from "react";
import { useActionDispatch, useStateSelector } from "../Hooks";

export const Buttons: FC = () => {
  const {
    getCompanyInfoData,
    logout,
    setShowAboutUs,
    setShowUserProfile,
    setShowForm,
  } = useActionDispatch();
  const { userAuthorizationApproved } = useStateSelector();
  const handleAboutUsClick = () => {
    getCompanyInfoData().then(() => {
      setShowUserProfile(false);
      setShowForm(false);
      setShowAboutUs(true);
    });
  };
  const handleSignOut = () => {
    logout().then(() => setShowAboutUs(true));
  };
  const handleSignIn = () => {
    setShowForm(true);
    setShowAboutUs(false);
  };
  const handleShowUserProfile = () => {
    setShowAboutUs(false);
    setShowUserProfile(true);
  };
  return (
    <Space wrap>
      <Button
        onClick={(
          event:
            | React.MouseEvent<HTMLAnchorElement, MouseEvent>
            | React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => handleAboutUsClick()}
      >
        About us
      </Button>
      {!userAuthorizationApproved ? (
        <Button
          onClick={(
            event:
              | React.MouseEvent<HTMLAnchorElement, MouseEvent>
              | React.MouseEvent<HTMLButtonElement, MouseEvent>
          ) => handleSignIn()}
        >
          Sign in
        </Button>
      ) : (
        <>
          <Button
            onClick={(
              event:
                | React.MouseEvent<HTMLAnchorElement, MouseEvent>
                | React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => handleShowUserProfile()}
          >
            Profile
          </Button>
          <Button
            onClick={(
              event:
                | React.MouseEvent<HTMLAnchorElement, MouseEvent>
                | React.MouseEvent<HTMLButtonElement, MouseEvent>
            ) => handleSignOut()}
          >
            Sign out
          </Button>
        </>
      )}
    </Space>
  );
};
