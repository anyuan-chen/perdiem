import React from "react";

export default function CompletionBar({ percentage, color }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="gradient-bar">
      <div className="gradient-bar color-bar"></div>
      <style jsx>{`
        .gradient-bar {
          height: 1.5rem;
          background: ${color};
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
