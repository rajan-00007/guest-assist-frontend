import styled from "styled-components";

export const IssueContainer = styled.div`
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
  overflow-y: auto;
  gap: 20px;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const IssueHeader = styled.div`
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

export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
`;

export const CategoryCard = styled.div<{ $active?: boolean }>`
  height: 52px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.03);
  border: ${({ $active }) =>
    $active ? "1.5px solid #ffffff" : "1.2px solid rgba(255, 255, 255, 0.08)"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  padding: 0 12px;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    border-color: ${({ $active }) => ($active ? "#ffffff" : "rgba(255, 255, 255, 0.2)")};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1.2px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #ffffff;
  padding: 14px 16px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 14px;
  resize: none;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: rgba(255, 255, 255, 0.4);
  }

  &::placeholder {
    color: #71717a;
    opacity: 0.6;
  }
`;

export const UploadBox = styled.label`
  width: 100%;
  height: 52px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1.2px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  font-weight: 500;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  input {
    display: none;
  }
`;

export const PreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 1.2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.02);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-top: auto;
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
