import React from "react";
import * as S from "./image-editor.styles";

interface Props {
  src: string;
}

const ImageEditor: React.FC<Props> = ({ src }: Props) => {
  return (
    <S.ImageEditor>
      <S.Image src={src} />
    </S.ImageEditor>
  );
};

export default ImageEditor;
