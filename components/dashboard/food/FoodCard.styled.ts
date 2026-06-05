import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  margin-top: 80px;
  height:222px;
  padding: 55px 12px 24px 12px;
  border-radius: 24px;
  background: linear-gradient(180deg, #A9411D 0%, #78270B 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  width: 100%;
`;

export const PlateWrapper = styled.div`
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 6px solid #FFFFFF;
  background-color: #121212;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VegIndicatorRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 100%;
`;

export const VegSquare = styled.div`
  width: 13px;
  height: 13px;
  border: 1.5px solid #22C55E;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.5px;
  flex-shrink: 0;
  box-sizing: border-box;
`;

export const VegDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #22C55E;
`;

export const TitleText = styled.h3`
  font-weight: 700;
  color: #FFFFFF;
  font-size: 15px;
  line-height: 1.2;
  margin: 0;
`;

export const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 8px 0;
  width: 100%;
  flex-wrap: wrap;
`;

export const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 600;
  color: #FFFFFF;
`;

export const GlutenFreeBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #07571B;
  color: #FFFFFF;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 9.5px;
  font-weight: 600;
`;

export const DescriptionText = styled.p`
  font-size: 11px;
  color: #F87171;
  opacity: 0.95;
  margin: 0 0 14px 0;
  line-height: 1.3;
  max-width: 140px;
  height: 28px; /* Fixed height for 2 lines to align cards perfectly */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriceTag = styled.div`
  background: rgba(0, 0, 0, 0.25);
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
  border-radius: 20px;
  padding: 4px 14px;
  display: inline-block;
`;

export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #F4C454;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  z-index: 10;

  &:hover {
    transform: translateX(-50%) scale(1.05);
    background-color: #F6CD66;
  }

  &:active {
    transform: translateX(-50%) scale(0.95);
  }
`;

export const QuantityControl = styled.div`
  width: 96px;
  height: 36px;
  border-radius: 18px;
  background-color: #F4C454;
  color: #520B24;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  z-index: 10;
  box-sizing: border-box;
`;

export const QtyBtn = styled.button`
  background: none;
  border: none;
  color: #520B24;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const QtyVal = styled.span`
  font-size: 14px;
  font-weight: 700;
  user-select: none;
`;
