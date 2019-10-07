import { combineReducers } from "redux";
import {
  initialImagesState,
  initialEditingState,
  initialImgDownloadState
} from "./initial";
import {
  Image,
  SetEditingAction,
  APP_ACTION_TYPES,
  SetImgDownloadAction,
  ImgDownload
} from "./types";

function images(state = initialImagesState): Image[] {
  return state;
}

function editing(
  state = initialEditingState,
  action: SetEditingAction
): boolean {
  switch (action.type) {
    case APP_ACTION_TYPES.setEditing:
      return action.editing;
    default:
      return state;
  }
}

function imgDownload(
  state = initialImgDownloadState,
  action: SetImgDownloadAction
): ImgDownload {
  switch (action.type) {
    case APP_ACTION_TYPES.setImgDownload:
      return action.imgDownload;
    default:
      return state;
  }
}

export const imagesApp = combineReducers({
  images,
  editing,
  imgDownload
});
