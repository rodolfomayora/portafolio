import styled from "styled-components";

import { colors } from '../../styles/config';

export const AuroraBrackgroundStyled = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`;

export const Layer = styled.div`
  flex-grow: 1;
  position: relative;
  z-index: 0;
  filter: blur(120px);
`;

export const Shape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &:nth-of-type(1) {
    top: 30%;
    left: 25%;
    transform: translate(-60%, -60%);
    background-color: ${colors.lightAurora1};
    // background-color: hsl(166, 54%, 15%);
    /* background: transparent; */
    border-radius: 100%;
  }

  &:nth-of-type(2) {
    top: 30%;
    left: 75%;
    transform: translate(-40%, -60%);
    background: ${colors.lightAurora2};
    // background-color: hsl(163, 63%, 43%);
    border-radius: 100%;
  }
  
  &:nth-of-type(3) {
    top: 80%;
    left: 75%;
    transform: translate(-40%, -39%);
    background: ${colors.lightAurora3};
    // background-color: hsl(191, 100%, 35%);
    border-radius: 100%;
  }
  
  &:nth-of-type(4) {
    top: 80%;
    left: 25%;
    transform: translate(-60%, -39%);
    background: ${colors.lightAurora4};
    // background-color: hsl(149, 81%, 25%);
    border-radius: 100%;
  }

  &:nth-of-type(5) {
    left: 40%;
    top: 49%;
    transform:
      translate(-40%, -40%)
      rotateZ(-8deg);
    height: 0;
    width: 0;
    background: ${colors.lightAurora5};
    border-left: solid 45vw ${colors.transparent};
    border-right: solid 86vw ${colors.transparent};
    
    // border-top: solid 80px hsl(166, 54%, 15%);
    // border-top: solid 80px  hsl(234deg, 53%, 64%);
    // border-left: solid 150px hsla(0, 0%, 100%, 0);
    // border-right: solid 250px hsla(0, 0%, 100%, 0);
    
    // border-top: solid 45vh hsl(234deg, 53%, 15%);
    // border-top: solid 45vh hsl(200deg, 38%, 77%);
    // border-top: solid 45vh hsl(174, 100%, 50%);
  }
`;