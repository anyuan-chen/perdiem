#!/usr/bin/node
// run w/ node
const fs = require("fs");

const RESULTS_PER_DAY = 3;
const STORES = [
  { name: "Loblaws", category: "Groceries" },
  { name: "Costco", category: "Groceries" },
  { name: "Food Basics", category: "Groceries" },
  { name: "Shoppers", category: "Groceries" },
  { name: "McDonald's", category: "Restaurants" },
  { name: "Pizza Pizza", category: "Restaurants" },
  { name: "Magic Noodle", category: "Restaurants" },
  { name: "Bombay's Chutney", category: "Restaurants" },
  { name: "Subway", category: "Restaurants" },
  { name: "Amazon", category: "Other" },
  { name: "eBay", category: "Other" },
  { name: "Dollarama", category: "Other" },
  { name: "Best Buy", category: "Other" },
  { name: "Steam", category: "Recreation" },
  { name: "Google Play", category: "Recreation" },
  { name: "TTC", category: "Transportation" },
  { name: "Uber", category: "Transportation" },
];
const PRICE_RANGE = { start: 0.01, end: 100.0 };
const DATE_RANGE = {
  start: new Date("2019-02-01"),
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
