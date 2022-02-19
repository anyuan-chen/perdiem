import React from "react";
import Navbar from "../../components/shared/navbar";
import ResultCard from "../../components/breakdown/resultcard";

export default function YearBreakdown() {
  const monthlyDescription = "August was your best month, with $6,000.20 spent";
  return (
    <div className="flex container">
      <Navbar></Navbar>
      <div className="flex-column m-4 w-full p-10">
        <h1>In 2021 you spent $100,000.04</h1>
        <h3>
          You destroyed your budget of $80,000. Let&apos;s see how you managed
          to do it.
        </h3>
        <div className="grid ">grid fancy here</div>
        <h1>Your biggest offenders were...</h1>
        <h1>On average you spent...</h1>
        <ResultCard
          title="Monthly"
          money={10000.02}
          description={monthlyDescription}
        ></ResultCard>
      </div>
      <style jsx>{`
        .container {
          margin-left: 25vw;
        }
      `}</style>
    </div>
  );
}
