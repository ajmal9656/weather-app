import React from 'react';
import { MainWrapper } from './style.module';
import {AiOutlineSearch} from 'react-icons/ai';
import {WiHumidity} from 'react-icons/wi';
import { WiWindBeaufort0 } from 'react-icons/wi';


import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";



interface WeatherDataProps {
  name: string;

  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}




function DisplayWeather() {
  const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
  const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

  const [weatherData, setWeatherData] = React.useState<WeatherDataProps | null>(
    null
  );

  const [isLoading, setIsLoading] = React.useState(false);

  const [searchCity, setSearchCity] = React.useState("");

   const fetchCurrentWeather = React.useCallback(async (lat: number, lon: number) => {
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  }, [api_Endpoint, api_key]);


  const fetchWeatherData = async (city: string) => {
    try {
      const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
      const searchResponse = await axios.get(url);

      const currentWeatherData: WeatherDataProps = searchResponse.data;
      return currentWeatherData;
    } catch (error) {
      throw error;
    }
  };

  const handleSearch = async () => {
    if (searchCity.trim() === "") {
      return;
    }

    try {
      const  currentWeatherData  = await fetchWeatherData(searchCity);
      setWeatherData(currentWeatherData);
    } catch (error) {
    }
  };


  const iconChanger = (weather: string) => {
    let iconElement: React.ReactNode;
    let iconColor: string;

    switch (weather) {
      case "Rain":
        iconElement = <BsFillCloudRainFill />;
        iconColor = "#272829";
        break;

      case "Clear":
        iconElement = <BsFillSunFill />;
        iconColor = "#FFC436";
        break;
      case "Clouds":
        iconElement = <BsCloudyFill />;
        iconColor = "#102C57";
        break;

      case "Mist":
        iconElement = <BsCloudFog2Fill />;
        iconColor = "#279EFF";
        break;
      default:
        iconElement = <TiWeatherPartlySunny />;
        iconColor = "#7B2869";
    }

    return (
      <span className="icon" style={{ color: iconColor }}>
        {iconElement}
      </span>
    );
  };

  React.useEffect(()=>{
    
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
      const {latitude,longitude} = position.coords;
      Promise.all([fetchCurrentWeather(latitude,longitude)]).then(([currentWeather])=>{
        setWeatherData(currentWeather)
        setIsLoading(true)
      })
    })
  },[])


  return (
    <MainWrapper>
        <div className="container">
        <div className="searchArea">
          <input
            type="text"
            placeholder="enter a city"
            value={searchCity} 
            onChange={(e)=>setSearchCity(e.target.value)}
           
          />

          <div className="searchCircle">
            <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
          </div>
        </div>
        {weatherData && isLoading? (
          <>
          <div className="weatherArea">
            <h1>{weatherData.name}</h1>
            <span>{weatherData.sys.country}</span>
            <div className="icon">
                {iconChanger(weatherData.weather[0].main)}
            </div>
            <h1>{weatherData.main.temp}c</h1>
            <h1>{weatherData.weather[0].main}</h1>

        </div>

        <div className="bottomInfoArea">
            <div className="humidityLevel">
                <WiHumidity className='windIcon'/>
                <div className="humidInfo">
                    <h1>{weatherData.main.humidity}%</h1>
                    
                    <p>humidity</p>
                    
                </div>

            </div>
            <div className="wind">
            <WiWindBeaufort0 className='windIcon'/>
            
            <h1>{weatherData.wind.speed} km/hr</h1>
                    <p>wind speed</p>
                    

            </div>
        </div>

          </>
        ):(
          <div className="loading">
            <RiLoaderFill className="loadingIcon" />
            <p>Loading</p>
          </div>
        )}
        

        
      </div>
   
    </MainWrapper>
  )
}

export default DisplayWeather
