import React, { useState, ChangeEvent } from 'react';
import './App.css';

interface Option {
  name: string;
  state?: string;
  country?: string;
}

const App = (): JSX.Element => {
  const [form, setForm] = useState<string>('')
  const [options, setOptions] = useState<Option[]>([])

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

  const onSelectOption = (option: Option) => {
    setForm(option.name)
    setOptions([])
  }


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
                  <li key={option.name} onClick={() => onSelectOption(option)}>
                    <button>
                      {option.name}, {option.state}, {option.country}
                    </button>
                  </li>
                  // <p>{option.name}</p>
                ))}
              </ul>
            )}

            <button>
              Search
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
