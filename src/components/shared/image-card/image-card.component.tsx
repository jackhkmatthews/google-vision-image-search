import React from "react";
import * as S from "./image-card.styles";

interface Props {
  src: string;
  alt?: string;
  slug?: string;
  className?: string;
}

const ImageCard: React.FC<Props> = ({ src, alt, slug, className }: Props) => {
  return (
    <S.ImageCard className={className}>
      <S.Link to={`/images/${slug}`}>
        <S.Image src={src} alt={alt} />
        <S.Overlay>
          <S.Copy>Edit</S.Copy>
        </S.Overlay>
      </S.Link>
    </S.ImageCard>
  );
};

export default ImageCard;
