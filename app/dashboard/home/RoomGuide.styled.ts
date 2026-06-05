import styled from "styled-components";

export const HorizontalScrollArea = styled.section`
  padding: 16px 20px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 5;
  margin-top: 14px;
  padding-bottom: 0px; /* Padding is handled by the parent HomeContainer */
`;

export const ScrollTitle = styled.h2`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #94A3B8;
  letter-spacing: 1.2px;
  margin: 0;
  text-transform: uppercase;
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  width: 100%;
  scroll-snap-type: x mandatory;
  box-sizing: border-box;
  padding-bottom: 8px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ImageCard = styled.div`
  flex: 0 0 187px;
  width: 187px;
  height: 155px;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transform: rotate(0deg);

  img {
    width: 187px;
    height: 128px;
    border-radius: 9px;
    object-fit: cover;
    opacity: 1;
    transform: rotate(0deg);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;
