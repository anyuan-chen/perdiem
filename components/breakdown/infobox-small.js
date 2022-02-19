export default function InfoboxSmall({
  percentage,
  changePercentage,
  category,
  totalMoney,
}) {
  return (
    <div className="container">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        * {
          font-family: "Manrope", sans-serif;
        }
      `}</style>
    </div>
  );
}
