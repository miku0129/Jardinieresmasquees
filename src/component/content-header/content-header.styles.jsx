import styled from 'styled-components'

export const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgb(235, 130, 23, 0.8),
        rgb(220, 241, 231, 0)
      ),
      url("https://i.ibb.co/G2cH2Xh/jm11.jpg");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    max-height: 600px;

    .header-contents {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;

      p {
        font-size: 30px;
      }
      h2 {
        font-size: 45px;
      }
    }

`

// .header {
//     position: absolute;
//     top: 0;
//     left: 0;
//     background: linear-gradient(
//         180deg,
//         rgb(235, 130, 23, 0.8),
//         rgb(220, 241, 231, 0)
//       ),
//       url("https://i.ibb.co/P5YY5z7/IMG-9034.jpg");
//     width: 100%;
//     height: 100vh;
//     background-size: cover;
//     background-position: center;
//     max-height: 600px;

//     .header-contents {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       color: white;

//       p {
//         font-size: 30px;
//       }
//       h2 {
//         font-size: 45px;
//       }
//     }
//   }
