import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImgDownload } from "../../../redux/actions";
import { selectEditing } from "../../../redux/selectors";

export function usePaintImageOnCanvas(
  canvasRef: React.MutableRefObject<HTMLCanvasElement>,
  src: string
): [React.MutableRefObject<number>, React.MutableRefObject<number>] {
  const dispatch = useDispatch();
  const editing = useSelector(selectEditing);
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
      dispatch(setImgDownload(canvasRef.current.toDataURL()));
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
