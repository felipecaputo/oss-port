import React, { FunctionComponent } from "react";
import ContributionOverview from "./ContributionOverview";
import CurrentlySeeking from "./CurrentlySeeking";
import AnchorHeader from "./AnchorHeader";

const Overview: FunctionComponent = ({ children }) => {
  return (
    <div className="mb-8">
      <AnchorHeader id="overview">Overview</AnchorHeader>
      {children}
      <div className="md:flex md:space-x-6">
        <CurrentlySeeking />
        <ContributionOverview />
      </div>
    </div>
  );
};

export default Overview;
