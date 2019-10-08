import React from "react";
import * as S from "./image-toolbar.styles";
import MainLayout from "../main-layout/main-layout.component";

interface Props {
  className?: string;
}

const ImageToolbar: React.FC<Props> = ({ className }: Props) => {
  return (
    <S.ImageToolbar className={className}>
      <MainLayout>
        <S.Link to={"/images"}>
          <S.Title>Back to images</S.Title>
        </S.Link>
      </MainLayout>
    </S.ImageToolbar>
  );
};

export default ImageToolbar;
