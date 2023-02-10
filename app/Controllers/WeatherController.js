import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

export class WeatherController{
  constructor(){
    console.log('weather controller!');
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