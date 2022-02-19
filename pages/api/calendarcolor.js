import spendingData from "../../data/spendingData.json";

const UPPER_STDEV_BOUND_TO_COLOR = [
  { stdev: -2, descriptor: "very little" },
  { stdev: -1, descriptor: "little" },
  { stdev: 1, descriptor: "medium" },
  { stdev: 9999999999, descriptor: "large" },
];

function calculateStats(numArray) {
  const mean = numArray.reduce((s, n) => s + n) / numArray.length;
  const variance =
    numArray.reduce((s, n) => s + (n - mean) ** 2, 0) / (numArray.length - 1);
  return { mean, stdev: Math.sqrt(variance) };
}

const allDays = [
  ...new Set(spendingData.map((i) => i.time.substring(0, i.time.indexOf("T")))),
]; // remove duplicates and convert to array to use map

const sumPurchasesOnDate = {};
for (const d of allDays) {
  sumPurchasesOnDate[d] = spendingData
    .filter((i) => i.time.startsWith(d))
    .map((i) => i.amount)
    .reduce((a, b) => a + b);
}

const { mean, stdev } = calculateStats(Object.values(sumPurchasesOnDate));

export default function handler(req, res) {
  const date = req.query.date ?? new Date().toISOString().split("T")[0];
  for (const [index, val] of UPPER_STDEV_BOUND_TO_COLOR.entries()) {
    if (mean + stdev * val.stdev > sumPurchasesOnDate[date]) {
      return res.status(200).json({
        descriptor: val.descriptor,
        severity: index,
        spending: sumPurchasesOnDate[date],
        mean,
        stdev,
      });
    }
  }
  res.status(200).json([]);
}
