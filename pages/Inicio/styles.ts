import styled, { css } from "styled-components";

import { colors, mixins } from '../../styles/config';

/* GENERAL
  ===============================*/
export const PageSection = styled.section`
  padding: 60px 0;
  background-color: ${colors.white2};

  ${mixins.large(css`
    padding-top: 100px;
    padding-bottom: 100px;
  `)}
`;

export const Subtitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: ${colors.darkGray};

  ${mixins.medium(css`
    text-align: left;
  `)}
`;

/* TECH SKILLS SECTION
===============================*/
export const TecnologyGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  ${mixins.medium(css`
    grid-template-columns: repeat(3, 1fr);
  `)}

  ${mixins.large(css`
    grid-template-columns: repeat(5, 1fr);
  `)}
`;

/* PORTFOLIO SECTION
===============================*/


/* CONTACT SECTION
  ===============================*/


export const ContactFormWrapper = styled.div`
  width: 100%;

  ${mixins.medium(css`
    width: 50%;
  `)}
`;