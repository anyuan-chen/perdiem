import Head from "next/head";
import Image from "next/image";
import Calendar from "../components/dashboard/calendar";
import Navbar from "../components/shared/navbar";

export default function Home() {
  return (
    <div className="flex ">
      <Navbar></Navbar>
      <Calendar></Calendar>
    </div>
  );
}
