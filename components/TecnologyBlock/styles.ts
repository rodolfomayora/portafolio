import styled from "styled-components";

export const TecnologyBlockStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  padding: 12px 12px;
  background-color: hsl(0, 0%, 96%); //$white2
  overflow: hidden;
  border-left: solid 6px hsl(167deg, 92%, 30%); //$green
  box-shadow: 0 2px 4px hsla(166deg, 6%, 22%, 0.4); //$shadow;

  @media screen and (min-width: 576px) { //small
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 40px;
  height: auto;
  width: auto;
`;

export const Label = styled.span`
  flex-grow: 1;
  text-align: center;
  font-weight: 700;
  margin-top: 12px;

  @media screen and (min-width: 576px) { //small
    margin-top: 0;
  }
`;