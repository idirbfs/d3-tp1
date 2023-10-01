import { convertUrl } from "./url-converter";

export const fetchData = async () => {
  const d3 = await import("d3");

  const csvData = await d3.csv(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtYmVgrVeXnU5KrA45CYHeqstjzPKzT1MRoFmjBqptRkYKgfNnHEqKHqEvv56MuAtTccdkerR43a5g/pub?output=csv"
  );

  csvData.forEach((d) => {
    d.photo = convertUrl(d.photo);
  });

  return csvData;
};
