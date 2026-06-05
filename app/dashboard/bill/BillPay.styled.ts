import styled from "styled-components";

export const BillContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  box-sizing: border-box;
  padding-top: 80px;
  padding-bottom: 110px; /* Prevent bottom nav from covering content */
`;

export const DottedCard = styled.div`
  width: 100%;
  margin-top: 20px;
  background-image: url("/assets/billbg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px 24px 20px;
  box-sizing: border-box;
`;

export const AmountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

export const ActionsCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: 126px;
  background: rgba(18, 18, 18, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 10px;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);

  @media (max-width: 375px) {
    height: 110px;
    padding: 12px 6px;
  }
`;

export const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 375px) {
    gap: 8px;
  }
  
  &:hover {
    & > div {
      background-color: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }
  }
`;

export const ActionIconWrapper = styled.div<{ $active?: boolean }>`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.06);
  border: ${({ $active }) =>
    $active ? "2px solid #ffffff" : "1.5px solid rgba(255, 255, 255, 0.08)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: all 0.2s ease-in-out;

  @media (max-width: 375px) {
    width: 44px;
    height: 44px;
  }
`;

export const ActivityContainer = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  box-sizing: border-box;
  background-color: #000000;
`;

export const ActivityTitleRow = styled.div`
  margin-bottom: 12px;
`;

export const ActivityRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }
`;

export const ActivityLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ActivityIconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(24, 30, 48, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
`;

export const ActivityTextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

