import { ChangeEvent, useState } from 'react';
import { Option } from '../types';
import OptionList from './optionList'

type Props = {
  form: string,
  options: [],
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onSelectOption: (option: Option) => void,
  onSubmit: () => void,
}

const Search = ({
  form, 
  options, 
  onInputChange, 
  onSelectOption, 
  onSubmit,
}: Props): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
    onSelectOption(option)
    
  }

  const isOptionSelected = !!selectedOption 

  return (
      <main>
        <section className="viewer">
          <h1>Weather Forecast</h1>
          <h2>
            Enter a city to view the weather:
          </h2>
          <div className="search">
            <input
              type="text"
              value={selectedOption ? `${selectedOption.name}, ${selectedOption.state}, ${selectedOption.country}` : form}
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
  );
}

export default Search;
