#!/usr/bin/node
// run w/ node
const fs = require("fs");

const RESULTS_PER_DAY = 5;
const STORES = [
  { name: "Loblaws", category: "grocery" },
  { name: "Costco", category: "grocery" },
  { name: "Food Basics", category: "grocery" },
  { name: "Shoppers", category: "grocery" },
  { name: "McDonald's", category: "food" },
  { name: "Pizza Pizza", category: "food" },
  { name: "Magic Noodle", category: "food" },
  { name: "Bombay's Chutney", category: "food" },
  { name: "Subway", category: "food" },
  { name: "Amazon", category: "other" },
  { name: "eBay", category: "other" },
  { name: "Dollarama", category: "other" },
  { name: "Best Buy", category: "other" },
  { name: "Steam", category: "fun" },
  { name: "Google Play", category: "fun" },
  { name: "TTC", category: "transport" },
  { name: "Uber", category: "transport" },
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
      ...STORES[Math.floor(rng(0, STORES.length))],
      amount: +rng(PRICE_RANGE.start, PRICE_RANGE.end).toFixed(2),
      time: newDate.toISOString(), // no random minutes
    });
  }
}

fs.writeFile("spendingData.json", JSON.stringify(list, null, 2), (err) => {
  if (err) return console.log(err);
  console.log("Wrote to spendingData.json");
});
