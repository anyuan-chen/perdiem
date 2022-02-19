/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BankCard({ pairList, type }) {
  /* {title: string, value: float | string}[] */
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  var bankImgSource = pairList.length >= 3 ? "bankcard-big" : "bankcard";
  if (type === "goal"){
    bankImgSource = "goalcard";
  }
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
      <img src={`/photos/${bankImgSource}-bg.svg`} width="auto" alt="bg-card" />
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

          .body-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 100%;
            width: 100%;
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 40px;
            padding-bottom: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          * {
            font-family: "Manrope", sans-serif;
          }
        `}
      </style>
    </div>
  );
}
