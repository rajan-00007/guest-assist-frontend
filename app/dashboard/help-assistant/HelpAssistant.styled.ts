import styled, { keyframes, css } from "styled-components";
import { colors } from "@/components/styles/colors";

const morph = keyframes`
  0%, 100% {
    border-radius: 45% 55% 70% 30% / 45% 50% 50% 55%;
    transform: scale(0.98) rotate(0deg);
  }
  33% {
    border-radius: 65% 35% 50% 50% / 55% 45% 55% 45%;
    transform: scale(1.03) rotate(120deg);
  }
  66% {
    border-radius: 40% 60% 35% 65% / 50% 60% 45% 50%;
    transform: scale(0.96) rotate(240deg);
  }
`;

const swirl = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const AssistantWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

// Iridescent Morphing Siri/Gemini Style Swirling Fluid Sphere
export const IridescentOrb = styled.div<{ $large?: boolean }>`
  width: ${({ $large }) => ($large ? "170px" : "110px")};
  height: ${({ $large }) => ($large ? "170px" : "110px")};
  background: linear-gradient(-45deg, #0052F7 0%, #7C3AED 25%, #EC4899 50%, #10B981 75%, #0052F7 100%);
  background-size: 300% 300%;
  animation: ${morph} 8s ease-in-out infinite, ${swirl} 6s ease-in-out infinite;
  box-shadow: 
    inset -12px -12px 30px rgba(0, 0, 0, 0.85),
    inset 12px 12px 30px rgba(255, 255, 255, 0.4),
    0 0 35px rgba(0, 82, 247, 0.45);
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 12%;
    left: 18%;
    width: 25%;
    height: 18%;
    background: rgba(255, 255, 255, 0.45);
    border-radius: 50%;
    filter: blur(1.5px);
    transform: rotate(-15deg);
  }
`;

export const CenterPrompt = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 0 24px;
  text-align: center;
`;

// Conversation Chat bubbles area
export const ChatArea = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 100px 20px 100px 20px;
  box-sizing: border-box;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const BubbleRow = styled.div<{ $right?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ $right }) => ($right ? "flex-end" : "flex-start")};
`;

interface BubbleProps {
  $user: boolean;
}

export const MessageBubble = styled.div<BubbleProps>`
  max-width: 72%;
  padding: 12px 16px;
  font-size: 14px;
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.45;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  ${({ $user }) =>
    $user
      ? css`
          background-color: #3f3f46;
          color: #ffffff;
          border-radius: 18px 18px 4px 18px;
        `
      : css`
          background-color: #18181b;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px 18px 18px 4px;
        `}
`;

// Chat Input bar positioned in the 70th% of the height to avoid BottomNav overlap
export const BottomInputArea = styled.div`
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  background-color: transparent;
  z-index: 100;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70%;
  left: 0;
`;

export const CustomInputBar = styled.div`
  width: 100%;
  height: 62px;
  background-color: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px 0 20px;
  box-sizing: border-box;
`;

export const CustomInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: #FFFFFF;
  font-family: inherit;

`;

export const ActionIconButton = styled.button<{ $white?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ $white }) => ($white ? colors.base.white : "rgba(255, 255, 255, 0.08)")};
  color: ${({ $white }) => ($white ? colors.base.black : colors.base.white)};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ $white }) => ($white ? colors.base.white : "rgba(255, 255, 255, 0.14)")};
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Circular Assistant voice control triggers
export const ControlsCircleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  z-index: 10;
  width: 100%;
`;

export const KeyboardIconBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: #334155;
    transform: scale(1.05);
  }
`;

export const BigMicBtn = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15);
  transition: all 0.25s ease-in-out;
  outline: none;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.22);
  }
`;

export const CloseIconBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: #334155;
    transform: scale(1.05);
  }
`;
