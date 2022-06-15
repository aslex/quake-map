import mapboxgl from "mapbox-gl";
import { createContext } from "react";

export const createMap = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/dark-v10", // style URL
    center: [-103, 39], // starting position [lng, lat]
    zoom: 3.87,
  });
  return map;
};

export const MapContext = createContext();
