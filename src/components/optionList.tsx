import { Option } from "../types"

type OptionListProps = {
  options: Option[],
  handleOptionSelect: (option: Option) => void
}

const OptionList = ({ options, handleOptionSelect }: OptionListProps) => {
  return (
        <ul>
          {options.map((option: Option) => (
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