"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoPlay } from "react-icons/io5";
import {
  DemoContainer,
  Header,
  BackButton,
  HeaderTitle,
  PlayerSection,
  PlayerWrapper,
  VideoMeta,
  VideoTitle,
  VideoDescription,
  SectionLabel,
  PlaylistSection,
  PlaylistContainer,
  VideoCard,
  ThumbnailWrapper,
  ThumbnailOverlay,
  CardDetails,
  CardTitle,
  CardSubtitleRow,
  CardDuration,
  NowPlayingBadge
} from "./DemoVideos.styled";

interface VideoItem {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  duration: string;
  description: string;
}

const PLAYLIST_DATA: VideoItem[] = [
  {
    id: "ac-control",
    title: "AC Control Demo",
    url: "https://www.pexels.com/download/video/6823841/",
    thumbnail: "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg",
    duration: "1:32",
    description: "Learn how to configure your room's smart thermostat panel. Adjust the target temperature, change the cooling fan speeds, and toggle between heating and cooling modes."
  },
  {
    id: "smart-tv",
    title: "Smart TV Chromecast Pairing",
    url: "https://www.pexels.com/download/video/3195398/",
    thumbnail: "https://images.pexels.com/photos/12675261/pexels-photo-12675261.jpeg",
    duration: "1:15",
    description: "Learn how to cast your favorite streaming apps (Netflix, YouTube, Spotify) directly from your personal device to the in-room Smart TV screen."
  },
  {
    id: "lighting-dnd",
    title: "Lighting & DND Settings",
    url: "https://www.pexels.com/download/video/3790532/",
    thumbnail: "https://images.pexels.com/photos/7337620/pexels-photo-7337620.jpeg",
    duration: "2:04",
    description: "A quick walkthrough on adjusting the lighting scenes in your room, toggling ambient bedside modes, and setting up the physical outside Do Not Disturb indicator."
  },
  {
    id: "housekeeping-app",
    title: "Housekeeping & Services App Guide",
    url: "https://www.pexels.com/download/video/4458315/",
    thumbnail: "https://images.pexels.com/photos/8436622/pexels-photo-8436622.jpeg",
    duration: "1:50",
    description: "Get familiar with the GuestAssist web app interface. Learn how to place baggage assistance orders, request fresh towels, book housekeeping, and give hotel reviews."
  }
];

export default function DemoVideos() {
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState<VideoItem>(PLAYLIST_DATA[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play the video when the active selection changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay was prevented by browser security rules:", err);
      });
    }
  }, [activeVideo]);

  const handleCardClick = (video: VideoItem) => {
    setActiveVideo(video);
    // Smooth scroll the player back into view for mobile accessibility
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    router.push("/dashboard/home");
  };

  return (
    <DemoContainer>
      {/* Header section with interactive back nav */}
      <Header>
        <BackButton onClick={handleBackClick} aria-label="Go back to Home">
          <IoChevronBack size={20} />
        </BackButton>
        <HeaderTitle>Instructional Videos</HeaderTitle>
      </Header>

      {/* Primary Video Player Area */}
      <PlayerSection>
        <PlayerWrapper>
          <video
            ref={videoRef}
            src={activeVideo.url}
            controls
            playsInline
            poster={activeVideo.thumbnail}
          />
        </PlayerWrapper>
        <VideoMeta>
          <VideoTitle>{activeVideo.title}</VideoTitle>
          <VideoDescription>{activeVideo.description}</VideoDescription>
        </VideoMeta>
      </PlayerSection>

      {/* Playlist Selector Section */}
      <PlaylistSection>
        <SectionLabel>Select Guide</SectionLabel>
        <PlaylistContainer>
          {PLAYLIST_DATA.map((video) =>  {
            const isActive = video.id === activeVideo.id;
            return (
              <VideoCard
                key={video.id}
                $active={isActive}
                onClick={() => handleCardClick(video)}
              >
                <ThumbnailWrapper>
                  <img src={video.thumbnail} alt={video.title} /> 
                  <ThumbnailOverlay>
                    <IoPlay size={18} />
                  </ThumbnailOverlay>
                </ThumbnailWrapper>

                <CardDetails> 
                  <CardTitle>{video.title}</CardTitle>
                  <CardSubtitleRow>
                    <CardDuration>{video.duration}</CardDuration>
                     {isActive && <NowPlayingBadge>Now Playing</NowPlayingBadge>}
                  </CardSubtitleRow>
                </CardDetails>
              </VideoCard>
            );
          })}
        </PlaylistContainer>
      </PlaylistSection>
    </DemoContainer>
  );
}
 