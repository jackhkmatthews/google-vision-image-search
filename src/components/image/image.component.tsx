import React from "react";
import * as S from "./image.styles";
import { useSelector } from "react-redux";
import { selectImages, selectImgDownload } from "../../redux/selectors";
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
  const imgDownload = useSelector(selectImgDownload);
  const src = `https://storage.googleapis.com/${image.imgSrc}`;
  return (
    <S.Image>
      <Navbar />
      <S.StyledImageToolbar />
      <MainLayout>
        {imgDownload ? (
          <S.Download>
            <S.DownloadLink href={imgDownload} download={image.imgSrc}>
              Download
            </S.DownloadLink>
          </S.Download>
        ) : null}
        <S.StyledImageEditor src={src} />
      </MainLayout>
    </S.Image>
  );
};

export default Image;
