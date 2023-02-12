import { appState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";
import { Pop } from "../Utils/Pop.js";

function _drawImage(){
  document.body.style.backgroundImage = `url(${appState.image.lgimage})`
}

export class ImageController{
  constructor(){
    console.log('hello from image controller?');
    this.getImage()
    appState.on('image', _drawImage)
  }

  async getImage(){
    try {
      await imageService.getImage()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}