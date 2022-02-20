import React, { useState } from "react";
import Navbar from "../../components/shared/navbar";
import ResultCard from "../../components/breakdown/resultcard";
import InfoboxSmall from "../../components/breakdown/infobox-small";
import InfoboxBig from "../../components/breakdown/infobox-big";
import BreakdownBar from "../../components/breakdown/bar";
import { Line } from "react-chartjs-2";
import toCsv from "../../components/utils/json2csv";
import spendingData from "../../data/spendingData.json";
import dayjs from "dayjs";
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

export default function YearBreakdown({
  budget,
  spent,
  categories,
  greatestIncome,
  lowestStats,
  username,
  monthlyTotals,
  spentTwoYearsAgo,
  aboveBudgetDays,
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const monthlyDescription = `${
    lowestStats.month.month
  } was your best month, with ${formatter.format(
    lowestStats.month.best
  )} spent.`;
  const weeklyDescription = `Your best week was from ${dayjs(
    lowestStats.week
  ).format("MMMM D")} to ${dayjs(lowestStats.week)
    .add(7, "days")
    .format("MMMM D")}, when you spent only ${formatter.format(
    lowestStats.week.best
  )}.`;
  const dailyDescription = `Remember that time you only spent ${formatter.format(
    lowestStats.day.best
  )} one day in ${dayjs(lowestStats.day.day).format("MMMM")}? I can't.`;

  const lastYear = dayjs().subtract(1, "year").format("YYYY");
  const EXAGGERATORY_WORDS = [
    { multiplier: 1.75, message: "destroyed" },
    { multiplier: 1.25, message: "were well over" },
    { multiplier: 0.75, message: "just about met" },
    { multiplier: 0, message: "were well under" },
  ];

  let chosenExaggeratoryWord = "you should not see this";
  for (const pair of EXAGGERATORY_WORDS) {
    if (pair.multiplier * budget <= spent) {
      chosenExaggeratoryWord = pair.message;
      break;
    }
  }

  let categoryTotals = {};
  for (const a of categories) {
    categoryTotals[a.category] = a.totalMoney;
  }

  const averages = {
    monthly: spent / 12,
    weekly: spent / 52,
    daily: spent / 365,
  };

  const lastYearDeltaPercentage = Math.round(
    100 - (spent / spentTwoYearsAgo) * 100
  );

  return (
    <div className="flex container cs-bg">
      <Navbar></Navbar>
      <div className="flex-column p-20 w-auto" style={{ maxWidth: "1000px" }}>
        <h1 className="title">
          In {lastYear}, you spent {formatter.format(spent)}
        </h1>
        <h3 className="subtitle">
          You {chosenExaggeratoryWord} your budget of {formatter.format(budget)}
          . Let&apos;s see how you managed to do it.
        </h3>
        <br />
        <div className="gap-10 grid grid-flow-row-dense grid-cols-2 grid-rows-5">
          <InfoboxSmall {...categories[0]} />
          <InfoboxBig {...categories[1]} />
          <InfoboxBig {...categories[2]} />
          <InfoboxSmall {...categories[3]} />
        </div>
        <h1 className="title mt-8">Your biggest offenders were...</h1>
        <div className="bar-container flex flex-col p-6 bg-white gap-8">
          {greatestIncome.slice(0, 5).map((obj, i) => (
            <BreakdownBar
              key={i}
              percentage={(obj.total / categoryTotals[obj.category]) * 100}
              cost={obj.total}
              description={`${Math.round(
                (obj.total / categoryTotals[obj.category]) * 100
              )}% of your ${obj.category.toLowerCase()} spending was at ${
                obj.name
              }`}
            />
          ))}
        </div>
        <h1 className="title mt-8">On average you spent...</h1>
        <div className="flex flex-col gap-8">
          <ResultCard
            title="Monthly"
            money={averages.monthly}
            description={monthlyDescription}
          />
          <ResultCard
            title="Weekly"
            money={averages.weekly}
            description={weeklyDescription}
          />
          <ResultCard
            title="Daily"
            money={averages.daily}
            description={dailyDescription}
          />
        </div>
        <br />
        <br />
        <div className="bar-container flex flex-col p-6 overlayable bg-white w-full">
          <h1 className="title">Monthly Spending</h1>
          <h3 className="subtitle">
            At the end of 2021, you were{" "}
            {formatter.format(Math.abs(budget - spent))}{" "}
            {budget > spent ? "under" : "over"}-budget, or{" "}
            {Math.round((spent / budget) * 100)}%
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
                  data: monthlyTotals,
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
              budget = {formatter.format(budget)}
            </p>
            <p className="text-sm text-gray-400 font-medium text-right">
              spending = {formatter.format(spent)}
            </p>
          </div>
        </div>
        <h1 className="title mt-8">Your overall rating is :pensive: 😔</h1>
        <div className="flex gap-6 p-6 w-full h-80 flex-wrap">
          <div className="bar-container w-2/5 flex-grow flex flex-col justify-center items-center p-6 bg-white">
            <p className="uppercase text-center tracking-widest text-gray-900">
              You were over budget
            </p>
            <h4 className="title">
              {Math.round((aboveBudgetDays / 365) * 100)}%
            </h4>
            <h2 className="font-medium text-2xl text-gray-400">of the time</h2>
          </div>
          <div className="bar-container w-2/5 flex-grow flex flex-col justify-center items-center p-6 bg-white">
            <p className="uppercase text-center tracking-widest text-gray-900">
              You spent
            </p>
            <h4 className="title">{Math.abs(lastYearDeltaPercentage)}%</h4>
            <h2 className="font-medium text-2xl text-gray-400">
              {lastYearDeltaPercentage < 0 ? "less" : "more"} than last year
            </h2>
          </div>
        </div>
        <p className="font-medium text-lg text-gray-700">
          {username},{" "}
          {lastYearDeltaPercentage > 0
            ? "you improved! But"
            : "you haven't improved! And"}
          … you went {Math.round((spent / budget) * 100)}% over your budget.
          Sometimes we worry about you. Remember to drink water and take care of
          your financials.
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
          <a
            className="uppercase text-center font-semibold tracking-widest text-white rounded-md bg-sky-600 p-4 py-2"
            href={`data:application/json;charset=utf-8,${encodeURIComponent(
              toCsv(spendingData)
            )}`}
            download="data.csv"
          >
            Export daily spending
          </a>
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

export const getServerSideProps = async (context) => {
  const httpProtocol = context.req.headers.host.includes("localhost")
    ? "http"
    : "https";
  const { username, budget, balance } = await (
    await fetch(`${httpProtocol}://${context.req.headers.host}/api/userinfo`)
  ).json();

  const history = await (
    await fetch(`${httpProtocol}://${context.req.headers.host}/api/history`)
  ).json();

  const lastYear = dayjs().subtract(1, "year").format("YYYY");
  const lastLastYear = dayjs().subtract(2, "year").format("YYYY");

  const spent = history
    .filter((i) => i.time.startsWith(lastYear))
    .map((i) => i.amount)
    .reduce((a, b) => a + b, 0);

  const spentTwoYearsAgo = history
    .filter((i) => i.time.startsWith(lastLastYear))
    .map((i) => i.amount)
    .reduce((a, b) => a + b, 0);

  const categories = [];

  for (const c of [
    "Recreation",
    "Groceries",
    "Restaurants",
    "Transportation",
    "Other",
  ]) {
    const total = history
      .filter((i) => i.category === c && i.time.startsWith(lastYear))
      .map((i) => i.amount)
      .reduce((a, b) => a + b, 0);

    const totalTwoYearsAgo = history
      .filter((i) => i.category === c && i.time.startsWith(lastLastYear))
      .map((i) => i.amount)
      .reduce((a, b) => a + b, 0);

    categories.push({
      category: c,
      percentage: (total / spent) * 100 || 0,
      totalMoney: total || 0,
      changePercentage: (total / totalTwoYearsAgo) * 100 || 0,
    });
  }

  const greatestIncome = [];
  const shops = {};
  history.forEach((i) => {
    if (!shops[i.name]) shops[i.name] = { name: i.name, category: i.category };
  });

  for (const i of Object.values(shops)) {
    greatestIncome.push({
      name: i.name,
      category: i.category,
      total: history
        .filter((a) => a.name === i.name && a.time.startsWith(lastYear))
        .map((a) => a.amount)
        .reduce((a, b) => a + b, 0),
    });
  }
  greatestIncome.sort((a, b) => b.total - a.total);

  const dayTotals = {};
  for (const i of history) {
    const date = dayjs(i.time);
    const dateFormatted = date.format("YYYY-MM-DD");
    if (date.year() === +lastYear && dayTotals[dateFormatted]) {
      dayTotals[dateFormatted] += i.amount;
    } else if (date.year() === +lastYear) {
      dayTotals[dateFormatted] = i.amount;
    }
  }

  const lowestStats = {
    month: { month: 0, best: 10 ** 7 },
    week: { week: 0, best: 10 ** 7 },
    day: { day: 0, best: 10 ** 7 },
  };

  let currentMonth = 0,
    currentDay = 0,
    currentWeek = 0;

  const monthlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let aboveBudgetDays = 0;
  let begin = false;

  for (
    let day = dayjs(`${lastYear}-01-01`);
    day.year() != dayjs().year();
    day = day.add(1, "day")
  ) {
    const dateFormatted = day.format("YYYY-MM-DD");
    if (dayTotals[dateFormatted]) {
      currentMonth += dayTotals[dateFormatted];
      currentWeek += dayTotals[dateFormatted];
      currentDay = dayTotals[dateFormatted];
      begin = true;
    }

    if (day.date() === day.daysInMonth()) {
      if (lowestStats.month.best > currentMonth && begin) {
        lowestStats.month.month = day.format("MMMM");
        lowestStats.month.best = currentMonth;
      }
      monthlyTotals[day.month()] = currentMonth;
      currentMonth = 0;
    }

    if (day.day() === 6) {
      if (lowestStats.week.best > currentWeek && begin) {
        lowestStats.week.week = day.subtract(7, "days").format("YYYY-MM-DD");
        lowestStats.week.best = currentWeek;
      }
      currentWeek = 0;
    }

    if (lowestStats.day.best > currentDay && begin) {
      lowestStats.day.day = day.format("YYYY-MM-DD");
      lowestStats.day.best = currentDay;
    }

    if (currentDay > budget / 365) aboveBudgetDays++;
  }

  return {
    props: {
      budget,
      spent,
      categories,
      greatestIncome,
      lowestStats,
      username,
      monthlyTotals,
      spentTwoYearsAgo,
      aboveBudgetDays,
    },
  };
};
