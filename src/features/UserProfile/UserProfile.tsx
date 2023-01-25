import React from "react";
import { useActionDispatch, useStateSelector } from "../Hooks";
import { Button, Space } from "antd";
import "./UserProfile.css";

export const UserProfile: React.FC = () => {
  const {
    userProfileDetailes,
    authorDetails,
    authorQuoteDetails,
    profileUpdateUnderProgress,
    isAuthorDetailsLoaded,
  } = useStateSelector();
  const { getAuthorDetails } = useActionDispatch();
  const showUserProfile = (): JSX.Element => {
    return (
      <div className="userProfileWrapper">
        <p className="userProfileText">{`Welcome, ${
          userProfileDetailes.fullname.split(" ")[0]
        }`}</p>
        <Space wrap>
          <Button type="primary" onClick={() => getAuthorDetails(false)}>
            Update
          </Button>
        </Space>
        {isAuthorDetailsLoaded && (
          <p className="authorDetails">{`${authorDetails.name} : ${authorQuoteDetails.quote}`}</p>
        )}
      </div>
    );
  };

  const showSteps = (): JSX.Element => {
    return (
      <div className="stepsWrapper">
        <div className="steps">Step 1: Requesting Author</div>
        <div className="steps">Step 2 : Requesting Quote</div>
        <Space wrap>
          <Button type="primary" onClick={() => getAuthorDetails(true)}>
            Cancel
          </Button>
        </Space>
      </div>
    );
  };

  return !profileUpdateUnderProgress ? showUserProfile() : showSteps();
};
