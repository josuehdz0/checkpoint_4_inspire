export class Weather{

  constructor(data){
    this.name = data.name
    this.main = data.main.temp
    this.celcius = ((data.main.temp)-273).toFixed(1)
    this.fahrenheit = (1.8*(data.main.temp-273.15)+32).toFixed(1)
    this.weather = data.weather
  }


  get temperatureTemplate(){
    return`
    <button class="btn btn-light">
    <h4>${this.fahrenheit}<i class="mdi mdi-temperature-fahrenheit"></i></h4>
  </button>
    `

    
    
  }
}