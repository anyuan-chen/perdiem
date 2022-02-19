export default function Big({
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
    <div className="container p-4 flex flex-col justify-between items-center row-span-2">
      <p className="title font-bold">{Math.round(percentage)}%</p>
      <p className={`text-right text-sm ${classColor}`}>
        {changePercentage > 0 ? "▲ " : "▼ "} &nbsp;&nbsp;
        {Math.abs(Math.round(changePercentage))}% from last year
      </p>
      <p className="uppercase tracking-widest text-gray-900">{category}</p>

      <p className="font-medium text-3xl text-gray-400">
        {formatter.format(totalMoney)}
      </p>

      <style jsx>{`
        .container {
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
