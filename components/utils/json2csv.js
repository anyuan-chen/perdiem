import { Parser } from "json2csv";

export default function toCsv(array) {
  const fields = Object.keys(array[0]);
  const parser = new Parser();

  try {
    const parser = new Parser({ fields });
    const csv = parser.parse(array);
    return csv;
  } catch (err) {
    console.error(err);
    return "";
  }
}
