import React, { useEffect, useRef } from "react";
import * as S from "./image-editor.styles";
import { useDispatch, useSelector } from "react-redux";
import { setImgDownload, setCanvasClicks } from "../../../redux/actions";
import { selectEditing, selectCanvasClicks } from "../../../redux/selectors";
import { usePaintImageOnCanvas } from "./image-editor.hooks";

interface Props {
  src: string;
  className?: string;
}

const ImageEditor: React.FC<Props> = ({ src, className }: Props) => {
  const dispatch = useDispatch();
  const editing = useSelector(selectEditing);
  const canvasClicks = useSelector(selectCanvasClicks);
  const canvasRef = useRef(document.createElement("canvas"));
  const [imageWidth, imageHeight] = usePaintImageOnCanvas(
    canvasRef,
    src,
    dataURL => dispatch(setImgDownload(dataURL)),
    editing
  );
  const blurSize = 100;
  const blurRadius = 30;
  const lastCanvasClick = canvasClicks[canvasClicks.length - 1];

  const lastOffsetX = lastCanvasClick ? lastCanvasClick.offsetX : null;
  const lastOffsetY = lastCanvasClick ? lastCanvasClick.offsetY : null;

  useEffect(() => {
    if (lastOffsetX && lastOffsetY) {
      window.stackBlurCanvasRGBA(
        canvasRef.current,
        lastOffsetX,
        lastOffsetY,
        blurSize,
        blurSize,
        blurRadius
      );
      dispatch(setImgDownload(canvasRef.current.toDataURL()));
    }
  }, [lastOffsetX, lastOffsetY, canvasRef, blurSize, dispatch]);

  const handleClick = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ): void => {
    if (!editing) {
      return;
    }
    const offsetX =
      (event.nativeEvent.offsetX / canvasRef.current.clientWidth) *
        imageWidth.current -
      blurSize / 2;
    const offsetY =
      (event.nativeEvent.offsetY / canvasRef.current.clientHeight) *
        imageHeight.current -
      blurSize / 2;
    dispatch(setCanvasClicks([...canvasClicks, { offsetX, offsetY }]));
  };
  return (
    <S.ImageEditor className={className}>
      <S.Canvas ref={canvasRef} onClick={handleClick} crosshair={editing} />
    </S.ImageEditor>
  );
};

export default ImageEditor;
