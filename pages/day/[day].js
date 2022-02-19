import React from "react";
import spendingData from "../../data/spendingData.json";

const allDays = [
  ...new Set(spendingData.map((i) => i.time.substring(0, i.time.indexOf("T")))),
]; // remove duplicates and convert to array to use map

export default function Day({ day }) {
  return <div>{day}</div>;
}

export async function getStaticProps({ params }) {
  return {
    props: {
      day: spendingData.filter((d) => d.time.startsWith(params.day)),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: allDays.map((day) => {
      return {
        params: {
          day,
        },
      };
    }),
    fallback: false,
  };
}
