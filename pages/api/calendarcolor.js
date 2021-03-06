import spendingData from "../../data/spendingData.json";

const UPPER_STDEV_BOUND_TO_COLOR = [
  // e.g., if spending is less than 1 stdev below the mean
  // but more than 2 stdevs it will return "little"
  { stdev: -2, descriptor: "very little", color: "#ffffff" },
  { stdev: -1, descriptor: "little", color: "#ceb7ff" },
  { stdev: 1, descriptor: "medium", color: "#e9effd" },
  { stdev: 9999999999, descriptor: "large", color: "rgba(53,89,255, 0.2)" },
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
        ...val,
        severity: index,
        spending: sumPurchasesOnDate[date],
      });
    }
  }
  res.status(200).json([]);
}
