import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.css';

interface Option {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
}

const App = (): JSX.Element => {
  const [form, setForm] = useState<string>('')
  const [options, setOptions] = useState<Option[]>([])
  const [city, setCity] = useState<Option | null>(null)

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

  const getForecast = (city: Option) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then(data => console.log({ data }))
  }

  const onSubmit =() => {
    city && getForecast(city)
    console.log(city, 'city in onSubmit function')
  }

  const onSelectOption = (option: Option) => {
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


  return (
    <div className="App">
      <main>
        <section>
          <h1>Weather Forecast</h1>
          <p>
            Enter a city to view the weather:
          </p>
          <div className="input">
            <input
              type="text"
              value={form}
              onChange={onInputChange} />

            {options.length > 0 && (
              <ul>
                {options.map((option: Option) => (
                  <li key={option.lat}>
                    <button onClick={() => onSelectOption(option)}>
                      {option.name}, {option.state}, {option.country}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <button onClick={onSubmit}>
              Search
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
