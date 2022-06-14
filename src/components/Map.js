import mapboxgl from "mapbox-gl";
import "./Map.css";
import { useEffect } from "react";

export const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
    new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/dark-v10", // style URL
      center: [-96.0905, 37.8391], // starting position [lng, lat]
      zoom: 3.22, // starting zoom
    });
  });

  return (
    <>
      <h1>Quake Map</h1>
      <div id="map" />
    </>
  );
};
