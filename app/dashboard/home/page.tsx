"use client";

import React, { useState, useEffect, useRef } from "react";
import { GiWashingMachine } from "react-icons/gi";
import Text from "@/components/styles/text/Text";
import Controls from "./Controls";
import {
  HomeContainer,
  SlideshowWrapper,
  SlideImage,
  HeroPromoArea,
  HeroActionsRow,
  JoinButton,
  DashesContainer,
  Dash,
  StatusTrackCard,
  CardLeftBlock,
  CardIconWrapper,
  CardTextStack,
  TrackButton
} from "./Home.styled";

const BACKGROUNDS = [
  "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg",
  "https://images.pexels.com/photos/7337620/pexels-photo-7337620.jpeg",
  "https://images.pexels.com/photos/12675261/pexels-photo-12675261.jpeg"
];

const SLIDE_TITLES = [
  "Golden Hour Jazz",
  "Ocean Sunset Yoga",
  "Candlelight Dinner"
];

const SLIDE_DURATION = 4500; // 4.5 seconds

export default function DashboardHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BACKGROUNDS.length);
    }, SLIDE_DURATION);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handleDashClick = (idx: number) => {
    setCurrentSlide(idx);
    startTimer();
  };

  return (
    <HomeContainer>
      {/* Background Slideshow */}
      <SlideshowWrapper>
        {BACKGROUNDS.map((url, idx) => (
          <SlideImage key={idx} $active={idx === currentSlide} $imageUrl={url} />
        ))}
      </SlideshowWrapper>

      {/* Hero Promo Content Overlay */}
      <HeroPromoArea>
        <Text variant="pageTitle" weight={500} color="#FFFFFF" style={{ letterSpacing: "-0.5px" }}>
          {SLIDE_TITLES[currentSlide]}
        </Text>
        
        <HeroActionsRow>
          <JoinButton onClick={() => alert(`Enrolled in: ${SLIDE_TITLES[currentSlide]}`)}>
            Join Class
          </JoinButton>
          
          <DashesContainer>
            {BACKGROUNDS.map((_, idx) => (
              <Dash
                key={idx}
                $active={idx === currentSlide}
                onClick={() => handleDashClick(idx)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </DashesContainer>
        </HeroActionsRow>
      </HeroPromoArea>

      {/* Status Cleaning/Tracking Card */}
      <StatusTrackCard >
        <CardLeftBlock>
           
            <GiWashingMachine size={40} />
          
          <CardTextStack>
            <Text variant="bodySecondary" weight={700} color="#000000">
              Room clea ning
            </Text>
            <Text variant="caption" color="rgba(0, 0, 0, 0.6)" weight={500} style={{ fontSize: "11px" }}>
              Scheduled • 2 PM
            </Text>
          </CardTextStack>
        </CardLeftBlock>
        <TrackButton onClick={() => alert("Cleaning status: Housekeeper is preparing supply cart.")}>
          Track
        </TrackButton>
      </StatusTrackCard>

      {/* Grid Controls  Area */}
      <Controls />
    </HomeContainer>
  );
}
  