import { useEffect, useState } from "react";
import "./App.css";
import { MapContext, createMap } from "./Context/Map";
import { Main } from "./components/Main";

function App() {
  const [map, setMap] = useState();

  useEffect(() => {
    const map = createMap();
    setMap(map);
  }, []);

  return (
    <MapContext.Provider value={map}>
      <Main />
    </MapContext.Provider>
  );
}

export default App;
