import { forecast } from "../types"
import Degree from "./Degree"
import Card from "./card"
import { getSunTime , getWindDirection } from "../helpingFunctions"


import sunrise from '../../src/assets/sunrise.png'
import sunset from '../../src/assets/sunset.png'

type Props = {
  data: forecast
}

const Forecast = ({data}: Props): JSX.Element => {
  const today = data.list[0]

  return (
    <div className="viewer">
      <section className="today">
        <h2>{data.name}, <span>{data.country}</span></h2>
        <p>{today.weather[0].main} ({today.weather[0].description})</p>
      <Degree temp={Math.round(today.main.temp)}/>
      <p>High: <Degree temp={Math.ceil(today.main.temp_max)}/> Low: < Degree temp={Math.floor(today.main.temp_min)}/></p>
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
          <h2>sunrise</h2>
          <span>{getSunTime(data.sunrise)}</span>
          <img src={sunrise} alt="sunrise icon" />
        </div>
      <div>
        <h2>sunset</h2>
        <span>{getSunTime(data.sunset)}</span>
        <img src={sunset} alt="sunset icon" />
      </div>
      </section>

        <Card 
        icon="wind" 
        title="wind"
        info={`${Math.round(today.wind.speed)} mph`}
        description={`${getWindDirection(Math.round(today.wind.deg))}, gusts ${today.wind.gust.toFixed(1)} mph`}
        />

    </div>
  )
}

export default Forecast