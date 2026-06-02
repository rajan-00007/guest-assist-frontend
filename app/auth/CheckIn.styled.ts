import styled, { css } from "styled-components";
import { colors } from "@/components/styles/colors";
import { textSizes } from "@/components/styles/typography";

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

export const HeaderCard = styled.div`
  width: 100%;
  height: 368px;
  background-color: #0D1C2E;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 24px 20px 24px;
  overflow: hidden;
  z-index: 1;
`;

export const WaveOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 310px;
  width: 100%;
  margin-top: 10px;
`;

export const CircleBackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const FormArea = styled.div`
  flex: 1;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding: 44px 24px 32px 24px;
  justify-content: flex-start;
`;

export const InputsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface FloatingLabelProps {
  $isFocused: boolean;
  $hasValue: boolean;
}

export const FloatingLabel = styled.label<FloatingLabelProps>`
  position: absolute;
  left: 12px;
  top: -8px;
  background-color: #000000;
  padding: 0 6px;
  font-size: 11px;
  font-weight: 500;
  color: ${colors.base.white};
  pointer-events: none;
  z-index: 2;
  letter-spacing: 0.3px;
  transition: color 0.2s ease-in-out;
`;

export const OtpTextContainer = styled.div`
  text-align: center;
  color: #71717A;
  font-size: 14px;

  line-height: 1.5;

  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;

export const OtpInputsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 32px 0 0 0;
`;

export const OtpCharInput = styled.input`
  width: 48px;
  height: 56px;
  font-size: ${textSizes.heading.hero}px;
  font-weight: 700;
  color: #ffffff;
  background-color: transparent;
  border: none;
  border-bottom: 2.5px solid #ffffff;
  text-align: center;
  outline: none;
  caret-color: ${colors.primary[1]};
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-bottom-color: ${colors.primary[1]};
  }

  &::selection {
    background-color: rgba(0, 82, 247, 0.3);
  }
`;

export const ResendText = styled.div`
  text-align: center;
  font-size: 12px;
  margin-top:10px;
  color: #71717A;
  
  a {
    color: ${colors.primary[1]};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    margin-left: 4px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 10px;
`;

interface PillButtonProps {
  $active: boolean;
}

export const PillButton = styled.button<PillButtonProps>`
  width: 100%;
  height: 60px;
  border-radius: 26px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease-in-out;
  cursor: ${({ $active }) => ($active ? "pointer" : "not-allowed")};
  outline: none;

  background-color: ${({ $active }) => ($active ? colors.primary[1] : "#0d1e4e")};
  color: ${({ $active }) => ($active ? colors.base.white : "#4e5f8e")};

  ${({ $active }) =>
    $active &&
    css`
      &:hover {
        background-color: #1a63ff;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 82, 247, 0.25);
      }

      &:active {
        transform: translateY(1px);
        box-shadow: none;
      }
    `}
`;

export const SuccessCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 24px;
  color: #ffffff;
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SuccessIconWrapper = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: rgba(22, 163, 74, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.green[200]};
  margin-bottom: 24px;
  border: 1px solid rgba(22, 163, 74, 0.2);
`;
