// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import Places from "../Places";
import PostServis from "../PostService";
import classes from "./WeatherDisplay.module.css"
import "bootstrap/dist/css/bootstrap.css";
import Icon from '../images/arrow_up.png';
import Sunrise from '../images/sunrise.png'
import Sunset from '../images/sunset.png'
import Search from "../Search/Search";
import MyMap from "../Map/MyMap";

const WeatherDisplay = (props) => {

  const [nowTime, setNowTime] = useState(getTime);
  const [currentPlace, setCurrentPlace] = useState(props.currentPlace);
  const [weatherData, setWeatherData] = useState(null)
  const [sunrise, setSinrise] = useState('')
  const [sunset, setSunset] = useState('')
  const [position, setPosition] = useState([])

  const [newPlaces, setNewPlaces] = useState([])

  const [formKey, setFormKey] = useState('');

  const extraRef = useRef({
    isMounted: false,
  });

  useEffect(() => {
    setNowTime(getTime)
    PostServis.getTownFind(currentPlace).then((data) => {
      setWeatherData(data)
      setPosition([data.coord.lat, data.coord.lon])
      setSinrise(Sun(data.sys.sunrise))
      setSunset(Sun(data.sys.sunset))
    })

    if (localStorage.getItem("newPlaces")) {
      let newPlaces = localStorage.getItem('newPlaces')
      newPlaces = JSON.parse(newPlaces);
      setNewPlaces(newPlaces)
    }
  }, []);

  useEffect(() => {
    setNowTime(getTime)
    PostServis.getTownFind(currentPlace).then((data) => {
      setWeatherData(data)
      setPosition([data.coord.lat, data.coord.lon])
      setSinrise(Sun(data.sys.sunrise))
      setSunset(Sun(data.sys.sunset))
    })
  }, [currentPlace]);


  useEffect(() => {
    if (extraRef.current.isMounted) {
      setFormKey(Math.random().toString());
    } else {
      extraRef.current.isMounted = true;
    }
  }, [position]);

  function setLocalStore(name, data) {
    data = JSON.stringify(data);
    localStorage.setItem(name, data);
  }


  function getTime() {
    let dateNow = new Date();
    let optionsN = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
    };
    dateNow = dateNow.toLocaleString('ru-US', optionsN)
    // console.log(dateNow.toLocaleString('en-US', optionsN));
    return dateNow
  }

  function Sun(unix) {
    let optionsSun = {
      hour: '2-digit', minute: '2-digit', hour12: false
    };
    let date = new Date(unix * 1000);
    // @ts-ignore
    date = date.toLocaleString('ru-US', optionsSun)
    // console.log(date);
    return date
  }

  function newPlace(newPlace) {
    setCurrentPlace(newPlace);
  }

  return (

    <div>
      {!weatherData ?
        <div className={classes.load}><h1>Loading......</h1></div> :
        <div className="row">
          <Search  {...props}
            currentPlace={currentPlace}
            setCurrentPlace={setCurrentPlace}
            weatherData={weatherData}
            setPosition={setPosition}
            newPlaces={newPlaces}
            setNewPlaces={setNewPlaces}
            setLocalStore={setLocalStore} al />

          <div className="container" >

            <Places  {...props}
              currentPlace={currentPlace} /*updPosition={updPosition}*/
              setPosition={setPosition}
              setCurrentPlace={setCurrentPlace}
              weatherData={weatherData}
            >
            </Places>

            <div className="info-sity card border-primary mb-3">
              <p>{nowTime}</p>
              <h5>
                {weatherData.weather[0].main} in {weatherData.name}, {weatherData.sys.country}
                {<img src={"http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"} alt={weatherData.description} />}
              </h5>

              <p>Current Temp: <strong>{Math.round(weatherData.main.temp)}°</strong> ({weatherData.weather[0].description})
              </p>
              <div className={classes.flex}>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
                <p>Humidity: {weatherData.main.humidity}% (влажность)</p>
              </div>

              <div className={classes.wind}>
                <img style={{ width: 35, transform: `rotate(${weatherData.wind.deg}deg)` }} src={Icon} alt="direct" />
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
              </div>

              <div className={classes.sun}>
                <div><img src={Sunrise} alt="sunrise" /><p> {`Sunrise: ${sunrise}`}</p></div>
                <div><img src={Sunset} alt="sunset" /><p>Sunset:{sunset}</p></div>
              </div>
            </div>

            {newPlaces.length === 0 ? '' :
              <Places {...props} startPlases={newPlaces} currentPlace={currentPlace}
                setNewPlaces={setNewPlaces} place={currentPlace} newPlace={newPlace}
                newPlaces={newPlaces}
                setLocalStore={setLocalStore}
                setCurrentPlace={setCurrentPlace}>
              </Places>}

          </div>
          <MyMap key={formKey} position={position} />
        </div>
      }
    </div >
  );
};

export default WeatherDisplay;







  // let unix = 1654712956;
  // let date = new Date(unix * 1000);
  // console.log(date);   // 2017-10-08T14:35:44.000Z




  // let places = [
  //   { name: "Kyiv", country: "UA", zip: "703448", lon: 30.5167, lat: 50.4333 },
  //   { name: "Kharkiv", country: "UA", zip: "706483", lon: 36.25, lat: 50 },
  //   { name: "Odessa", country: "UA", zip: "698740", lon: 30.7326, lat: 46.4775 },
  //   { name: "Dnipro", country: "UA", zip: "709930", lon: 34.9833, lat: 48.45 },
  //   { name: "Zaporizhia", country: "UA", zip: "687700", lon: 35.1833, lat: 47.8167 },
  //   { name: "Lviv", country: "UA", zip: "702550", lon: 24.0232, lat: 49.8383 },
  // ];


  //---------------
  // const [peopleData, setPeopleData] = useState()

  // const getUsers = async () => {
  //   const users = await axios.get('https://randomuser.me/api/?page=1&results=1&nat=us');
  //   setPeopleData(users.data.results);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);
  //-------------------
  //https://www.codegrepper.com/code-examples/javascript/async+axios+useeffect


  // let places = [
  //   { name: "Kyiv", country: "UA", zip: "703448", },
  //   { name: "Kharkiv", country: "UA", zip: "706483", },
  //   { name: "Odessa", country: "UA", zip: "698740", },
  //   { name: "Dnipro", country: "UA", zip: "709930", },
  //   { name: "Zaporizhia", country: "UA", zip: "687700", },
  //   { name: "Lviv", country: "UA", zip: "702550", },
  // ];

  // const [newPlaces, setNewPlaces] = useState(
  //   [
  //     { name: "MARS", country: "UA", zip: "702550", lon: 24.0232, lat: 49.8383, add: true },
  //     { name: "MOON", country: "UA", zip: "687700", lon: 24.0232, lat: 49.8383, add: true }
  //   ])