import styled from "styled-components";

export const SplitContainer = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  padding: 30px 24px;
  box-sizing: border-box;
  background-color: #000000;
`;

export const SplitHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 100%;
`;

export const GuestRow = styled.div`
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

export const GuestInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StatusText = styled.span<{ $status: "Paid" | "Pending" }>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $status }) => ($status === "Paid" ? "#22c55e" : "#f97316")};
`;
