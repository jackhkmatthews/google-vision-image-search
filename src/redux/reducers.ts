import { combineReducers } from "redux";
import { initialImagesState } from "./initial";

function images(state = initialImagesState): any[] {
  return state;
}

export const imagesApp = combineReducers({
  images
});
