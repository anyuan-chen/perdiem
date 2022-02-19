import spendingData from "../../data/spendingData.json";

export default function handler(req, res) {
  // slow but less dev time
  if (req.query.date) {
    res
      .status(200)
      .json(spendingData.filter((i) => i.time.startsWith(req.query.date)));
  } else {
    res.status(200).json(spendingData);
  }
}
