export type option = {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
}

export type forecast = {
  name: string,
  country: string,
  sunrise: number,
  sunset: number,
  list: [{
    dt: number,
    main: {
      feels_like: number,
      humidity: number,
      pressure: number,
      temp: number,
      temp_max: number,
      temp_min: number,
    },
    weather: [{
      main: string,
      incon: string,
      description: string,
    }],
    wind: {
      speed: number,
      deg: number,
      gust: number,
    },
    clouds: {
      all: number
    }
    pop: number,
    visibility: number,
  }]


}

