import React from "react";
import spendingData from "../../data/spendingData.json";

const allDays = [
  ...new Set(spendingData.map((i) => i.time.substring(0, i.time.indexOf("T")))),
]; // remove duplicates and convert to array to use map

const dayStructure = {};
for (const d of allDays) {
  dayStructure[d] = [];
  dayStructure[d].push(...spendingData.filter((i) => i.time.startsWith(d)));
}

export default function Day({ day }) {
  return (
    <div>
      <h2>Purchases</h2>
      {day.map((d, i) => (
        <div key={i}>
          <p>
            <strong>{d.store}</strong>
            <p>${d.amount}</p>
            <p>{new Date(d.time).toLocaleString()}</p>
          </p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      day: dayStructure[params.day],
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
