import React from "react";
import CompletionBar from "../shared/simplebar";

export default function BreakdownBar({ percentage, description, cost }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="">
      <CompletionBar percentage={percentage} color="#2e77cd" />
      <div className="flex justify-between mt-3">
        <p className="font-semibold text-gray-500">{description}</p>
        <p className="font-semibold text-gray-900">{formatter.format(cost)}</p>
      </div>
    </div>
  );
}
