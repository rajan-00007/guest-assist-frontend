"use client";

import React from "react";
import {
  HorizontalScrollArea,
  ScrollTitle,
  ScrollContainer,
  ImageCard
} from "./RoomGuide.styled";

export default function RoomGuide() {
  return (
    <HorizontalScrollArea>
      <ScrollTitle>Daily Care</ScrollTitle>
      <ScrollContainer>
        <ImageCard>
          <img src="/assets/worker.png" alt="Service Worker 1" />
        </ImageCard>
        <ImageCard>
          <img src="/assets/worker.png" alt="Service Worker 2" />
        </ImageCard>
        <ImageCard>
          <img src="/assets/worker.png" alt="Service Worker 3" />
        </ImageCard>
      </ScrollContainer>
    </HorizontalScrollArea>
  );
}
