import { extractData } from "./processData";

const baseURL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

export const getEarthquakesForToday = async () => {
  try {
    const res = await fetch(baseURL);
    const data = await res.json();
    return await extractData(data);
  } catch (err) {
    console.log(err);
  }
};
