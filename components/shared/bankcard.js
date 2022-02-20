/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BankCard({ pairList, type }) {
  /* {title: string, value: float | string}[] */
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  var bankImgSource = pairList.length >= 3 ? "bankcard-big" : "bankcard";
  if (type === "goal") {
    bankImgSource = "goalcard";
  }
  const bankBorder = pairList.length >= 3 ? "#67BFFE" : "#8567fe";
  const headerSpacing = pairList.length >= 3 ? "2px" : "11px";

  // woo fragile
  const formattedPairList = pairList.map((p, i) => {
    return {
      title: p.title,
      value: (() => {
        if (typeof p.value === "number") {
          if (i === 0) {
            return formatter.format(p.value).substring(1);
          }
          return formatter.format(p.value);
        }
        return p.value;
      })(),
    };
  });

  return (
    <div className="container">
      <div className="body-text">
        {formattedPairList.map((pair, i) => (
          <div key={i}>
            <h2>{pair.title}</h2>
            <p className="budget-value">{pair.value}</p>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .container {
            position: relative;
            display: inline-block;
            background: center / cover no-repeat
              url("/photos/${bankImgSource}-bg.svg");
            border: 1px solid ${bankBorder};
            border-radius: 1rem;
            padding: 2rem;
          }

          h2 {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: ${headerSpacing};
            color: #474747;
          }

          p.budget-value {
            font-weight: 600;
            font-size: 32px;
            line-height: 44px;
            letter-spacing: 0.01em;
            color: #474747;
          }

          * {
            font-family: "Manrope", sans-serif;
          }
        `}
      </style>
    </div>
  );
}
