import styled from "styled-components";
import { colors } from "@/components/styles/colors";

export const DemoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding: 24px 20px 120px 20px; /* Padding bottom accounts for bottom navbar */
  box-sizing: border-box;
  color: #ffffff;
  position: relative;
  z-index: 1;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 10px;
  margin-bottom: 24px;
`;

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const HeaderTitle = styled.h1`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
`;

export const PlayerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1.77; /* 16:9 aspect ratio */
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #0d0d0d;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const VideoTitle = styled.h2`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const VideoDescription = styled.p`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #94a3b8;
  margin: 0;
  line-height: 1.5;
`;

export const SectionLabel = styled.h3`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 12px 0;
`;

export const PlaylistSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface VideoCardProps {
  $active: boolean;
}

export const VideoCard = styled.div<VideoCardProps>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px;
  border-radius: 14px;
  background: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)"};
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.05)"};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.12);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 90px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1a1a1a;
  position: relative;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  transition: all 0.2s ease;

  ${VideoCard}:hover & {
    background: rgba(0, 0, 0, 0.2);
    color: ${colors.primary[1]};
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const CardTitle = styled.span`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
`;

export const CardSubtitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardDuration = styled.span`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
`;

export const NowPlayingBadge = styled.span`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: #60a5fa;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
