import { appState } from "../AppState.js";
import { Time } from "../Models/Time.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTime() {
  setHTML('timehere',appState.time.timeTemplate)
}
export class TimeController{

  constructor(){
    console.log('hi from Time Controller');
    this.updateTime();
    setInterval(this.updateTime,1000)
    appState.on('time',_drawTime)
  }

  updateTime(){
    appState.time = new Time()
  }
}