import React from "react";

export default function CompletionBar({ percentage, description, cost }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="">
      <div className="gradient-bar">
        <div className="gradient-bar color-bar"></div>
      </div>
      <div className="flex justify-between mt-3">
        <p className="font-semibold text-gray-500">{description}</p>
        <p className="font-semibold text-gray-900">{formatter.format(cost)}</p>
      </div>
      <style jsx>{`
        .gradient-bar {
          height: 1.5rem;
          background: #e5e5e5;
          border-radius: 0.5rem;
        }

        .color-bar {
          height: 100%;
          width: ${percentage}%;
          background: #2e77cd;
        }
      `}</style>
    </div>
  );
}
