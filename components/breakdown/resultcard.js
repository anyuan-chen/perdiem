export default function ResultCard({ title, money, description }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="container flex flex-col justify-between h-fit">
      <h2 className="text-gray-400 text-3xl font-medium">{title}</h2>
      <h1 className="text-gray-900 text-6xl font-bold">
        {formatter.format(money)}
      </h1>
      <p>{description}</p>
      <style jsx>{`
        .container {
          width: 100%;
          padding: 4rem;
          border: 1px solid #75c5ff;
          background: #ffffff;
          border-radius: 16px;
        }

        * {
          font-family: "Manrope", sans-serif;
        }
      `}</style>
    </div>
  );
}
