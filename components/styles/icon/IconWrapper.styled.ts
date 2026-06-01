import styled, { css } from "styled-components";

interface IconWrapperProps {
  width?: number;
  height?: number;
  bgColor?: string;
  radius?: string;
  border?: string;
  iconColor?: string;
  hoverBgColor?: string;
  hoverIconColor?: string;
  shadow?: string;
  clickable?: boolean;
}

export const IconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'height', 'bgColor', 'radius', 'border', 'iconColor', 'hoverBgColor', 'hoverIconColor', 'shadow', 'clickable'].includes(prop as string),
}) <IconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? `${width}px` : "40px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};

  background-color: ${({ bgColor }) => bgColor || "transparent"};
  border-radius: ${({ radius }) => radius || "8px"};
  border: ${({ border }) => border || "none"};
  box-shadow: ${({ shadow }) => shadow || "none"};

  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};

  transition: all 0.2s ease-in-out;

  /* Apply icon color to SVG inside */
  & svg {
    color: ${({ iconColor }) => iconColor || "inherit"};
    transition: all 0.2s ease-in-out;
  }

  /* Hover styles */
  ${({ hoverBgColor }) =>
    hoverBgColor &&
    css`
      &:hover {
        background-color: ${hoverBgColor};
      }
    `}

  ${({ hoverIconColor }) =>
    hoverIconColor &&
    css`
      &:hover svg {
        color: ${hoverIconColor};
      }
    `}
`;


