import styled from "styled-components";
import { Drawer } from "vaul";
import { Progress } from "@/components/ui/progress";

export const TrackOverlay = styled(Drawer.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 1000;
`;

export const TrackContent = styled(Drawer.Content)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 440px;
  margin: 0 auto;
  z-index: 1001;
  background-color: #000000;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: none;
  padding: 8px 24px 32px 24px;
  outline: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-sizing: border-box;
`;

export const TrackHandle = styled.div`
  width: 88px;
  height: 8px;
  background-color: #262626;
  border-radius: 9999px;
  margin: 8px auto 20px auto;
  cursor: grab;
`;

export const DrawerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
  text-align: center;
`;

export const RequestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const RequestCard = styled.div`
  width: 100%;
  background-color: #0A0A0A;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px ;
  padding: 16px 18px;
  /* height:92px; */
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
`;

export const AvatarImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const StyledProgress = styled(Progress)`
  height: 5px;
  background-color: #262626 !important;
  border-radius: 9999px;
  overflow: hidden;

  & [data-slot="progress-indicator"] {
    background-color: #0052F7 !important;
  }
`;
