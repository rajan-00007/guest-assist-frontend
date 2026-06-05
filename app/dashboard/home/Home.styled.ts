import styled, { css } from "styled-components";
import { colors } from "@/components/styles/colors";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  padding-bottom: 120px;
  position: relative;
  background-color: #000000;
  box-sizing: border-box;
`;

export const SlideshowWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75vh;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000000 100%);
    z-index: 2;
  }
`;

interface SlideImageProps {
  $active: boolean;
  $imageUrl: string;
}

export const SlideImage = styled.div<SlideImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  transition: opacity 1.5s ease-in-out;
  opacity: ${({ $active }) => ($active ? 0.72 : 0)};
  z-index: ${({ $active }) => ($active ? 1 : 0)};
  filter: saturate(1.15) brightness(0.85);
`;

export const HeroPromoArea = styled.div`
  margin-top: 180px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  z-index: 5;
`;

export const HeroActionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4px;
`;

export const JoinButton = styled.button`
  padding: 10px 24px;
  border-radius: 20px;
  background-color: #FFFFFF;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  outline: none;

  &:hover {
    transform: translateY(-1.5px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.25);
  }

  &:active {
    transform: translateY(0.5px);
  }
`;

export const DashesContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

interface DashProps {
  $active: boolean;
}

export const Dash = styled.div<DashProps>`
  width: ${({ $active }) => ($active ? "24px" : "12px")};
  height: 8px;
  border-radius: 8px;
  background-color: ${({ $active }) => ($active ? "#FFFFFF" : "rgba(255, 255, 255, 0.45)")};
  transition: all 0.3s ease-in-out;
`;

export const StatusTrackCard = styled.div`
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 18px;
  height: 74px;
  padding: 16px 20px;
  margin: 18px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.35), 0 8px 32px 0 rgba(0, 0, 0, 0.15);
`;

export const CardLeftBlock = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const CardIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: #17153B;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #818CF8;
`;

export const CardTextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-left: 14px;
`;

export const TrackButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  padding: 4px 8px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;
