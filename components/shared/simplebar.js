import React from "react";

export default function CompletionBar({ percentage, color }) {
  return (
    <div className="gradient-bar">
      <div className="gradient-bar color-bar"></div>
      <style jsx>{`
        .gradient-bar {
          height: 1.5rem;
          background: #e5e5e5;
          border-radius: 0.5rem;
        }

        .color-bar {
          height: 100%;
          width: ${percentage}%;
          background: ${color};
        }
      `}</style>
    </div>
  );
}
