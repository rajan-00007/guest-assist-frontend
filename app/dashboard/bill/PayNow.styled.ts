import styled from "styled-components";

export const PaymentContainer = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  padding: 30px 24px 110px 24px;
  box-sizing: border-box;
  background-color: #000000;
  gap: 16px;
`;

export const MethodHeader = styled.div`
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

export const PaymentCard = styled.div`
  width: 100%;
  height: 72px;
  background-color: rgba(18, 18, 18, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoBadge = styled.div`
  width: 58px;
  height: 32px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1.2px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
`;
