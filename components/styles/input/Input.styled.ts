import styled, { css } from "styled-components";
import { colors } from "../colors";
import { textSizes } from "../typography";

interface StyledInputProps {
  height?: number;
  fontSize?: number;
  $hasValue?: boolean;
  placeholderAlignment?: "left" | "center";
  $dark?: boolean;
}

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['height', 'fontSize', 'placeholderAlignment', 'dark', '$dark'].includes(prop as string),
}) <StyledInputProps>`
  display: flex;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "45px")};

  padding: 0 16px;

  border-radius: 6px;
  border: 1.5px solid ${({ $dark }) => ($dark ? colors.neutral[700] : colors.neutral[500])};
  background-color: ${({ $dark }) => ($dark ? colors.base.black : colors.base.white)};
  text-align: ${({ placeholderAlignment }) => placeholderAlignment || "left"};

  font-size: ${({ fontSize }) =>
    fontSize
      ? `${fontSize}px`
      : `${textSizes.ui.primaryButton}px`};

  font-weight: 400;
  color: ${({ $dark }) => ($dark ? colors.base.white : colors.base.black)};

  outline: none;
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $dark }) => ($dark ? "#52525B" : colors.neutral[700])};
  }

  &:focus, &:active {
    border-color: ${colors.base.white};
    color: ${({ $dark }) => ($dark ? colors.base.white : colors.base.black)};
  }

  ${({ $hasValue, $dark }) =>
    $hasValue &&
    css`
      border: 1.5px solid ${colors.base.white};
      color: ${$dark ? colors.base.white : colors.base.black};
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${({ $dark }) => ($dark ? "#18181B" : colors.neutral[400])};
  }

  &[type="file"] {
    border: none;
    background: transparent;
    font-size: ${textSizes.body.secondary}px;
    font-weight: 500;
  }
`;
