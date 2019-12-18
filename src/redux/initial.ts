import { AppState, Image, ImgDownload, CanvasClick } from "./types";

export const initialImagesState: Image[] = new Array(100)
  .fill("")
  .map((src, index) => {
    const slug = `237_${index}`;
    return {
      labels: [],
      imgAltText: "This is the alt text",
      imgSrc: `https://picsum.photos/id/${index + 1}/1000/500`,
      slug
    };
  });

export const initialImgDownloadState: ImgDownload = null;

export const initialEditingState = false;

export const initialCanvasClicksState = [] as CanvasClick[];

export const initialAppState: AppState = {
  images: initialImagesState,
  imgDownload: initialImgDownloadState,
  editing: initialEditingState,
  canvasClicks: initialCanvasClicksState
};
