/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Calendar from "../components/dashboard/calendar";
import BankCard from "../components/shared/bankcard";
import Navbar from "../components/shared/navbar";

export default function Home({
  dayInfo,
  bankBalance,
  moneySpentToday,
  budgetLeft,
  recommendedSpending,
}) {
  const bigPairList = [
    {
      title: "total bank balance",
      value: bankBalance,
    },
    {
      title: "money spent today",
      value: moneySpentToday,
    },
    {
      title: "chequing account",
      value: "XXXXXXXXXXXXXXXX",
    },
  ];
  const pairList = [
    {
      title: "money left in budget",
      value: budgetLeft,
    },
    {
      title: "recommended spending",
      value: recommendedSpending,
    },
  ];
  return (
    <div className="flex" style={{ marginLeft: "25vw" }}>
      <Navbar></Navbar>
      <div
        className="px-24 py-16 h-screen grid grid-row-2 grid-col-2 gap-x-20"
        style={{ width: "75vw" }}
      >
        <div className="col-start-1 col-span-1 row-start-1 row-span-1 w-full h-full">
          <BankCard pairList={bigPairList}></BankCard>
        </div>
        <div className="col-start-2 col-span-1 row-start-1 row-span-1">
          <BankCard pairList={pairList}></BankCard>
          <div
            className="flex rounded-lg h-16 align-center mt-3 mb-2 pl-4"
            style={{ backgroundColor: "rgba(84,84,84,0.1)" }}
          >
            <img src="icons/lightbulb.svg" className="mt-2 mb-2"></img>
            <h4 className="font-display  pt-5 text-lg pl-4">
              Daily reminder that you are loved
            </h4>
          </div>
        </div>
        <div></div>
        <div className="col-start-1 col-span-2 row-start-2 row-span-2 pt-8 pb-6">
          <Calendar dayInfo={dayInfo}></Calendar>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  var dayInfo = [];
  let httpProtocol;
  if (context.req.headers.host.includes("localhost")) {
    httpProtocol = "http";
  } else {
    httpProtocol = "https";
  }

  for (
    var i = new Date(2022, 0, 29);
    i <= new Date(2022, 2, 4);
    i.setDate(i.getDate() + 1)
  ) {
    const date = i.toISOString();

    const yyyymmdd = i.toISOString().substr(0, 10);
    const res = await fetch(
      `${httpProtocol}://${context.req.headers.host}/api/calendarcolor?date=${yyyymmdd}`
    );
    const req = await res.json();

    var color = req.color;
    var spending = req.spending;
    if (!color) {
      color = "#E5E5E5";
    }
    if (!spending) {
      spending = "---";
    } else {
      spending = formatter.format(spending);
    }
    dayInfo.push({ date, color, spending });
  }

  const res = await (
    await fetch(`${httpProtocol}://${context.req.headers.host}/api/spendrec`)
  ).json();

  const historyRes = await (
    await fetch(
      `${httpProtocol}://${context.req.headers.host}/api/history?date=${
        new Date().toISOString().split("T")[0]
      }`
    )
  ).json();

  const recommendedSpending = res.amount;
  const moneySpentToday =
    historyRes.map((e) => e.amount).reduce((a, b) => a + b, 0) || 0;
  console.log(recommendedSpending, moneySpentToday);
  return {
    props: {
      dayInfo: dayInfo,
      bankBalance: 0,
      moneySpentToday: moneySpentToday,
      budgetLeft: 0,
      recommendedSpending: recommendedSpending,
    },
  };
};
