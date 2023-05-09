import styled, { createGlobalStyle, css, keyframes } from "styled-components";

interface MyComponentProps {
  variant: boolean
}

const loadingAnimation = keyframes`
  100% {
    transform: translateX(100%);
  }
`

const shuffleSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html{
    font-size: 62.50%;
  }

  body{
    font-family: 'Manrope', sans-serif;
    background-color: hsl(218, 23%, 16%);
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
`

export const StyledContainer = styled.div`
  background-color: hsl(217, 19%, 24%);
  text-align: center;
  padding: 4rem 3rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 50rem;
  height: 38.5rem;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h6{
    color: hsl(150, 100%, 66%);
    font-size: clamp(0.8rem, 0.7rem + 0.5vw, 1.15rem);
    text-transform: uppercase;
    letter-spacing: .5rem;
  }
`

export const StyledContent = styled.h1<MyComponentProps>`
  font-size: clamp(1.6rem, 1.2571rem + 1.7143vw, 2.8rem);
  color: hsl(193, 38%, 86%);
  line-height: 4rem;
  
  ${({ variant }) => variant && css`
    position: relative;
    overflow: hidden;
    background-color: transparent;
    border-radius: 0.5rem;
    
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        transparent,
        hsl(0, 0%, 84%),
        transparent
      );
      transform: translateX(-100%);  
      animation: ${loadingAnimation} 1s infinite;
    }
  `}
`

export const StyledDivider = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`

export const StyledShufflerContainer = styled.div`
  background-color: hsl(150, 100%, 66%);
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
  box-shadow: 0 0 20px 1px hsl(150, 100%, 66%);
}
`

export const StyledShuffleDice = styled.img`
  animation: ${shuffleSpin} 1s infinite;
`