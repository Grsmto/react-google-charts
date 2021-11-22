import React from "react";
import { Chart } from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales & Expenses",
  },
};

export function App() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
