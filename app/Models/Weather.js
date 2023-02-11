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
    <h4>${this.fahrenheit} F</h4>
    <h4>${this.celcius} C</h4>

    `
  }
}