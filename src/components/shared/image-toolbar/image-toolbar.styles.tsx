import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import MainLayout from "../main-layout/main-layout.component";

interface Props {
  red: boolean;
}

export const ImageToolbar = styled.div`
  background-color: ${props => props.theme.colors.grey2};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMainLayout = styled(MainLayout)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: inline-block;
`;

export const Title = styled.h5`
  color: ${props => props.theme.colors.black};
`;

export const CTA = styled.button<Props>`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  background-color: ${props =>
    props.red ? props.theme.colors.red : props.theme.colors.white};
  color: ${props =>
    props.red ? props.theme.colors.white : props.theme.colors.black};
  border: none;
`;
