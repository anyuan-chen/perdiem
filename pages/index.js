import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/shared/navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-rows-8 grid-cols-8"></div>
    </div>
  );
}
