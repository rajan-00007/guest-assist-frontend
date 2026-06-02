import styled, { css } from "styled-components";
import { colors } from "@/components/styles/colors";

export const PhoneLayout = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  @media (max-width: 440px) {
    max-width: 100%;
    height: 100dvh;
    box-shadow: none;
  }
`;

export const SlidesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

interface SlideProps {
  $active: boolean;
  $imageUrl: string;
}

export const Slide = styled.div<SlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 1.5s ease-in-out;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  z-index: ${({ $active }) => ($active ? 1 : 0)};
  
  /* Brightness adjustment to enhance readability */
  filter: brightness(0.9);
`;

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.45) 30%,
    rgba(0, 0, 0, 0.8) 65%,
    rgba(0, 0, 0, 0.98) 100%
  );
  z-index: 2;
  pointer-events: none;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 40px 28px 48px 28px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-sizing: border-box;
`;

export const ItalicLabel = styled.div`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  color: #FFFFFF;
  opacity: 0.95;
  margin-bottom: 2px;
  letter-spacing: 0.2px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
  margin-bottom: 6px;
`;

export const DescriptionContainer = styled.div`
  max-width: 340px;
  width: 100%;
  margin-bottom: 12px;
  line-height: 1.5;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 4px;
`;

export const CircleArrowButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1.5px solid #FFFFFF;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease-in-out;

  svg {
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
    transform: scale(1.05);
    
    svg {
      transform: translateX(2px);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
