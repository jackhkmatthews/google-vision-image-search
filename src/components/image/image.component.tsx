import React from "react";
import * as S from "./image.styles";
import { useSelector } from "react-redux";
import { selectImages } from "../../redux/selectors";
import Navbar from "../shared/navbar/navbar.component";
import MainLayout from "../shared/main-layout/main-layout.component";

export interface Props {
  match: {
    params: {
      slug: string;
    };
  };
}

const Image: React.FC<Props> = ({ match }: Props) => {
  const image = useSelector(selectImages).filter(
    image => image.slug === match.params.slug
  )[0];
  const downloadName = `${image.imgSrc}.jpeg`;
  return (
    <S.Image>
      <Navbar />
      <S.StyledImageToolbar downloadName={downloadName} />
      <MainLayout>
        <S.StyledImageEditor src={image.imgSrc} />
      </MainLayout>
    </S.Image>
  );
};

export default Image;
