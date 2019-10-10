import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setImgDownload } from "../redux/actions";

export function useImageCanvas(
  src: string
): React.MutableRefObject<HTMLCanvasElement> {
  const canvasRef = useRef(document.createElement("canvas"));
  const dispatch = useDispatch();

  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = src;
    image.onload = (): void => {
      const imageHeight = image.height;
      const imageWidth = image.width;
      canvasRef.current.height = imageHeight;
      canvasRef.current.width = imageWidth;
      const canvasContext = canvasRef.current.getContext("2d");
      if (canvasContext) {
        canvasContext.drawImage(image, 0, 0, imageWidth, imageHeight);
        dispatch(setImgDownload(canvasRef.current.toDataURL()));
      }
    };
  }, [src, dispatch]);

  return canvasRef;
}
