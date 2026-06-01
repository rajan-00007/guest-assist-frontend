import styled, { css } from "styled-components";
import { colors } from "@/components/styles/colors";
import { textSizes } from "@/components/styles/typography";

/* Variants */
export const variants = {
  pageTitle: { tag: "h1", size: textSizes.heading.pageTitle },
  sectionTitle: { tag: "h2", size: textSizes.heading.sectionTitle },
  subSectionTitle: { tag: "h3", size: textSizes.heading.subSectionTitle },
  bodyPrimary: { tag: "p", size: textSizes.body.primary },
  bodySecondary: { tag: "p", size: textSizes.body.secondary },
  button: { tag: "span", size: textSizes.ui.primaryButton },
  label: { tag: "label", size: textSizes.ui.formLabel },
  helper: { tag: "span", size: textSizes.ui.helperText },
  caption: { tag: "span", size: textSizes.ui.caption },
} as const;

/* Base Styles */
interface BaseStyleProps {
  color?: string;
  weight?: number | string;
  align?: string;
  lineHeight?: string;
}

const baseStyle = css<BaseStyleProps>`
  color: ${({ color }) => color ?? colors.base.white};
  font-weight: ${({ weight }) => weight ?? 400};
  text-align: ${({ align }) => align ?? "left"};
  line-height: ${({ lineHeight }) => lineHeight ?? "1.5"};
`;

/* Styled Component  */
export interface StyledTextProps extends BaseStyleProps {
  size: string | number;
}

export const StyledText = styled.span.withConfig({
  shouldForwardProp: (prop) => !['lineHeight', 'weight', 'align', 'size'].includes(prop as string),
}) <StyledTextProps>`
  ${baseStyle};
  font-size: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
`;

// Define and export TextProps to be used by the component
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof variants;
  children: React.ReactNode;
  color?: string;
  weight?: number | string;
  align?: "left" | "center" | "right";
  lineHeight?: string;
  as?: React.ElementType;
}
