import { ChangeEvent, useState } from 'react';
import { option } from '../types';
import OptionList from './optionLIst';

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
  const [selectedOption, setSelectedOption] = useState<option | null>(null)

  const handleOptionSelect = (option: option) => {
    setSelectedOption(option)
    onSelectOption(option)
    
  }

  const isOptionSelected =!!selectedOption 

  return (
    <div className="App">
      <main>
        <section className="viewer">
          <h1>Weather Forecast</h1>
          <p>
            Enter a city to view the weather:
          </p>
          <div className="search">
            <input
              type="text"
              value={form}
              onChange={onInputChange} />

            {options.length > 0 && (
              <OptionList options={options} handleOptionSelect={handleOptionSelect}/>
            )}

    

            {isOptionSelected && (
            <button className="search-button" onClick={onSubmit}>
              Search
            </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Search;
