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

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;

    gap: 50px;

    border-bottom: solid 1px gray;
    padding: 0px 20px 50px 20px;

    .icons{
      display: flex;
      gap: 5px;
      .group-logo{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

      }
      .facebook-logo{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        opacity: 50%;
      }
    }

    .contact-sub-container {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: ${breakpointSmall}) {
      gap: 5px;
      flex-direction: column;

      .contact-sub-container {
        width: 200px;
      }
    }
  }
`;

// .contact-container {
//     display: flex;
//     justify-content: center;

//     gap: 50px;

//     border-bottom: solid 1px gray;
//     padding-bottom: 50px;

//     @media (max-width: $breakpoint-small) {
//       gap: 5px;
//       flex-direction: column;

//       .logo {
//         min-width: 50px;
//         max-width: 50px;
//         height: 50px;
//         margin-left: 5%;
//       }
//       .contact-sub-container {
//         width: 200px;
//         margin-left: 5%;
//       }
//     }

//     .logo {
//       min-width: 100px;
//       max-width: 100px;
//       height: 100px;
//       border-radius: 50%;
//       background-image: url("https://i.ibb.co/51sbQ5G/Screenshot-2023-08-20-143312.jpg");
//       background-position: center;
//       background-size: cover;
//     }

//     .contact-sub-container {
//       display: flex;
//       flex-direction: column;
//     }
//   }
