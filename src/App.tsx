import React, {useState, ChangeEvent} from 'react';
import './App.css';

const App = (): JSX.Element => {

  const [form, setForm] = useState('')

  const onInputChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setForm(e.target.value)

  }

  // https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}



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
