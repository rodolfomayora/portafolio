import styled, { css } from "styled-components";

import { colors, mixins } from '../../styles/config';

export const ProfileStyled = styled.main`
  min-height: calc(100vh - 263px); /** 263px Footer Height */
  line-height: 24px;

  & p:first-of-type ~ p { margin-top: 20px; }
`;

export const DecorationSection = styled.div`
  position: relative;
  z-index: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  padding-top: 100px;
  overflow: hidden;
  background: ${colors.transparent};

  ${mixins.medium(css`
    height: 400px;
  `)}
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  color: ${colors.darkGray};

  ${mixins.medium(css`
    font-size: 42px;
  `)}
`;

export const PageSection = styled.section`
  position: relative;
  padding: 60px 0;
  background-color: ${colors.white2};

  &:first-of-type { padding-top: 100px; }

  & + & { padding-top: 0; }

  ${mixins.medium(css`
    padding-top: 80px;
    padding-bottom: 80px;
  `)}
`;

export const PictureWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  border-radius: 50%;
  padding: 10px;
  background-color: ${colors.white2};

  ${mixins.large(css`
    width: 170px;
  `)}
`;

export const Subtitle = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: ${colors.darkGray};

  ${mixins.medium(css`
    text-align: left;
    font-size: 32px;
  `)}
`;

export const List = styled.ul`
  padding-left: 20px;
`;

/* CONTACT SECTION
===============================*/
export const ContactFormWrapper = styled.div`
  width: 100%;

  ${mixins.medium(css`
    width: 50%;
  `)}
`;