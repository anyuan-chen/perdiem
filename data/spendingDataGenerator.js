// run w/ node and copy to spendingData.json

const RESULTS_PER_DAY = 5;
const STORES = [
  "Loblaws",
  "Best Buy",
  "Costco",
  "Food Basics",
  "Shoppers",
  "McDonald's",
  "Amazon",
  "eBay",
  "Dollarama",
  "Steam",
  "Google Play",
];
const PRICE_RANGE = { start: 0.01, end: 100.0 };
const DATE_RANGE = {
  start: new Date("2022-02-01"),
  end: new Date("2022-02-22"),
};

const rng = (min, max) => Math.random() * (max - min) + min;

const list = [];
for (
  let d = DATE_RANGE.start;
  d <= DATE_RANGE.end;
  d.setDate(d.getDate() + 1)
) {
  for (let i = 0; i < RESULTS_PER_DAY; i++) {
    const newDate = new Date(d);
    newDate.setHours(Math.floor(rng(6, 23)));
    newDate.setMinutes(Math.floor(rng(0, 59)));
    list.push({
      store: STORES[Math.floor(rng(0, STORES.length))],
      amount: +rng(PRICE_RANGE.start, PRICE_RANGE.end).toFixed(2),
      time: newDate.toISOString(), // no random minutes
    });
  }
}

console.log(JSON.stringify(list, null, 2));
