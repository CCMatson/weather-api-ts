import Feels from '../assets/feelsLike.png'
import Humidity from '../assets/humidity.png'
import Pop from '../assets/pop.png'
import Pressure from '../assets/pressure.png'
import Visibility from '../assets/visibility.png'
import Wind from '../assets/wind.png'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop',
  title: string,
  info: string | JSX.Element,
  description?: string | JSX.Element,
}

type IconType = React.ReactNode

const icons: Record<Props['icon'], IconType> = {
  feels: <img src={Feels} alt="Feels like icon" />,
  humidity: <img src={Humidity} alt="Humidity icon" />,
  pop: <img src={Pop} alt="Precipitation icon" />,
  pressure: <img src={Pressure} alt="Pressure icon" />,
  visibility: <img src={Visibility} alt="Visibilty icon" />,
  wind: <img src={Wind} alt="Wind icon" />
}

const Card = ({
  icon,
  title, info, description
}: Props): JSX.Element => {
  const Icon = icons[icon]
  return (
      <article>
        <div className='card-div'>
          {Icon}
          <h4>{title}</h4>
        </div>
        <h4>{info}</h4>
        <h4>{description}</h4>
      </article>

  )
}

export default Card