export default function ResultCard({ title, money, description }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="container flex flex-col justify-evenly h-fit w-full">
      <h2 className="text-gray-400 text-3xl font-medium">{title}</h2>
      <h1 className="text-gray-900 text-6xl font-bold">
        {formatter.format(money)}
      </h1>
      <p>{description}</p>
      <style jsx>{`
        .container {
          padding: 2rem;
          padding-left: 4rem;
          border: 1px solid #75c5ff66;
          background: #ffffff;
          border-radius: 16px;
          gap: 1rem;
        }

        * {
          font-family: "Manrope", sans-serif;
        }
      `}</style>
    </div>
  );
}
