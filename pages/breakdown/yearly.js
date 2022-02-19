import React from "react";
import Navbar from "../../components/shared/navbar";
import ResultCard from "../../components/breakdown/resultcard";
import InfoboxSmall from "../../components/breakdown/infobox-small";
import InfoboxBig from "../../components/breakdown/infobox-big";
import CompletionBar from "../../components/breakdown/bar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function YearBreakdown() {
  const monthlyDescription = "August was your best month, with $6,000.20 spent";
  const weeklyDescription = "Your best week was February 1st to February 8th.";
  const dailyDescription =
    "Remember that time you only spent $20 one day in February? I can't.";

  return (
    <div className="flex container">
      <Navbar></Navbar>
      <div className="flex-column p-20 w-full cs-bg">
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
        <h1 className="title mt-8">Your biggest offenders were...</h1>
        <div className="bar-container flex flex-col p-6 bg-white">
          <CompletionBar
            percentage={69}
            description="70% of your groceries were spent at Costco"
            cost={342.2}
          />
        </div>
        <h1 className="title mt-8">On average you spent...</h1>
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
        <br />
        <br />
        <div className="bar-container flex flex-col p-6 overlayable bg-white">
          <h1 className="title">Monthly Spending</h1>
          <h3 className="subtitle">
            At the end of 2021, you were $20,000.04 over-budget, or 25%
          </h3>
          <Line
            datasetIdKey="id"
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  id: 1,
                  label: "",
                  lineTension: 0.4,
                  borderColor: "#2E77CD",
                  data: [5, 6, 7, 9, 10, 14, 50, 60, 70, 80, 90, 100],
                  pointRadius: 0,
                },
              ],
            }}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  display: false,
                },
              },
            }}
          />
          <div className="overlayed w-content">
            <p className="text-sm text-gray-400 font-medium text-right mb-2">
              budget = $80,000
            </p>
            <p className="text-sm text-gray-400 font-medium text-right">
              spending = $100,000.04
            </p>
          </div>
        </div>
        <h1 className="title mt-8">Your overall rating is :pensive: 😔</h1>
        <div className="flex gap-6 p-6 w-full h-80 flex-wrap">
          <div className="bar-container w-2/5 flex-grow flex flex-col justify-center items-center p-6 bg-white">
            <p className="uppercase text-center tracking-widest text-gray-900">
              You were over budget
            </p>
            <h4 className="title">80%</h4>
            <h2 className="font-medium text-2xl text-gray-400">of the time</h2>
          </div>
          <div className="bar-container w-2/5 flex-grow flex flex-col justify-center items-center p-6 bg-white">
            <p className="uppercase text-center tracking-widest text-gray-900">
              You spent
            </p>
            <h4 className="title">10%</h4>
            <h2 className="font-medium text-2xl text-gray-400">
              less than last year
            </h2>
          </div>
        </div>
        <p className="font-medium text-lg text-gray-700">
          Andrew, you improved! But… you went 25% over your budget. Sometimes we
          worry about you. Remember to drink water and take care of your
          financials.
        </p>
        <div className="flex flex-wrap gap-4 justify-between mt-8">
          <button
            type="button"
            className="uppercase text-center font-semibold tracking-widest text-white rounded-md bg-sky-600 p-4 py-2"
          >
            Revise your budget
          </button>
          <button
            type="button"
            className="uppercase text-center font-semibold tracking-widest text-white rounded-md bg-sky-600 p-4 py-2"
          >
            See monthly breakdown
          </button>
          <button
            type="button"
            className="uppercase text-center font-semibold tracking-widest text-white rounded-md bg-sky-600 p-4 py-2"
          >
            Export daily spending
          </button>
        </div>
      </div>
      <style jsx>{`
        .cs-bg {
          background: url(/photos/breakdown-bg.svg);
        }
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

        h4.title {
          font-size: 4rem;
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

        .overlayable {
          position: relative;
          display: inline-block;
        }

        .overlayed {
          position: absolute;
          top: 65%;
          left: 70%;
        }

        * {
          font-family: "Manrope", sans-serif;
        }
      `}</style>
    </div>
  );
}
