"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Drawer } from "vaul";
import Text from "@/components/styles/text/Text";
import { colors } from "@/components/styles/colors";
import { DrawerOverlay, DrawerContent } from "./Controls.styled";

import { StyledButton } from "@/components/styles/button/Button.Styled";

const WaveHeader = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  overflow: hidden;
  margin-bottom: 28px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const StarRow = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 36px;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${colors.yellow[200]};
  padding: 4px;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [rating, setRating] = useState(4); // Default 4 stars filled, 1 outline as pictured

  useEffect(() => {
    if (isOpen) {
      setRating(4); // Reset on open
    }
  }, [isOpen]);

  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Portal>
        <DrawerOverlay />
        <DrawerContent style={{ padding: 0, overflow: "hidden", minHeight: "480px" }}>
          {/* Layered Wavy SVG Header */}
          <WaveHeader>
            <svg width="100%" height="100%" viewBox="0 0 440 119" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <g clipPath="url(#clip0_4_14429)">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 105.6L17.6352 107.8C37.4748 110 72.7452 114.4 110.22 101.2C147.695 88 182.965 57.2 220.44 44C257.915 30.8 293.185 35.2 330.66 50.6C368.135 66 403.405 92.4 423.245 105.6L440.88 118.8V0H423.245C403.405 0 368.135 0 330.66 0C293.185 0 257.915 0 220.44 0C182.965 0 147.695 0 110.22 0C72.7452 0 37.4748 0 17.6352 0H0V105.6Z" fill="#2196F3" fillOpacity="0.5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M440.879 105.059L425.448 90.4671C412.222 75.8756 381.36 46.6927 352.703 46.6927C324.046 46.6927 293.184 75.8756 264.527 72.9573C235.87 70.039 205.008 35.0195 176.351 40.8561C147.694 46.6927 116.832 93.3854 88.1749 105.059C59.5177 116.732 28.6561 93.3854 15.4297 81.7122L-0.00109863 70.039V0H15.4297C28.6561 0 59.5177 0 88.1749 0C116.832 0 147.694 0 176.351 0C205.008 0 235.87 0 264.527 0C293.184 0 324.046 0 352.703 0C381.36 0 412.222 0 425.448 0H440.879V105.059Z" fill="#2196F3" fillOpacity="0.5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 54.12L17.6352 60.1333C37.4748 66.1467 72.7452 78.1733 110.22 69.1533C147.695 60.1333 182.965 30.0667 220.44 42.0933C257.915 54.12 293.185 108.24 330.66 108.24C368.135 108.24 403.405 54.12 423.245 27.06L440.88 0H423.245C403.405 0 368.135 0 330.66 0C293.185 0 257.915 0 220.44 0C182.965 0 147.695 0 110.22 0C72.7452 0 37.4748 0 17.6352 0H0V54.12Z" fill="#2196F3" fillOpacity="0.5"/>
              </g>
              <defs>
                <clipPath id="clip0_4_14429">
                  <rect width="440" height="118.8" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </WaveHeader>

          <ContentWrapper>
            <Text variant="pageTitle" weight={500} color="#FFFFFF" align="center" style={{ letterSpacing: "-0.5px", marginBottom: "10px", fontSize: "30px" }}>
              Thanks!
            </Text>
            <Text variant="bodyPrimary" weight={500} opacity={40} align="center" lineHeight="1.45" style={{ maxWidth: "260px", marginBottom: "28px" }}>
              we will work harder to make you more satisfied.
            </Text>

            {/* Interactive Stars */}
            <StarRow>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarButton key={star} onClick={() => setRating(star)} aria-label={`Rate ${star} stars`}>
                  {star <= rating ? <FaStar size={42} /> : <FaRegStar size={32} />}
                </StarButton>
              ))}
            </StarRow>

            <StyledButton
              bgColor="#1E90FF"
              textColor="#FFFFFF"
              width="82%"
              height="54px"
              radius="27px"
              $textSize={18}
              style={{ fontWeight: 500, marginBottom: "24px", boxShadow: "0 4px 14px rgba(30, 144, 255, 0.35)" }}
              onClick={() => {
                alert(`Thank you for rating us ${rating} stars! Redirecting to Google Play Store...`);
                onClose(false);
              }}
            >
              Rate on Google Play
            </StyledButton>
                             
            <button
              onClick={() => onClose(false)}
              style={{ background: "none", border: "none", cursor: "pointer", outline: "none", marginBottom: "20px" }}
            >
              <Text variant="sectionTitle" weight={500} opacity={35} align="center">
                No, Thanks!
              </Text>
            </button>
          </ContentWrapper>
        </DrawerContent>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
