import React from "react";
import * as S from "./images.styles";
import { useSelector } from "react-redux";
import { selectImages } from "../../redux/selectors";
import { Link } from "react-router-dom";

const Images: React.FC = () => {
  const images = useSelector(selectImages);
  const listItems = images.map((image: string, index: number) => {
    const src = `https://storage.googleapis.com/${image}`;
    return (
      <Link to={`/images/${index}`} key={src}>
        <img src={src} alt="foo" />
      </Link>
    );
  });
  return (
    <S.Images>
      <S.Title>Images</S.Title>
      {listItems}
    </S.Images>
  );
};

export default Images;
