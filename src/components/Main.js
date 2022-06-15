import { useContext, useEffect, useState } from "react";
import { MapContext } from "../Context/Map";
import mapboxgl from "mapbox-gl";
import { getEarthquakesForToday } from "../services/getEarthquakeData";
import "./CustomMarker.css";

export const Main = () => {
  const [data, setdata] = useState(null);
  const map = useContext(MapContext);

  const loadData = async () => {
    const data = await getEarthquakesForToday();
    setdata(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!data) return;
    data.map((point) => {
      const el = document.createElement("div");
      el.className = "marker";
      point.magnitude < 5.5
        ? el.classList.add("light")
        : point.magnitude < 6.1
        ? el.classList.add("medium")
        : el.classList.add("intense");
      return new mapboxgl.Marker(el).setLngLat(point.coordinates).addTo(map);
    });
  }, [data, map]);

  return (
    <>
      <div id="map" />
    </>
  );
};
