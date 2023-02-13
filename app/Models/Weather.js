export class Weather{

  constructor(data){
    this.name = data.name
    this.main = data.main.temp
    this.celsius = ((data.main.temp)-273).toFixed(1)
    this.fahrenheit = (1.8*(data.main.temp-273.15)+32).toFixed(1)
    this.weather = data.weather
    this.isFahrenheit = true;
    this.condition = data.weather[0].description
  }


  get temperatureTemplate(){

    // NOTE this just shows how to print one temp at a time
  //   return`
  //   <button class="btn btn-light">
  //   <h4>${this.fahrenheit}<i class="mdi mdi-temperature-fahrenheit"></i></h4>
  // </button>
  //   `


  // NOTE this ask if temp is fahrenheit or not, does the same with icon.
  const temperature = this.isFahrenheit ? this.fahrenheit : this.celsius;
  const icon = this.isFahrenheit ? '°F' : '°C';

  // NOTE here is were the function dynamically switches between variables above
  return`
  <button class="btn "  onclick="app.weatherController.toggleTemperatureUnit()">
    <h4>${temperature} ${icon}</h4>
  </button>
  <h4 class="text-center">${this.condition}</h4>
  `
  }

 
}