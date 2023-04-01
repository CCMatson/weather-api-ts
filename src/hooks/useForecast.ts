import { useEffect, useState, ChangeEvent } from "react"
import { option } from "../types"

const useForecast = () => {
  const [form, setForm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [city, setCity] = useState<option | null>(null)

  //fix this state:
  const [forecast, setForecast] = useState<null>(null)

  // fetch Option data from the geocoding api
  const getSearch = (value: string) => {
    fetch(`  http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(value.trim())}&limit=5&lang=en&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e.target.value
    setForm(value)
    if (value === '') {
      setOptions([])
      return
    }
    getSearch(value)
  }

  const getForecast = (city: option) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then(data => setForecast(data))
  }

  const onSubmit = () => {
    city && getForecast(city)
    console.log(city, 'city in onSubmit function')
  }

  const onSelectOption = (option: option) => {
    console.log(option.name, 'city name')
    console.log(option.lat)
    setCity(option)
  }

  useEffect(() => {

    if (city) {
      setForm(city.name)
      setOptions([])
      console.log(city, 'city state in useEffect')
    }
  }, [city])

  return {
    form, options, forecast, onInputChange, onSelectOption, onSubmit
  }
}

export default useForecast
