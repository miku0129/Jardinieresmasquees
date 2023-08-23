import { styled } from "styled-components";

const footerHeight = "15%";
const breakpointSmall = "450px";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: ${footerHeight};

  .footer-sub-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${breakpointSmall}) {
      justify-content: flex-start;
    }
`;
