import { useRef, useEffect } from "react";

export function usePaintImageOnCanvas(
  canvasRef: React.MutableRefObject<HTMLCanvasElement>,
  src: string,
  dataURLCallback: (dataURL: string) => void,
  editing: boolean
): [React.MutableRefObject<number>, React.MutableRefObject<number>] {
  const imageRef = useRef(new Image());
  const imageWidth = useRef(0);
  const imageHeight = useRef(0);

  imageRef.current.onload = (): void => {
    imageHeight.current = imageRef.current.height;
    imageWidth.current = imageRef.current.width;
    canvasRef.current.height = imageHeight.current;
    canvasRef.current.width = imageWidth.current;
    const canvasContext = canvasRef.current.getContext("2d");
    if (canvasContext) {
      canvasContext.drawImage(
        imageRef.current,
        0,
        0,
        imageWidth.current,
        imageHeight.current
      );
      dataURLCallback(canvasRef.current.toDataURL());
    }
  };

  useEffect(() => {
    // when editing changes to not-editing repaint the image
    if (!editing) {
      imageRef.current.crossOrigin = "anonymous";
      imageRef.current.src = src;
    }
  }, [src, editing]);

  return [imageWidth, imageHeight];
}
