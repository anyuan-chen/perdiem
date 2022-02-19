/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Calendar from "../components/dashboard/calendar";
import BankCard from "../components/shared/bankcard";
import Navbar from "../components/shared/navbar";

export default function Home() {
  const bigPairList = [
    {
      title: "total bank balance",
      value: 338.34,
    },
    {
      title: "money spent today",
      value: 22003.98,
    },
    {
      title: "money spent today",
      value: 22003.98,
    },
  ];
  const pairList = [
    {
      title: "total bank balance",
      value: 338.34,
    },
    {
      title: "money spent today",
      value: 22003.98,
    },
  ];
  return (
    <div className="flex">
      <Navbar></Navbar>
      <div className="px-24 py-16 h-screen grid grid-row-2 grid-col-2 gap-x-20" style={{width: "75vw"}}>
        <div className="col-start-1 col-span-1 row-start-1 row-span-1 w-full h-full">
          <BankCard pairList={bigPairList}></BankCard>
        </div>
        <div className="col-start-2 col-span-1 row-start-1 row-span-1">
          <BankCard pairList={pairList}></BankCard>
          <div
            className="flex rounded-lg h-12 align-center mt-7 mb-2 pl-4"
            style={{ backgroundColor: "rgba(84,84,84,0.1)"}}
          >
            <img src="icons/lightbulb.svg" className="mt-2 mb-2"></img>
            <h4 className="font-display  pt-3 text-lg pl-4">
              Daily reminder that you are loved
            </h4>
          </div>
        </div>
        <div></div>
        <div className="col-start-1 col-span-2 row-start-2 row-span-2">
          <Calendar></Calendar>
        </div>
      </div>
    </div>
  );
}
