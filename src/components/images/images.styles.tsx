import styled from "styled-components/macro";
import Navbar from "../shared/navbar/navbar.component";

export const Images = styled.div``;

export const StyledNavbar = styled(Navbar)`
  margin-bottom: ${props => props.theme.spacing.navbarMarginBottom}px;
`;
