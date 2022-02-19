import React from "react";
import Navbar from "../../components/shared/navbar";
import ResultCard from "../../components/breakdown/resultcard";
import InfoboxSmall from "../../components/breakdown/infobox-small";
import InfoboxBig from "../../components/breakdown/infobox-big";
import CompletionBar from "../../components/breakdown/bar";

export default function YearBreakdown() {
  const monthlyDescription = "August was your best month, with $6,000.20 spent";
  const weeklyDescription = "Your best week was February 1st to February 8th.";
  const dailyDescription = "Remember that time you only spent $20 one day in February? I can't.";

  return (
    <div className="flex container">
      <Navbar></Navbar>
      <div className="flex-column p-20 w-full">
        <h1 className="title">In 2021, you spent $100,000.04</h1>
        <h3 className="subtitle">
          You destroyed your budget of $80,000. Let&apos;s see how you managed
          to do it.
        </h3>
        <br />
        <div className="gap-10 grid grid-flow-row-dense grid-cols-2 grid-rows-5">
          <InfoboxSmall
            percentage={16}
            changePercentage={10}
            category="Entertainment"
            totalMoney={12.3}
          />
          <InfoboxBig
            percentage={23}
            changePercentage={-1}
            category="Groceries"
            totalMoney={7892.01}
          />
          <InfoboxBig
            percentage={23}
            changePercentage={-1}
            category="Groceries"
            totalMoney={7892.01}
          />
          <InfoboxSmall
            percentage={16}
            changePercentage={-10}
            category="Recreation"
            totalMoney={9890}
          />
        </div>
        <h1 className="title">Your biggest offenders were...</h1>
        <div className="bar-container flex flex-col p-6">
          <CompletionBar
            percentage={69}
            description="70% of your groceries were spent at Costco"
            cost={342.2}
          />
        </div>
        <h1 className="title">On average you spent...</h1>
        <div className="flex flex-col gap-8">
          <ResultCard
            title="Monthly"
            money={10000.02}
            description={monthlyDescription}
          />
          <ResultCard
            title="Weekly"
            money={3333.02}
            description={weeklyDescription}
          />
          <ResultCard
            title="Daily"
            money={23.02}
            description={dailyDescription}
          />
        </div>
        <div className="bar-container flex justify-center items-center p-6"></div>
      </div>
      <style jsx>{`
        .container {
          margin-left: 25vw;
          width: 75vw;
        }

        .title {
          font-weight: 800;
          font-size: 2.5rem;
          color: #474747;
          line-height: 5rem;
        }

        .subtitle {
          color: #818181;
          font-weight: 500;
          font-size: 1.25rem;
        }

        .bar-container {
          border: 1px solid #75c5ff66;
          border-radius: 0.75rem;
        }

        * {
          font-family: "Manrope", sans-serif;
        }
      `}</style>
    </div>
  );
}
