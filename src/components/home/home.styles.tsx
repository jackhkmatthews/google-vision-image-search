import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Home = styled.div``;

export const Inner = styled.div`
  padding: 200px 0;
  text-align: center;
`;

export const Link = styled(NavLink)`
  display: inline-block;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.black};
`;
