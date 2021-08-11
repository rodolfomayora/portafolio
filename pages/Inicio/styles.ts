import styled, { css } from "styled-components";

import { colors, mixins } from '../../styles/config';

/* GENERAL
  ===============================*/
export const PageSection = styled.section`
  padding: 60px 0;
  background-color: ${colors.white};

  ${mixins.large(css`
    padding-top: 100px;
    padding-bottom: 100px;
  `)}
`;

export const PageSection2 = styled(PageSection)`
  background-color: ${colors.white2};

  & + & { padding-top: 0; }
`;

export const Subtitle = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
  text-align: center;
  color: ${colors.darkGray};

  ${mixins.medium(css`
    text-align: left;
  `)}
`;

/* MAIN SECTION
===============================*/
type MainSectionProps = {
  mainSectionHeight: number
}
export const MainSection = styled.section<MainSectionProps>`
  position: relative;
  z-index: 0;
  display: flex;
  min-height: 100vmax;
  ${({ mainSectionHeight }) => !!mainSectionHeight &&  css`
    min-height: ${mainSectionHeight}px;
  `}
  overflow: hidden;
  background-color: ${colors.transparent};

  ${mixins.medium(css`
    min-height: 100vh;
  `)}
`;

export const MainSectionContent = styled.div`
  position: relative;
  z-index: 0;

  display: flex;
  align-items: flex-end;
  width: 60%;
  min-width: fit-content;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 25px;

  ${mixins.medium(css`
    padding-right: 50px; 
  `)}
`;

export const FrostedLayer = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200%;
  background-color: ${colors.lightFrostedLayer};
`;

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const MainTittle = styled.h1`
  margin-bottom: 10px;
  font-size: 12.5vw;
  line-height: 11vw;
  font-weight: 900;

  /* text overlay gradient */
  background-color: ${colors.dark};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${colors.transparent};
  background-image: linear-gradient(
    90deg,
    ${colors.lightGradient1},
    ${colors.lightGradient2}
  );

  ${mixins.small(css`
    font-size: 68px;
    line-height: 60px;
  `)}

  ${mixins.medium(css`
    font-size: 90px;
    line-height: 80px;
  `)}
`;

export const TechRole = styled.span`
  display: block;
  font-size: 5.5vw;
  line-height: 4vw;
  letter-spacing: 0;
  font-weight: 400;
  color: $dark-gray;
  margin-bottom: 50px;

  ${mixins.small(css`
    font-size: 30px;
    line-height: 24px;
  `)}
  
  ${mixins.medium(css`
    margin-bottom: 70px;
    font-size: 42px;
    line-height: 32px;
    letter-spacing: -1.7px;
  `)}
`;

export const SocialLinksWrapper = styled.div`
  text-align: center;
    
  svg { /** Links */
    height: 26px;
    fill: ${colors.green};
    cursor: pointer;
    transition: fill 0.3s ease;

    &:hover { fill: ${colors.lightAurora3}; }
  }

  ${mixins.medium(css`
    text-align: left;
  `)}
`;


/* TECH SKILLS SECTION
===============================*/
export const TechnologyGrid = styled.div`
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
export const ButtonWrapper = styled.div`
  margin-top: 80px;
`;


/* CONTACT SECTION
===============================*/
export const ContactFormWrapper = styled.div`
  width: 100%;

  ${mixins.medium(css`
    width: 50%;
  `)}
`;