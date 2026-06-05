"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Text from "@/components/styles/text/Text";
import { useRouter } from "next/navigation";
import {
  PhoneLayout,
  SlidesContainer,
  Slide,
  GradientOverlay,
  ContentWrapper,
  ItalicLabel,
  TitleContainer,
  DescriptionContainer,
  BottomRow,
  CircleArrowButton
} from "./ManageStory.styled";

const IMAGES = [
  "https://images.pexels.com/photos/13350776/pexels-photo-13350776.jpeg",
  "https://images.pexels.com/photos/32334284/pexels-photo-32334284.jpeg",
  "https://images.pexels.com/photos/32457877/pexels-photo-32457877.jpeg"
];

const SLIDE_DURATION = 4500; // 4.5 seconds

export default function ManageStory() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the slideshow timer
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    }, SLIDE_DURATION);
  };

  // Function to clear/stop the slideshow timer
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Start rotation on mount, clean up on unmount
  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  // Handle manual next button click (resets timer + advances slide)
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    startTimer(); // Restart timer to prevent immediate auto-slides
  };

  return (
    <PhoneLayout>
      {/* Background image slideshow with cross-fade */}
      <SlidesContainer>
        {IMAGES.map((url, idx) => (
          <Slide key={idx} $active={idx === currentSlide} $imageUrl={url} />
        ))}
      </SlidesContainer>

      {/* Dark gradient overlay for typography readability */}
      <GradientOverlay />

      {/* Overlaid onboarding text content */}
      <ContentWrapper>
        <ItalicLabel>The GrandHorizon</ItalicLabel>

        <TitleContainer>
          <Text variant="hero" weight={700} color="#FFFFFF">
            Manage Your Stay
          </Text>
          <Text variant="hero" weight={700} color="#FFFFFF">
            Effortlessly
          </Text>
        </TitleContainer>

        <DescriptionContainer>
          <Text variant="bodySecondary" color="rgba(255, 255, 255, 0.8)" lineHeight="1.5">
            Request anything and follow its progress live from housekeeping to dining and more.
          </Text>
        </DescriptionContainer>

        <BottomRow>
          <CircleArrowButton onClick={() => router.push("/dashboard")} aria-label="Go to Dashboard">
            <ChevronRight size={26} strokeWidth={1.8} />
          </CircleArrowButton>
        </BottomRow>
      </ContentWrapper>
    </PhoneLayout>
  );
}
