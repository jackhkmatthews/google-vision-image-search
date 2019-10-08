import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const ImageCard = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  line-height: 0;
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
  ${Link}:hover & {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const Copy = styled.p`
  color: ${props => props.theme.colors.black};
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: opcaity 0.3s ease;
  ${Link}:hover & {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
