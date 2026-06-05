import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  box-sizing: border-box;
  padding-bottom: 96px; /* Prevent overlap by global bottom navigation */
`;


export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #6B0B30;
  padding: 24px 20px 16px 20px;
  box-sizing: border-box;
  display: flex;
  height:108px;
  align-items: center;
  gap: 16px;
`;

export const BackButton = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const DeliveryInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #000000;
  box-sizing: border-box;
`;

export const DeliveryLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ClockIconCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #9F3C1A;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  flex-shrink: 0;
`;

export const ItemsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  box-sizing: border-box;
`;

export const CartItemRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 20px;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ItemImage = styled.img`
  width: 87px;
  height: 80px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ItemMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const ItemTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDescriptionWrapper = styled.div`
  max-width: 150px;
  width: 100%;
  height: 26px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin: 0;
`;

export const ItemBadgesRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 8px;
  margin-top: 4px;
`;

export const StarBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  background-color: #A9411D;
  color: #FFFFFF;
  border-radius: 12px;
  padding: 1.5px 8px;
  font-size: 9px;
  font-weight: 400;
`;

export const GFBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #07571B;
  color: #FFFFFF;
  border-radius: 12px;
  padding: 1.5px 8px;
  font-size: 9px;
  font-weight: 400;
`;

export const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 80px;
  flex-shrink: 0;
`;

export const ItemPriceText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
`;

export const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  margin-top: auto;

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export const QtySquareBtn = styled.button`
  background-color: #27272A;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  padding: 0;
  transition: background-color 0.2s, transform 0.1s;
  flex-shrink: 0;

  @media (max-width: 375px) {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background-color: #3F3F46;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const QtyValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  min-width: 18px;
  text-align: center;
  user-select: none;
`;

export const QuickActionsRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;

  @media (max-width: 375px) {
    gap: 8px;

    button {
      padding: 0 8px !important;
      font-size: 12px !important;
    }
  }
`;

export const PaymentSummaryBlock = styled.div`
  background-color: #000000;
  border-top: 8px solid #121212;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
`;

export const SummaryHeader = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 4px 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

export const SummaryDivider = styled.div`
  border-top: 1.5px dashed rgba(255, 255, 255, 0.15);
  margin: 4px 0;
  width: 100%;
`;

export const TotalValueText = styled.span`
  color: #22C55E;
  font-weight: 700;
  font-size: 16px;
`;

export const FooterPaymentBar = styled.div`
  padding: 16px 20px;
  background-color: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  width: 100%;
`;

export const PayBtnContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const PayBtnLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
`;

export const PayBtnRight = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
`;
