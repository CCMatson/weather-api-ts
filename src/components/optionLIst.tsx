import { option } from "../types"

type OptionListProps = {
  options: option[],
  handleOptionSelect: (option: option) => void
}

const OptionList = ({ options, handleOptionSelect }: OptionListProps) => {
  return (
        <ul>
          {options.map((option: option) => (
            <li key={option.lat}>
              <button onClick={() => handleOptionSelect(option)}>
                {option.name}, {option.state}, {option.country}
              </button>
            </li>
          ))}
        </ul>
      )
    }
  

export default OptionList