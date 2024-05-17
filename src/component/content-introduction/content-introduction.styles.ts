import { styled } from "styled-components";

const breakpointSmall = '450px'

export const Introduction = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  gap: 20px;

  @media (max-width: ${breakpointSmall}) {
    flex-direction: column;
    padding: 0px 20px;
    margin: auto;
  }

  .introduction-sub-container-left {
    max-width: 300px;
  }

  .introduction-sub-container-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap:20px;
    max-width: 300px;

    .container-inner {
      border-bottom: solid 1px;
    }
  }
`;
