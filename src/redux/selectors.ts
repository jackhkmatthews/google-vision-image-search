import { AppState } from "./types";

export const selectImages = (state: AppState): any[] => state.images;
