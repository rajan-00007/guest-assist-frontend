import styled, { css } from "styled-components";
import { colors } from "@/components/styles/colors";

export const NavWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 16px;
  right: 16px;
  height: 75px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 30px;

  @media (max-width: 440px) {
    bottom: 12px;
    left: 12px;
    right: 12px;
  }
`;

export const SvgBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.6));
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  width: 38%;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
`;

interface NavLinkItemProps {
  $active: boolean;
}

export const NavLinkItem = styled.a<NavLinkItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${({ $active }) => ($active ? "#FFFFFF" : "rgba(255, 255, 255, 0.45)")};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 6px 0;
  min-width: 50px;
  border-radius: 12px;

  svg {
    color: ${({ $active }) => ($active ? "#FFFFFF" : "rgba(255, 255, 255, 0.45)")};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    color: #FFFFFF;
    svg {
      color: #FFFFFF;
      transform: translateY(-1px);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const VoiceButtonContainer = styled.div`
  position: absolute;
  top: -21px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const VoiceButton = styled.button`
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.primary[1]} 0%, #003AAF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.base.white};
  border: 5px solid #000000;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.06);
  }

  &:active {
    transform: scale(0.94);
  }
`;
