export default function InfoboxSmall({
  percentage,
  changePercentage,
  category,
  totalMoney,
}) {
  const classColor =
    Math.abs(changePercentage) <= 5
      ? "yellow"
      : changePercentage < 0
      ? "green"
      : "red";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="container p-4 border-box gap-1 place-items-end items-center row-span-2">
      <p></p>
      <p className="uppercase text-right tracking-widest text-gray-900 col-span-2">
        {category}
      </p>
      <p></p>
      <p className={`text-right text-sm col-span-2 ${classColor}`}>
        {changePercentage > 0 ? "▲ " : "▼ "} &nbsp;&nbsp;
        {Math.abs(Math.round(changePercentage))}% from last year
      </p>
      <p className="title text-right leading-11 font-bold">
        {Math.round(percentage)}%
      </p>
      <p className="text-right font-medium text-3xl text-gray-400">
        {formatter.format(totalMoney)}
      </p>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border: 1px solid #75c5ff66;
          border-radius: 0.75rem;
        }

        .yellow {
          color: #ff9900;
        }

        p.red {
          color: #ff4d00;
        }

        .green {
          color: #489c6a;
        }

        .title {
          color: #474747;
          font-size: 4rem;
        }

        * {
          font-family: "Manrope", sans-serif;
        }
      `}</style>
    </div>
  );
}
