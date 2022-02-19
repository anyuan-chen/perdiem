import Head from "next/head";
import Image from "next/image";
import Calendar from "../components/dashboard/calendar";
import BankCard from "../components/shared/bankcard";
import Navbar from "../components/shared/navbar";

export default function Home() {
  return (
    <div className="flex ">
      <div>
        <BankCard
          budgetRemaining={338.34}
          recommendedSpending={123.45}
        ></BankCard>
      </div>
      <Navbar></Navbar>
      <Calendar></Calendar>
    </div>
  );
}
