"use client";

import React from "react";
import styled from "styled-components";
import { User } from "lucide-react";
import Text from "@/components/styles/text/Text";
import BottomNav from "@/components/dashboard/BottomNav";
import { FaUser } from "react-icons/fa";


export const LayoutContainer = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  @media (max-width: 440px) {
    max-width: 100%;
    height: 100dvh;
    box-shadow: none;
  }
`;

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 0 20px;
  box-sizing: border-box;
  background: transparent;
  pointer-events: none;
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: auto;
`;

export const ResortAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url("https://images.pexels.com/photos/13350776/pexels-photo-13350776.jpeg");
  background-size: cover;
  background-position: center;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
`;

export const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const RightBlock = styled.div`
  pointer-events: auto;
`;

export const UserIconCircle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: scale(1.03);
  }
`;

export const ScrollableContent = styled.main`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  position: relative;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutContainer>
      {/* Global Transparent Header */}
      <HeaderWrapper>
        <LeftBlock>
          <ResortAvatar />
          <TextStack>
            <Text variant="bodyPrimary" weight={600} style={{ fontStyle: "italic", letterSpacing: "0.2px" }}>
              TheGrandHorizon
            </Text>
            <Text variant="caption" weight={400} opacity={80}>
              Executive Suite 402
            </Text>
          </TextStack>
        </LeftBlock>
        <RightBlock>
          <UserIconCircle onClick={() => alert("Profile Options Opened!")} aria-label="Profile Settings">
            <FaUser size={18} fill="white"/>
          </UserIconCircle>
        </RightBlock>
      </HeaderWrapper>

      {/* Main Page Area */}
      <ScrollableContent>{children}</ScrollableContent>

      {/* Global Curved Bottom Navigation */}
      <BottomNav />
    </LayoutContainer>
  );
}
