import { useState, ChangeEvent } from "react"
import { Option } from "../types"
import { Forecast } from "../types"
import ForecastData from "../components/forecast"

const useForecast = () => {
  const [form, setForm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [city, setCity] = useState<Option | null>(null)

  const [forecast, setForecast] = useState<Forecast | null>(null)

  //call to geocoding data
  // const getSearch = (value: string) => {
  //   fetch(` http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(value.trim())}&limit=5&lang=en&appid=${process.env.REACT_APP_API_KEY}`)
  //     .then((res) => res.json())
  //     .then((data) => setOptions(data))
  //     .catch((error) => console.error(error))
  // }

  const getSearch = async (value: string) => {
    try {
      const response = await fetch(` http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(value.trim())}&limit=5&lang=en&appid=${process.env.REACT_APP_API_KEY}`)
      const data = await response.json()
      setOptions(data)
    } catch (error) {
      console.error(error)
    }
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

  //call to hourly forecast.
  // const getForecast = (city: Option) => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then(res => res.json())
  //     .then((data) => {
  //       const forecastData = {
  //         ...data.city,
  //         list: data.list.slice(0, 10)
  //       }
  //       setForecast(forecastData)
  //     })
  //     // .catch(e => console.log(e)
  //     .catch((error) => console.error(error))
  // }

  const getForecast = async (city: Option) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
      )
      const data = await response.json()
      const forecastData = {
        ...data.city,
        list: data.list.slice(0, 10)
      }
      setForecast(forecastData)
    } catch (error) {
      console.error(error)
    }
  }

    const onSubmit = () => {
      if (city != null) {
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
