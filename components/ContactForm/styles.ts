import styled, { css, keyframes } from "styled-components";

import { colors } from '../../styles/config';
import Button from '../Button';

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: $white2;
  border-radius: 4px;

  & > :first-child ~ * { margin-top: 16px; }
`;

type InputProps = {
  error?: boolean,
}
export const Input = styled.input<InputProps>`
  min-width: 100%;
  max-width: 100%;
  min-height: 40px;
  padding: 10px 20px;
  margin-top: 5px;
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
  outline: none;
  box-shadow: none;

  font-family: 'Open Sans';
  font-size: 16px;
  color: ${colors.darkGray};
  
  background-color: ${colors.white};

  &::placeholder {
    color: ${colors.gray};
    opacity: 1;
  }

  ${({ error }) => error && css`
    border-color: ${colors.red};
  `}
`;

export const TextArea = styled(Input)`
  min-height: 120px;
`;

export const ErrorLabel = styled.div`
  font-size: 13px;
  color: ${colors.red};
  margin-top: 3px;
`;

export const SubmitButton = styled(Button)`
  position: relative;
  margin-top: 40px;
  font-weight: 700;

  &:enabled:hover {
    background-color: ${colors.green2};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${colors.darkGray};
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  line-height: 0;
`;

const notification = keyframes`
  0% { width: 0; }
  20% { width: 100%; }
  80% { width: 100%; }
  100% { width: 0; }
`;

const responseMessage = css`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 0;
  will-change: width;
  animation: ${notification} 4s ease 0s 1;

  .notification { flex-shrink: 0; }
`;

export const SuccessResponse = styled.div`
  ${responseMessage}

  background-color: ${colors.greenSuccess};
`;

export const FailureResponse = styled.div`
  ${responseMessage}

  background-color: ${colors.red}; 
`;