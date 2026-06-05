import styled, { css } from "styled-components";
import { StyledInput } from "@/components/styles/input/Input.styled";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #6B0B30;
  height:164px;
  padding: 24px 20px 16px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ResortAvatar = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-image: url("https://images.pexels.com/photos/13350776/pexels-photo-13350776.jpeg");
  background-size: cover;
  background-position: center;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
`;

export const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const VegModeWrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 8px 12px;
  width:118px;
  height: 48px;
  box-sizing: border-box;
`;

export const SwitchTrack = styled.div<{ $checked: boolean }>`
  width: 56px;
  height: 28px;
  border-radius: 18px;
  background-color: ${({ $checked }) => ($checked ? "#22C55E" : "rgba(255, 255, 255, 0.2)")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

export const SwitchKnob = styled.div<{ $checked: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #FFFFFF;
  position: absolute;
  top: 3px;
  left: ${({ $checked }) => ($checked ? "23px" : "3px")};
  transition: left 0.2s ease-in-out;
`;

export const SearchBarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const SearchInputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  height: 45px;
  overflow: hidden;
`;

export const IconLeftWrapper = styled.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  color: #71717A;
  pointer-events: none;
`;

export const IconRightWrapper = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  color: #71717A;
  cursor: pointer;

  &:hover {
    color: #3F3F46;
  }
`;

export const CustomSearchInput = styled(StyledInput)`
  border: none;
  background-color: transparent;
  padding-left: 44px;
  padding-right: 44px;
  height: 100%;
  width: 100%;

  &:focus, &:active {
    border-color: transparent;
    color: #000000;
  }
`;
