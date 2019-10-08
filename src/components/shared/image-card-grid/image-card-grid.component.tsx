import React from "react";
import * as S from "./image-card-grid.styles";
import { useSelector } from "react-redux";
import { selectImages } from "../../../redux/selectors";
import { Image } from "../../../redux/types";

const ImageCardGrid: React.FC = () => {
  const images = useSelector(selectImages);
  const listItems = images.map((image: Image) => {
    const src = `https://storage.googleapis.com/${image.imgSrc}`;
    return (
      <S.StyledImageCard
        src={src}
        alt={image.imgAltText}
        slug={image.slug}
        key={image.slug}
      />
    );
  });
  return <S.ImageCardGrid>{listItems}</S.ImageCardGrid>;
};

export default ImageCardGrid;
