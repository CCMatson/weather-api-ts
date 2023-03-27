import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <section>
        <h1>Weather Forecast</h1>
        <p>
          Enter a city to view the weather:
        </p>
        <div>
          <input type="text"/>
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
