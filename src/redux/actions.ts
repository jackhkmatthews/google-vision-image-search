import {
  ImgDownload,
  APP_ACTION_TYPES,
  SetImgDownloadAction,
  SetEditingAction
} from "./types";

export function setEditing(editing: boolean): SetEditingAction {
  return {
    type: APP_ACTION_TYPES.setEditing,
    editing
  };
}

export function setImgDownload(imgDownload: ImgDownload): SetImgDownloadAction {
  return { type: APP_ACTION_TYPES.setImgDownload, imgDownload };
}
