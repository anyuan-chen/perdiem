import Head from "next/head";
import Image from "next/image";
import Calendar from "../components/dashboard/calendar";
import BankCard from "../components/shared/bankcard";
import Navbar from "../components/shared/navbar";

export default function Home() {
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
    <div className="flex ">
      <div>
        <BankCard pairList={pairList}></BankCard>
      </div>
      <Navbar></Navbar>
      <div className="w-80vw h-screen">
        
        <Calendar></Calendar>
      </div>
    </div>
  );
}
