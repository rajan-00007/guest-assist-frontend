import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
`;

export const FilterScrollRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  align-items: center;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const FilterOptionsBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.1s, background-color 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.03);
    background-color: #F4F4F5;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const FilterPill = styled.button<{ $active: boolean }>`
  height: 38px;
  padding: 0 20px;
  border-radius: 19px;
  border: ${({ $active }) => ($active ? "1px solid #DFDFDF" : "1.5px solid rgba(255, 255, 255, 0.35)")};
  background: ${({ $active }) => ($active ? "linear-gradient(315deg, #181516 0%, #424242 100%)" : "transparent")};
  color: #FFFFFF;
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;

  &:hover {
    background: ${({ $active }) => ($active ? "linear-gradient(315deg, #181516 0%, #424242 100%)" : "rgba(255, 255, 255, 0.1)")};
    border-color: ${({ $active }) => ($active ? "#DFDFDF" : "#FFFFFF")};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ItemsSection = styled.section`
  display: flex;
  flex-direction: column;
margin-bottom:80px;
  padding: 8px 20px 60px 20px;
  box-sizing: border-box;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const SectionTitleText = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.1px;
`;

export const FloatingCartBtn = styled.button`
  position: fixed;
  bottom: 96px; 

  right: 20px;
  background-color: #0052F7;
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  gap: 20px;
  cursor: pointer;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 82, 247, 0.3);
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background-color: #0046D5;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const FloatingCartTextCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  line-height: 1.1;
`;

export const FloatingCartArrowBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  flex-shrink: 0;
`;

