import React from "react";
import * as S from "./images.styles";
import ImageCardGrid from "../shared/image-card-grid/image-card-grid.component";
import MainLayout from "../shared/main-layout/main-layout.component";

const Images: React.FC = () => {
  return (
    <S.Images>
      <S.StyledNavbar />
      <MainLayout>
        <ImageCardGrid />
      </MainLayout>
    </S.Images>
  );
};

export default Images;
