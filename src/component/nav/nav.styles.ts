import { styled } from "styled-components";

const navHeight = "15%";
const navShrinkHeight = "10%";
const breakpointSmall = "450px";

export const Navigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${navHeight};
  padding: 30px 20px;
  box-sizing: border-box;
  z-index: 1;

  display: flex;
  justify-content: space-between;

  transition: height 0.3s ease-in-out; // 高さのアニメーションを設定
  will-change: height; // アニメーションの最適化

  .menu {
    list-style: none;
    display: flex;
    gap: 30px;
    margin-right: 30px; 

    li {
      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  &:hover {
    background-color: white;

    .menu {
      li {
        a {
          color: black;
          transition: color 0.3s;

          &:hover {
            color: green;
            cursor: pointer;
          }
        }
      }
    }
  }

  &.shrink {
    height: ${navShrinkHeight};
    padding: 10px 20px;
    background-color: white;
    border-bottom: solid 1px gray;

    .menu {
      li {
        a {
          color: black;
        }
      }
    }
  }

  @media (max-width: ${breakpointSmall}) {
    height: auto;
    padding: 10px 20px;
    justify-content: center;
    flex-direction: column;

    .menu {
      padding-left: 0;
      justify-content: space-around;
      
      li {
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 5px;
  min-width: 80px;
  max-width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url("https://i.ibb.co/51sbQ5G/Screenshot-2023-08-20-143312.jpg");
  background-position: center;
  background-size: cover;

  transition: all 0.3s ease-in-out; // 高さのアニメーションを設定
  will-change: height; // アニメーションの最適化

  &.shrink {
    min-width: 50px;
    max-width: 50px;
    height: 50px;
  }

  @media (max-width: ${breakpointSmall}) {
    position: relative;
    min-width: 50px;
    max-width: 50px;
    height: 50px;
    margin-bottom: 10px;

    &.shrink {
      min-width: 0px;
      max-width: 0px;
      height: 0px;
    }
  }
`;
