import styled from "styled-components/macro";
import ImageToolbar from "../shared/image-toolbar/image-toolbar.component";
import ImageEditor from "../shared/image-editor/image-editor.component";

export const Image = styled.div``;

export const StyledImageToolbar = styled(ImageToolbar)`
  margin-bottom: ${props => props.theme.spacing.navbarMarginBottom}px;
`;

export const StyledImageEditor = styled(ImageEditor)`
  margin-top: -20px;
`;
