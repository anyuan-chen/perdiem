import spendingData from "../../data/spendingData.json";

const sortedByWeekday = Array.from({ length: 7 }, (_, weekday) =>
  spendingData.filter((d) => new Date(d.time).getDay() === weekday)
);

const state = {
  username: "Andrew",
  budget: 10000,
  balance: 287138,
};

export default function handler(req, res) {
  if (req.method === "POST") {
    state[req.body.key] = req.body.value;
    return res.status(200).json({ [req.body.key]: state[req.body.key] });
  } else {
    return res.status(200).json(state);
  }
}
