import React, { ChangeEvent } from 'react';
import { option } from '../types';

type Props = {
  form: string,
  options: [],
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onSelectOption: (option: option) => void,
  onSubmit: () => void,
}

const Search = ({
  form, 
  options, 
  onInputChange, 
  onSelectOption, 
  onSubmit,
}: Props): JSX.Element => {


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
                {options.map((option: option) => (
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

export default Search;
