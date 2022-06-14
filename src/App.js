import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import "./bootstrap.min.css"


let startPlases = [
  { name: "Kyiv", },
  { name: "Kharkiv", },
  { name: "Odessa", },
  { name: "Dnipro", },
  { name: "Zaporizhia", },
  { name: "Lviv", },
];

function App() {

  return (
    <div className="App">
      <WeatherDisplay startPlases={startPlases} currentPlace={'Kyiv'} />
    </div>
  );
}

export default App;



//ReactJS + github pages – разворачиваем проект deploy на GitHub
// http://it-shpora.pp.ua/reactjs-github-pages-%D1%80%D0%B0%D0%B7%D0%B2%D0%BE%D1%80%D0%B0%D1%87%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-deploy-%D0%BD%D0%B0-github/
//https://github.com/gitname/react-gh-pages