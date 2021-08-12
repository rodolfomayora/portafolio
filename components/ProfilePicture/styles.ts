import styled from "styled-components";

import { colors } from '../../styles/config';


export const ProfilePictureStyled = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const PictureLayer1x1 = styled.div`
  padding-top: 100%;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 1px 5px 0 ${colors.shadow};
  overflow: hidden;
`;

export const PictureContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: none;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;