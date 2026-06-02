import styled from "styled-components";
import { colors } from "@/components/styles/colors";

export const ControlsArea = styled.section`
  padding: 30px 20px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 5;
`;

export const ControlsTitle = styled.h2`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #94A3B8;
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
  border-radius: 24px;
  padding: 20px 16px;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 12px 40px rgba(0, 0, 0, 0.5);
`;

export const GridCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

interface ControlCardProps {
  $active: boolean;
}

export const ControlCard = styled.button<ControlCardProps>`
  width: 74px;
  height: 74px;
  aspect-ratio: 1;
  border-radius: 18px;
  background-color: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.35)" : "rgba(255, 255, 255, 0.2)")};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.15)")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ $active }) =>
    $active
      ? "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.4), 0 8px 24px rgba(255, 255, 255, 0.15)"
      : "inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)"};

  svg {
    color: #FFFFFF;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    background-color: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.3)")};
    border-color: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.25)")};
    transform: translateY(-1.5px);
  }

  &:active {
    transform: translateY(0.5px);
  }
`;

export const ControlCardLabel = styled.div`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #94A3B8;
  text-align: center;
  line-height: 1.35;
  max-width: 76px;
`;
