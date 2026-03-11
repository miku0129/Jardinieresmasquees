import { styled } from "styled-components";

const breakpointSmall = "450px";

export const Logo = styled.div`
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url("https://i.ibb.co/51sbQ5G/Screenshot-2023-08-20-143312.jpg");
    background-position: center;
    background-size: cover;

    @media (max-width: ${breakpointSmall}) {
        min-width: 70px;
        max-width: 70px;
        height: 70px;
        margin-left: 5%;
`;
