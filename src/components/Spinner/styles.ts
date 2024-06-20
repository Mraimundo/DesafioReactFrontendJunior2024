import styled, { keyframes } from "styled-components";

interface StyledSpinnerProps {
  size: number;
}

const loaderDot = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  .loader-dot {
    width: 20px;
    height: 20px;
    font-size: ${({ size }) => `${size}px`};
    border-radius: 50%;
    background-color: ${({ theme }) => theme["gray-600"]};
    margin: 0 10px;
    animation: ${loaderDot} 1.7s infinite ease-in-out;
    animation-delay: calc(0.5s);
  }

  .loader-dot:nth-child(2) {
    animation-delay: calc(0.5s + 0.25s);
  }

  .loader-dot:nth-child(3) {
    animation-delay: calc(0.5s + 0.5s);
  }
`;
