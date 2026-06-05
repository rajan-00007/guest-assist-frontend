"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Compass, AudioLines } from "lucide-react";
import { BiFoodMenu } from "react-icons/bi";
import { BsReceipt } from "react-icons/bs";
import Text from "@/components/styles/text/Text";
import {
  NavWrapper,
  SvgBackground,
  NavLinkContainer,
  NavLinkItem,
  VoiceButtonContainer,
  VoiceButton
} from "./BottomNav.styled";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  // Helper to check if a route is active
  const isActive = (route: string) => {
    if (route === "/dashboard/home") {
      return pathname === "/dashboard/home" || pathname === "/dashboard";
    }
    return pathname.startsWith(route);
  };

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  // SVG drawing a highly organic, fluid concave cutout centered exactly at x=190
  const CutoutBackground = () => (
    <svg width="100%" height="72" viewBox="0 0 380 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="nav-bg-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
        </linearGradient>
      </defs>
      <path
        d="M30 0H132C140 0 144 4 148 12C154 26 165 34 190 34C215 34 226 26 232 12C236 4 240 0 248 0H350C366.569 0 380 13.4315 380 30V42C380 58.5685 366.569 72 350 72H30C13.4315 72 0 58.5685 0 42V30C0 13.4315 13.4315 0 30 0Z"
        fill="url(#nav-bg-gradient)"
        stroke="rgba(255, 255, 255, 0.16)"
        strokeWidth="1.5"
      />
    </svg>
  );

  return (
    <NavWrapper>
      {/* Concave background glass-pill overlay */}
      <SvgBackground>
        <CutoutBackground />
      </SvgBackground>

      {/* Left side links (Stay, Food) */}
      <NavLinkContainer>
        <NavLinkItem $active={isActive("/dashboard/home")} onClick={() => handleNavigation("/dashboard/home")}>
          <Home size={22} strokeWidth={1.8} />
          <Text variant="caption" weight={500}>Stay</Text>
        </NavLinkItem>
        <NavLinkItem $active={isActive("/dashboard/food")} onClick={() => handleNavigation("/dashboard/food")}>
          <BiFoodMenu size={22} />
          <Text variant="caption" weight={500}>Food</Text>
        </NavLinkItem>
      </NavLinkContainer>

      {/* Floating Center Voice Button */}
      <VoiceButtonContainer>
        <VoiceButton onClick={() => handleNavigation("/dashboard/help-assistant")} aria-label="Activate voice assistant">
          <AudioLines size={26} strokeWidth={2} />
        </VoiceButton>
      </VoiceButtonContainer>

      {/* Right side links (Explore, Bill) */}
      <NavLinkContainer style={{ justifyContent: "space-around" }}>
        <NavLinkItem $active={isActive("/dashboard/explore")} onClick={() => handleNavigation("/dashboard/explore")}>
          <Compass size={22} strokeWidth={1.8} />
          <Text variant="caption" weight={500}>Explore</Text>
        </NavLinkItem>
        <NavLinkItem $active={isActive("/dashboard/bill")} onClick={() => handleNavigation("/dashboard/bill")}>
          <BsReceipt size={22} />
          <Text variant="caption" weight={500}>Bill</Text>
        </NavLinkItem>
      </NavLinkContainer>
    </NavWrapper>
  );
}
