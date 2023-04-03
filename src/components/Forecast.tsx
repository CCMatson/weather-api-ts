import { forecast } from "../types"

type Props = {
  data: forecast
}

//re-write as a type or props or new component?
const Degree = ({temp}: {temp: number}): JSX.Element => (
  <span>{temp}<sup>o</sup></span>
) 

const Forecast = ({data}: Props): JSX.Element => {
  const today = data.list[0]

  return (
    <div>
      <section>
        <h2>{data.name}, <span>{data.country}</span></h2>
      <Degree temp={Math.round(today.main.temp)}/>
      </section>
    </div>

  )
}

export default Forecast