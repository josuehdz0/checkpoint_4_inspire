import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather(){
  setHTML('weatherhere',appState.weather.temperatureTemplate )
}
export class WeatherController{
  constructor(){
    console.log('weather controller!');
    this.getWeather()
    appState.on('weather', _drawWeather)
  }

  async getWeather(){
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error();
      Pop.error(error.message)
    }
  }
}