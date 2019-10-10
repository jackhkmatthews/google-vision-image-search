import React from "react";
import * as S from "./image-editor.styles";
import { useImageCanvas } from "../../../hooks/use-image-canvas";

interface Props {
  src: string;
  className?: string;
}

const ImageEditor: React.FC<Props> = ({ src, className }: Props) => {
  const canvasRef = useImageCanvas(src);
  return (
    <S.ImageEditor className={className}>
      <S.Canvas ref={canvasRef} />
    </S.ImageEditor>
  );
};

export default ImageEditor;
