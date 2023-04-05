import { forecast } from "../types"
import Degree from "./Degree"
import Card from "./card"
import {
getSunTime,
getWindDirection,
getHumidityValue,
getPop,
getVisibilityValue,
} from "../helpingFunctions"


import sunrise from '../../src/assets/sunrise.png'
import sunset from '../../src/assets/sunset.png'

type Props = {
  data: forecast
}

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]

  return (
    <div className="viewer">
      <section className="today">
        <h2>{data.name}, <span>{data.country}</span></h2>
{/* <h4>
{today.weather[0].main} ({today.weather[0].description})
</h4> */}
<h2>
        <Degree temp={Math.round(today.main.temp)} />

</h2>
        <p>{today.weather[0].main} ({today.weather[0].description})</p>

        <p>High: <Degree temp={Math.ceil(today.main.temp_max)} /> Low: < Degree temp={Math.floor(today.main.temp_min)} /></p>
      </section>

      <section className="forecast">
        {data.list.map((item, i) => (
          <div key={i} className="forecast-icons">
            <p>{i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}</p>
            <img
              alt={`weather-icon-${item.weather[0].description}`}
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
            <p>
              <Degree temp={Math.round(item.main.temp)}></Degree>
            </p>
          </div>
        ))}
      </section>

      <section className="sun-times">
        <div>
          <h2>Sunrise</h2>
          <span>{getSunTime(data.sunrise)}</span>
          <img src={sunrise} alt="sunrise icon" />
        </div>
        <div>
          <h2>Sunset</h2>
          <span>{getSunTime(data.sunset)}</span>
          <img src={sunset} alt="sunset icon" />
        </div>
      </section>

      <section className="cards">
        <Card
          icon="wind"
          title="Wind"
          info={`${Math.round(today.wind.speed)} mph`}
          description={`${getWindDirection(Math.round(today.wind.deg))}, gusts ${today.wind.gust.toFixed(1)} mph`}
        />

        <Card
          icon="feels"
          title="Feels like"
          info={<Degree temp={Math.round(today.main.feels_like)} />}
          description={`Feels ${Math.round(today.main.feels_like) < Math.round(today.main.temp)
            ? 'colder'
            : 'warmer'
            }`}
        />

        <Card 
        icon="pop"
        title="Precipitation"
        info={`${Math.round(today.pop * 100)}% chance of rain`}
        description={`${getPop(today.pop)}`}
        // get pop
        />

        <Card
          icon="humidity"
          title="Humidity"
          info={`${today.main.humidity} %`}
          description={getHumidityValue(today.main.humidity)}
        />

        {/* Average sea level air pressure is 1013 millibars*/}
        <Card 
        icon="pressure"
        title="Pressure"
        info={`${today.main.pressure} hPa`}
        description={`${Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'} than standard`}
        />

        <Card
        icon="visibility"
        title="Visibility"
        info={`${(today.visibility / 1000).toFixed()} km`}
      description={getVisibilityValue(today.visibility)}
        
        
        />


      </section>


    </div>
  )
}

export default Forecast