import styled from "styled-components";

export const BannersContainer = styled.section`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  width: 100%;
  margin-top:8px;
  padding: 8px 20px 16px 16px;
  box-sizing: border-box;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const CardWrapper = styled.div<{ $gradient: string }>`
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ $gradient }) => $gradient};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CardLeftContent = styled.div`
  display: flex;
  flex-direction: column;
 gap:10px;
  padding: 18px 20px;
  box-sizing: border-box;
  width: 70%;
  position: relative;
  z-index: 2;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: px;
`;

export const MenuPillButton = styled.button<{ $textColor: string }>`
  background-color: #FFFFFF;
  color: ${({ $textColor }) => $textColor};
  border: none;
  border-radius: 20px;
  padding: 2px 16px;
  height:24px;
  font-weight: 500;
  font-size: 12px;
  align-self: flex-start;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  &:hover {
    opacity: 0.95;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CardImageWrapper = styled.div`
  position: absolute;
  right: -40px;
  top: 50px;
  bottom: 0;
  width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  pointer-events: none;
`;

export const CardImage = styled.img`
  width: 260px;
  height: 260px;
  object-fit: contain;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.25));
  transform: rotate(-5deg);
`;

export const BackgroundBlob1 = styled.div`
  position: absolute;
  left: -20px;
  top: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  z-index: 0;
  pointer-events: none;
`;

export const BackgroundBlob2 = styled.div`
  position: absolute;
  right: -30px;
  bottom: -30px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  z-index: 0;
  pointer-events: none;
`;
