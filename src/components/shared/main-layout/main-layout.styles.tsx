import styled from "styled-components/macro";

export const MainLayout = styled.div`
  width: 100%;
  display: block;
  padding: 0 ${props => `${props.theme.gridValues.paddingSm}px`};

  @media ${props => props.theme.device.md} {
    padding: 0 ${props => `${props.theme.gridValues.paddingMd}px`};
  }

  @media ${props => props.theme.device.lg} {
    margin: 0 auto;
    padding: 0 ${props => `${props.theme.gridValues.paddingLg}px`};
    width: 900px;
  }
`;
