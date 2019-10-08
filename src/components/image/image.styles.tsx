import styled from "styled-components/macro";
import ImageToolbar from "../shared/image-toolbar/image-toolbar.component";

export const Image = styled.div``;

export const StyledImageToolbar = styled(ImageToolbar)`
  margin-bottom: ${props => props.theme.spacing.navbarMarginBottom}px;
`;
