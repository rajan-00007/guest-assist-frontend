import styled, { css } from "styled-components";
import { colors } from "@/components/styles/colors";
import { Drawer } from "vaul";

export const ControlsArea = styled.section`
  padding: 30px 20px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 5;
`;

export const ControlsTitle = styled.h2`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: white;
  letter-spacing: 1.2px;
  margin: 0;
  text-transform: uppercase;
`;

export const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px 12px;
  width: 100%;

  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 14px 12px;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 12px 40px rgba(0, 0, 0, 0.5);
`;

export const GridCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

interface ControlCardProps {
  $active?: boolean;
  $isDnd?: boolean;
}

export const ControlCard = styled.button<ControlCardProps>`
  width: 74px;
  height: 74px;
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1);

  svg {
    color: #FFFFFF;
    transition: all 0.2s ease-in-out;
  }

  ${({ $isDnd, $active }) =>
    $isDnd &&
    $active &&
    css`
      background-color: rgba(239, 68, 68, 0.35); /* Translucent red background */
      border: 1.5px solid rgba(239, 68, 68, 0.5);
      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 4px 14px rgba(239, 68, 68, 0.25);
      
      svg {
        color: #EF4444; /* Bright red icon */
      }
    `}

  &:hover {
    background-color: ${({ $isDnd, $active }) =>
      $isDnd && $active ? "rgba(239, 68, 68, 0.45)" : "rgba(255, 255, 255, 0.3)"};
    border-color: ${({ $isDnd, $active }) =>
      $isDnd && $active ? "rgba(239, 68, 68, 0.6)" : "rgba(255, 255, 255, 0.25)"};
    transform: translateY(-1.5px);
  }

  &:active {
    transform: translateY(0.5px);
  }
`;

interface ControlCardLabelProps {
  $active?: boolean;
  $isDnd?: boolean;
}

export const ControlCardLabel = styled.div<ControlCardLabelProps>`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${({ $isDnd, $active }) => ($isDnd && $active ? "#EF4444" : "#FFFFFF")};
  text-align: center;
  line-height: 1.35;
  max-width: 76px;
`;

export const DrawerOverlay = styled(Drawer.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 1000;
`;

export const DrawerContent = styled(Drawer.Content)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 440px;
  margin: 0 auto;
  z-index: 1001;
  background-color: #000000;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
 /*  border: 1px solid rgba(255, 255, 255, 0.08); */
  border-bottom: none;
  padding: 8px 24px 72px 24px;
  outline: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const DrawerHandle = styled.div`
  width: 78px;
  height: 8px;
  background-color: #262626;
  border-radius: 9999px;
  margin: 8px auto 20px auto;
  cursor: grab;
`;

interface DrawerIconContainerProps {
  $active: boolean;
}

export const DrawerIconContainer = styled.div<DrawerIconContainerProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px auto;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${({ $active }) => ($active ? "rgba(239, 68, 68, 0.15)" : "#2C2C2E")};
  border: ${({ $active }) => ($active ? "1px solid rgba(239, 68, 68, 0.3)" : "none")};
  color: ${({ $active }) => ($active ? "#EF4444" : "#FFFFFF")};

  svg {
    transition: transform 0.2s ease-in-out;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const DrawerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
  text-align: center;
`;

export const DrawerButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const WifiInfoCard = styled.div`
  width: 100%;
  background-color: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  box-sizing: border-box;

  &:last-of-type {
    margin-bottom: 24px;
  }
`;

export const WifiInfoCardContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
  align-items: flex-start;
`;

export const CopyButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 154px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 16px;
  color: #FFFFFF;
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  outline: none;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 24px;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.4);
  }
`;



