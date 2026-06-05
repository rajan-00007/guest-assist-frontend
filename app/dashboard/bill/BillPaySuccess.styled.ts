import styled from "styled-components";

export const SuccessContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  z-index: 150;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px;
  box-sizing: border-box;
  overflow-y: auto;
  gap: 24px;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const IllustrationContainer = styled.div`
  width: 240px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const DetailCard = styled.div`
  width: 100%;
  background-color: rgba(18, 18, 18, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DetailDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  margin: 2px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-top: auto; /* Push buttons to the bottom of layout if height permits */
  padding-top: 16px;
`;

export const TextButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px;
  transition: opacity 0.2s ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const SuccessHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 8px;
`;

export const BackCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }
`;
