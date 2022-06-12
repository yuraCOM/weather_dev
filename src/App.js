import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import "./bootstrap.min.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";

// const startPlases = ["Kyiv", "Kharkiv", "Odessa", "Dnipro", "Zaporizhia", "Lviv"]

let startPlases = [
  { name: "Kyiv", },
  { name: "Kharkiv", },
  { name: "Odessa", },
  { name: "Dnipro", },
  { name: "Zaporizhia", },
  { name: "Lviv", },
];

function App() {

  // const [currentPlace, setStartPlace] = useState("Kyiv")


  return (
    <div className="App">
      <WeatherDisplay startPlases={startPlases} currentPlace={'Kyiv'}
      // setStartPlace={setStartPlace}
      />


    </div>
  );
}

export default App;
