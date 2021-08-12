import React, { FC } from 'react';

import Link from 'next/link';

import Container from '../Container';
import SocialLinks from '../SocialLinks';
import {
  InnerNavigation,
  FooterBottom,
  FooterTop,
  FooterStyled,
  LinkToHome,
  LinkToHomeWrapper,
  SocialLinksWrapper,
} from './styles';

const Footer: FC = () => {

  const date: Date = new Date;
  const currentYear: string = date.getFullYear().toString();

  return (
    <FooterStyled>
      <Container>
        <FooterTop>
          <LinkToHomeWrapper>
            <Link href="/">
              <LinkToHome>
                RODOLFO<br />
                MAYORA<br />
                PEREDA
              </LinkToHome>
            </Link>
          </LinkToHomeWrapper>
  
          <InnerNavigation />
  
          <SocialLinksWrapper>
            <SocialLinks />
          </SocialLinksWrapper>
        </FooterTop>
  
        <FooterBottom>
          <small>
            &copy; <time dateTime={currentYear}>{currentYear}</time> - Rodolfo Mayora Pereda
          </small>
        </FooterBottom>
      </Container>
    </FooterStyled>
  );
}

export default Footer;