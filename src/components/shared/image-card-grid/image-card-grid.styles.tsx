import styled from "styled-components/macro";
import ImageCard from "../image-card/image-card.component";

export const ImageCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

export const StyledImageCard = styled(ImageCard)`
  flex-basis: 50%;
  padding: 10px;
  @media ${props => props.theme.device.md} {
    flex-basis: 33.33333%;
  }

  @media ${props => props.theme.device.lg} {
    flex-basis: 25%;
  }
`;
