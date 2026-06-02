"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsLuggage } from "react-icons/bs";
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

const CounterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  margin-top: 8px;
  margin-bottom: 32px;
  width: 100%;
`;

const CounterButton = styled.button`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.18);
  }

  &:active {
    transform: scale(0.92);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const CountText = styled.span`
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 34px;
  font-weight: 700;
  color: #FFFFFF;
  min-width: 48px;
  text-align: center;
  user-select: none;
`;

interface LuggageModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export default function LuggageModal({ isOpen, onClose }: LuggageModalProps) {
  const [bagCount, setBagCount] = useState(2);

  useEffect(() => {
    if (isOpen) {
      setBagCount(2); // Reset count when opened
    }
  }, [isOpen]);

  const handleIncrement = () => {
    setBagCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setBagCount((prev) => (prev > 1 ? prev - 1 : 1));
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
            <BsLuggage size={32} />
          </DrawerIconContainer>

          <DrawerTextWrapper>
            <Text variant="hero" weight={600} color="#FFFFFF" align="center">
              Luggage Assistance
            </Text>
            <Text variant="bodyPrimary" weight={400} color="#8E8E93" align="center" lineHeight="1.4">
              How many bags would you like us to assist with?
            </Text>
          </DrawerTextWrapper>

          <CounterRow>
            <CounterButton onClick={handleDecrement} aria-label="Decrease bag count">
              <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </CounterButton>
            
            <CountText>{formatNumber(bagCount)}</CountText>
            
            <CounterButton onClick={handleIncrement} aria-label="Increase bag count">
              <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </CounterButton>
          </CounterRow>

          <DrawerButtonWrapper>
            <StyledButton
              bgColor="#FFFFFF"
              textColor="#000000"
              width="100%"
              height="54px"
              radius="14px"
              $textSize={16}
              onClick={() => {
                alert(`Porter requested for ${bagCount} bags!`);
                onClose(false);
              }}
            >
              Request Porter
            </StyledButton>
          </DrawerButtonWrapper>
        </DrawerContent>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
