import React from "react";
import * as S from "./image.styles";
import { useSelector } from "react-redux";
import { selectImages } from "../../redux/selectors";

export interface Props {
  match: {
    params: any;
  };
}

const Image: React.FC<Props> = ({ match }: Props) => {
  const image = useSelector(selectImages)[match.params.index];
  const src = `https://storage.googleapis.com/${image}`;
  return (
    <S.Image>
      <S.Title>Image</S.Title>
      <img src={src} alt="alt" />
    </S.Image>
  );
};

export default Image;
