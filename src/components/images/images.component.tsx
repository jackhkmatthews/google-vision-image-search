import React from "react";
import * as S from "./images.styles";
import { useSelector } from "react-redux";
import { selectImages } from "../../redux/selectors";
import { Link } from "react-router-dom";
import { Image } from "../../redux/types";
import Navbar from "../shared/navbar/navbar.component";

const Images: React.FC = () => {
  const images = useSelector(selectImages);
  const listItems = images.map((image: Image) => {
    const src = `https://storage.googleapis.com/${image.imgSrc}`;
    return (
      <Link to={`/images/${image.slug}`} key={src}>
        <img src={src} alt={image.imgAltText} />
      </Link>
    );
  });
  return (
    <S.Images>
      <Navbar />
      <S.Title>Images</S.Title>
      {listItems}
    </S.Images>
  );
};

export default Images;
