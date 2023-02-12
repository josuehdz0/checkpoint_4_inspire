import { appState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandboxApi } from "./AxiosService.js"

class ImageService{
  async getImage() {
    const res = await sandboxApi.get('images')
    console.log('got image',res.data);
    appState.image = new Image(res.data)
  }

}

export const imageService = new ImageService()