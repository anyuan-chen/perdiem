/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BankCard({ budgetRemaining, recommendedSpending }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedSpending = formatter.format(recommendedSpending);
  const formattedBudget = formatter.format(budgetRemaining).substring(1);
  return (
    <div className="container">
      <img src="/photos/bankcard-bg.svg" width="auto" alt="bg-card" />
      <div className="body-text">
        <div className="">
          <h2>MONEY LEFT IN BUDGET</h2>
          <p className="budget-value">{formattedBudget}</p>
        </div>
        <div>
          <h2>RECOMMENDED SPENDING</h2>
          <p className="budget-value">{formattedSpending}</p>
        </div>
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
            margin-bottom: 11px;
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
