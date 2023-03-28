import React, {useState, ChangeEvent} from 'react';
import './App.css';

const App = (): JSX.Element => {

  const [form, setForm] = useState<string>('')

  const getSearch = (value: string) => {
    fetch(`  http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
    // https://api.openweathermap.org/data/2.5/weather?q=${value.trim()}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((res) => res.json())
    .then((data) => console.log({data}))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement> ) => {
    const value = e.target.value.trim()
    setForm(value)
    if (value === '') return
    e.preventDefault()
    getSearch(value)
  }

  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}



  return (
    <div className="App">
      <main>
        <section>
        <h1>Weather Forecast</h1>
        <p>
          Enter a city to view the weather:
        </p>
        <div>
          <input 
            type="text"
            value={form}
            onChange={onInputChange}/>
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
