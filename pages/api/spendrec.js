import spendingData from "../../data/spendingData.json";

const sortedByWeekday = Array.from({ length: 7 }, (_, weekday) =>
  spendingData.filter((d) => new Date(d.time).getDay() === weekday)
);

function habitAnalysis(weekday) {
  // monday is 0, sunday is 6
  const averageWeekdayAmount = +(
    sortedByWeekday[weekday].map((e) => e.amount).reduce((x, y) => x + y) /
    sortedByWeekday[weekday].length
  ).toFixed(2);

  return {
    amount: averageWeekdayAmount,
  };
}

export default function handler(req, res) {
  const date = req.query.date ? new Date(res.query.date) : new Date();

  res.status(200).json(habitAnalysis(date.getDay()));
}

console.log(habitAnalysis(0));
