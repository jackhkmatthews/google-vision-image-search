import React from "react";
import * as S from "./image.styles";
import { useSelector } from "react-redux";
import { selectImages } from "../../redux/selectors";

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
  const src = `https://storage.googleapis.com/${image.imgSrc}`;
  return (
    <S.Image>
      <S.Title>Image</S.Title>
      <img src={src} alt={image.imgAltText} />
    </S.Image>
  );
};

export default Image;
