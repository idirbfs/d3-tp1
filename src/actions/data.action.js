import { convertUrl } from "../utils/url-converter";

export const setData = () => async (dispatch) => {
  try {
    const d3 = await import("d3");
    const csvData = await d3.csv(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtYmVgrVeXnU5KrA45CYHeqstjzPKzT1MRoFmjBqptRkYKgfNnHEqKHqEvv56MuAtTccdkerR43a5g/pub?output=csv"
    );

    csvData.forEach((d) => {
      d.photo = convertUrl(d.photo);
    });
    console.log(csvData);
    dispatch({
      type: "SET_DATA",
      payload: csvData,
    });
  } catch (error) {
    console.error(error);
  }
};
