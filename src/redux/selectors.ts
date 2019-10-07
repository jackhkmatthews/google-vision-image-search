import { AppState, Image, ImgDownload } from "./types";

export const selectImages = (state: AppState): Image[] => state.images;

export const selectEditing = (state: AppState): boolean => state.editing;

export const selectImgDownload = (state: AppState): ImgDownload =>
  state.imgDownload;
