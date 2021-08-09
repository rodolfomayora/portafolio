import styled, { css, keyframes } from "styled-components";

import { colors } from '../../styles/config';

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: $white2;
  border-radius: 4px;

  & > :first-child ~ * { margin-top: 16px; }
`;

const formElementStyles = css`
  min-width: 100%;
  max-width: 100%;
  min-height: 40px;

  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: ${colors.darkGray};

  border-radius: 4px;
  box-shadow: none;
`;

const inputElementStyles = css`
  ${formElementStyles}

  padding: 10px 20px;
  outline: none;
  border: 1px solid ${colors.lightGray};
  background-color: ${colors.white};
  /* box-shadow: 0 0 2px $gray; */

  margin-top: 5px;

  &::-internal-autofill-selected {

  }

  &::placeholder {
    color: ${colors.gray};
    opacity: 1;
  }
`;

type InputProps = {
  error?: boolean,
}
export const Input = styled.input<InputProps>`
  ${inputElementStyles}

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

export const SubmitButton = styled.button`
  ${formElementStyles}

  position: relative;
  margin-top: 40px;
  padding: 0;
  border: none;
  font-weight: 700;
  color: ${colors.white};
  line-height: 42px;
  background-color: ${colors.green};
  cursor: pointer;
  box-shadow: 0 2px 4px ${colors.shadow};
  transition: background-color 0.3s ease;

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
  0% {
    width: 0;
  }
  20% {
    width: 100%;
  }
  80% {
    width: 100%;
  }
  100% {
    width: 0;
  }
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