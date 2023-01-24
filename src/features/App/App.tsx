import React, { useEffect } from "react";
import "./App.css";
import { Button, Space } from "antd";
import { useActionDispatch, useStateSelector } from "./App.hooks";

function App() {
  const { companyInfoData } = useStateSelector();
  const { getCompanyInfoData } = useActionDispatch();
  useEffect(() => {
    getCompanyInfoData();
  });
  return (
    <div className="App">
      <Space wrap>
        <Button>About us</Button>
        <Button>Sign in</Button>
      </Space>
      <div>
        <p>{companyInfoData.info}</p>
      </div>
    </div>
  );
}

export default App;
