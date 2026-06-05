import styled from "styled-components";

export const DownloadContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  z-index: 150;
  display: flex;
  flex-direction: column;
  padding: 30px 24px;
  box-sizing: border-box;
  gap: 20px;
  overflow-y: auto;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const DownloadHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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

export const InvoiceCard = styled.div`
  width: 100%;
  background-color: rgba(18, 18, 18, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ResortRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ResortLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ResortLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url("https://images.pexels.com/photos/13350776/pexels-photo-13350776.jpeg");
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const InvoiceIdBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  gap: 4px;
`;

export const StayPanel = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  padding: 14px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StayColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  &.right {
    align-items: flex-end;
  }
`;

export const ItemizedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const ChargesDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  margin: 4px 0;
`;

export const ChargeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-top: 8px;
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
