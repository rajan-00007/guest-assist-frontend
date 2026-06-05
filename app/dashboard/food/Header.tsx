"use client";

import React from "react";
import { Search, Mic, ChevronLeft } from "lucide-react";
import Text from "@/components/styles/text/Text";
import {
  HeaderContainer,
  TopRow,
  LeftBlock,
  ResortAvatar,
  TextStack,
  VegModeWrapper,
  SwitchTrack,
  SwitchKnob,
  SearchBarRow,
  BackButton,
  SearchInputWrapper,
  IconLeftWrapper,
  IconRightWrapper,
  CustomSearchInput,
} from "./Header.styled";

interface HeaderProps {
  vegMode: boolean;
  onVegModeChange: (val: boolean) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export default function Header({
  vegMode,
  onVegModeChange,
  searchQuery,
  onSearchChange,
  showBackButton = false,
  onBackClick,
}: HeaderProps) {
  return (
    <HeaderContainer>
      <TopRow>
        <LeftBlock>
          <ResortAvatar />
          <TextStack>
            <Text variant="sectionTitle" weight={500} style={{ fontStyle: "italic", letterSpacing: "0.2px" }}>
              TheGrandHorizon
            </Text>
            <Text variant="bodySecondary" weight={400} opacity={80} color="rgba(255, 255, 255, 0.7)">
              Executive Suite 402
            </Text>
          </TextStack>
        </LeftBlock>
        <VegModeWrapper>
          <Text variant="caption" weight={500}>
            Veg Mode
          </Text>
          <SwitchTrack $checked={vegMode} onClick={() => onVegModeChange(!vegMode)} aria-label="Toggle Veg Mode">
            <SwitchKnob $checked={vegMode} />
          </SwitchTrack>
        </VegModeWrapper>
      </TopRow>

      <SearchBarRow>
        {showBackButton && (
          <BackButton onClick={onBackClick} aria-label="Go back">
            <ChevronLeft size={20} />
          </BackButton>
        )}
        <SearchInputWrapper>
          <IconLeftWrapper>
            <Search size={18} />
          </IconLeftWrapper>
          <CustomSearchInput
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            $hasValue={!!searchQuery}
          />
          <IconRightWrapper onClick={() => alert("Voice Search coming soon!")}>
            <Mic size={18} />
          </IconRightWrapper>
        </SearchInputWrapper>
      </SearchBarRow>
    </HeaderContainer>
  );
}
