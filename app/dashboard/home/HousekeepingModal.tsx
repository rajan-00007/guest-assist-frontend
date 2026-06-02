"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LiaBroomSolid } from "react-icons/lia";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Drawer } from "vaul";
import Text from "@/components/styles/text/Text";
import { StyledButton } from "@/components/styles/button/Button.Styled";
import {
  DrawerOverlay,
  DrawerContent,
  DrawerHandle,
  DrawerIconContainer,
  DrawerTextWrapper,
  DrawerButtonWrapper
} from "./Controls.styled";

const TimePickerCard = styled.div`
  width: 100%;
  background-color: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  margin-top: 8px;
  margin-bottom: 32px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

const ValueText = styled.span`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #FFFFFF;
  min-width: 36px;
  text-align: center;
  user-select: none;
`;

interface HousekeepingModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export default function HousekeepingModal({ isOpen, onClose }: HousekeepingModalProps) {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  useEffect(() => {
    if (isOpen) {
      setHour(12);
      setMinute(0);
      setPeriod("AM");
    }
  }, [isOpen]);

  const incrementHour = () => {
    setHour((prev) => (prev === 12 ? 1 : prev + 1));
  };

  const decrementHour = () => {
    setHour((prev) => (prev === 1 ? 12 : prev - 1));
  };

  const incrementMinute = () => {
    setMinute((prev) => (prev === 59 ? 0 : prev + 1));
  };

  const decrementMinute = () => {
    setMinute((prev) => (prev === 0 ? 59 : prev - 1));
  };

  const togglePeriod = () => {
    setPeriod((prev) => (prev === "AM" ? "PM" : "AM"));
  };

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Portal>
        <DrawerOverlay />
        <DrawerContent style={{ minHeight: "530px" }}>
          <DrawerHandle />
          
          <DrawerIconContainer $active={false}>
            <LiaBroomSolid size={32} />
          </DrawerIconContainer>

          <DrawerTextWrapper>
            <Text variant="hero" weight={600} color="#FFFFFF" align="center">
              Housekeeping
            </Text>
            <Text variant="bodyPrimary" weight={400} opacity={50} align="center" lineHeight="1.4">
              Request room cleaning at your preferred time.
            </Text>
          </DrawerTextWrapper>

          <TimePickerCard>
            {/* Hour Picker */}
            <Column>
              <ArrowButton onClick={incrementHour} aria-label="Increase hour">
                <ChevronUp size={18} strokeWidth={2.5} />
              </ArrowButton>
              <ValueText>{formatNumber(hour)}</ValueText>
              <ArrowButton onClick={decrementHour} aria-label="Decrease hour">
                <ChevronDown size={18} strokeWidth={2.5} />
              </ArrowButton>
            </Column>

            {/* Minute Picker */}
            <Column>
              <ArrowButton onClick={incrementMinute} aria-label="Increase minute">
                <ChevronUp size={18} strokeWidth={2.5} />
              </ArrowButton>
              <ValueText>{formatNumber(minute)}</ValueText>
              <ArrowButton onClick={decrementMinute} aria-label="Decrease minute">
                <ChevronDown size={18} strokeWidth={2.5} />
              </ArrowButton>
            </Column>

            {/* Period Picker (AM/PM) */}
            <Column>
              <ArrowButton onClick={togglePeriod} aria-label="Toggle AM/PM">
                <ChevronUp size={18} strokeWidth={2.5} />
              </ArrowButton>
              <ValueText>{period}</ValueText>
              <ArrowButton onClick={togglePeriod} aria-label="Toggle AM/PM">
                <ChevronDown size={18} strokeWidth={2.5} />
              </ArrowButton>
            </Column>
          </TimePickerCard>

          <DrawerButtonWrapper>
            <StyledButton
              bgColor="#FFFFFF"
              textColor="#000000"
              width="100%"
              height="54px"
              radius="14px"
              $textSize={16}
              onClick={() => {
                alert(`Housekeeping cleaning request scheduled at ${formatNumber(hour)}:${formatNumber(minute)} ${period}!`);
                onClose(false);
              }}
            >
              Request Housekeeping
            </StyledButton>
          </DrawerButtonWrapper>
        </DrawerContent>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
