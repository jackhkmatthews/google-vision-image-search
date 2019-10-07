export interface Image {
  labels?: string[];
  imgAltText?: string;
  imgSrc?: string;
  slug?: string;
}

export type ImgDownload = null | string;

export interface AppState {
  images: Image[];
  imgDownload: ImgDownload;
  editing: boolean;
}

export enum APP_ACTION_TYPES {
  setEditing = "SET_EDITING",
  setImgDownload = "SET_IMG_DOWNLOAD"
}

export type AppActionType =
  | APP_ACTION_TYPES.setEditing
  | APP_ACTION_TYPES.setImgDownload;

export interface SetEditingAction {
  type: typeof APP_ACTION_TYPES.setEditing;
  editing: boolean;
}

export interface SetImgDownloadAction {
  type: typeof APP_ACTION_TYPES.setImgDownload;
  imgDownload: ImgDownload;
}

export type AppAction = SetEditingAction | SetImgDownloadAction;
