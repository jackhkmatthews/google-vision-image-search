import styled from "styled-components/macro";

interface Props {
  crosshair: boolean;
}

export const ImageEditor = styled.div`
  display: inline-block;
  width: 100%;
  padding: 50px 0;
`;

export const Canvas = styled.canvas<Props>`
  width: 100%;
  cursor: ${props => (props.crosshair ? "crosshair" : "default")};
`;
