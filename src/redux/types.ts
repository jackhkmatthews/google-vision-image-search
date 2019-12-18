export interface Image {
  labels?: string[];
  imgAltText?: string;
  imgSrc: string;
  slug?: string;
}

export type ImgDownload = null | string;

export type CanvasClick = { offsetX: number; offsetY: number };

export interface AppState {
  images: Image[];
  imgDownload: ImgDownload;
  editing: boolean;
  canvasClicks: CanvasClick[] | [];
}

export enum APP_ACTION_TYPES {
  setEditing = "SET_EDITING",
  setImgDownload = "SET_IMG_DOWNLOAD",
  setCanvasClicks = "SET_CANVAS_CLICKS"
}

export type AppActionType =
  | APP_ACTION_TYPES.setEditing
  | APP_ACTION_TYPES.setImgDownload
  | APP_ACTION_TYPES.setCanvasClicks;

export interface SetEditingAction {
  type: typeof APP_ACTION_TYPES.setEditing;
  editing: boolean;
}

export interface SetImgDownloadAction {
  type: typeof APP_ACTION_TYPES.setImgDownload;
  imgDownload: ImgDownload;
}

export interface SetCanvasClicksAction {
  type: typeof APP_ACTION_TYPES.setCanvasClicks;
  canvasClicks: CanvasClick[];
}

export type AppAction =
  | SetEditingAction
  | SetImgDownloadAction
  | SetCanvasClicksAction;
