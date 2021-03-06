import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const Navbar = styled.div`
  background-color: ${props => props.theme.colors.grey1};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  display: inline-block;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.black};
`;

export const Placeholder = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
`;
