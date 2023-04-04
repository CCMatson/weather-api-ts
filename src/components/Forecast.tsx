import { forecast } from "../types"
import Degree from "./Degree"

type Props = {
  data: forecast
}

const Forecast = ({data}: Props): JSX.Element => {
  const today = data.list[0]

  return (
    <div>
      <section>
        <h2>{data.name}, <span>{data.country}</span></h2>
        <p>{today.weather[0].main}({today.weather[0].description})</p>
      <Degree temp={Math.round(today.main.temp)}/>
      <p>H: <Degree temp={Math.ceil(today.main.temp_max)}/> L: < Degree temp={Math.floor(today.main.temp_min)}/></p>
      </section>
    </div>

  )
}

export default Forecast