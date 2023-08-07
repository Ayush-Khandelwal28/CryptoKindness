import React, { useState } from "react";
import IndexPage from "./IndexPage";
import DonatePage from "./DonatePage";

function Content() {
  const [showDonatePage, setShowDonatePage] = useState(false);

  const handleDonateClick = () => {
    setShowDonatePage(true);
  };

  const handleGoBack = () => {
    setShowDonatePage(false);
  };

  return showDonatePage ? (
    <DonatePage onGoBack={handleGoBack} />
  ) : (
    <IndexPage onDonateClick={handleDonateClick} />
  );
}

export default Content;
