import { AppState, Image, ImgDownload, CanvasClick } from "./types";

export const selectImages = (state: AppState): Image[] => state.images;

export const selectEditing = (state: AppState): boolean => state.editing;

export const selectImgDownload = (state: AppState): ImgDownload =>
  state.imgDownload;

export const selectCanvasClicks = (state: AppState): CanvasClick[] =>
  state.canvasClicks;
