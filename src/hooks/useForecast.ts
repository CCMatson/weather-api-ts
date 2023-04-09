import { useState, ChangeEvent } from "react"
import { Option } from "../types"
import { Forecast } from "../types"

const useForecast = () => {
  const [form, setForm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [city, setCity] = useState<Option | null>(null)

  const [forecast, setForecast] = useState<Forecast | null>(null)

  const getSearch = (value: string) => {
    fetch(` http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(value.trim())}&limit=5&lang=en&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch(e => console.log(e))
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

  const getForecast = (city: Option) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 10)
        }
        setForecast(forecastData)
      }).catch(e => console.log(e)
      )
  }

  const onSubmit = () => {
    if (city != null){
      setForm(city.name)
      setOptions([])
      getForecast(city)
    }
  }

  const onSelectOption = (option: Option) => {
    setCity(option)
  }

  return {
    form, options, forecast, onInputChange, onSelectOption, onSubmit
  }
}

export default useForecast
