import './App.css';
import Search from './components/Search';
import useForecast from './hooks/useForecast';
import Forecast from './components/Forecast';

const App = (): JSX.Element => {
  const {
    form, options, forecast, onInputChange, onSelectOption, onSubmit
  } = useForecast()


  return (
    <div className="App">
      <main>
        {forecast ? (
          <Forecast data={forecast}/>
        ): (
          <Search form={form} options={options} onSelectOption={onSelectOption} onInputChange={onInputChange} onSubmit={onSubmit} />
        )
      }
      </main>
    </div>
  );
}

export default App;
