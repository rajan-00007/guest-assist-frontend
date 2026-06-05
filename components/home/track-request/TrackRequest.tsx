"use client";

import React from "react";
import { Drawer } from "vaul";
import { GiWashingMachine } from "react-icons/gi";
import Text from "@/components/styles/text/Text";
import {
  TrackOverlay,
  TrackContent,
  TrackHandle,
  DrawerTextWrapper,
  RequestList,
  RequestCard,
  CardHeader,
  LeftSection,
  IconContainer,
  TextContainer,
  AvatarContainer,
  AvatarImage,
  StyledProgress
} from "./TrackRequest.styled";

interface TrackRequestProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const REQUESTS_DATA = [
  {
    id: 1,
    title: "Room cleaning",
    status: "Scheduled for 2:00 PM",
    progress: 30
  },
  {
    id: 2,
    title: "Luggage Assistance",
    status: "Arriving in 5 mins",
    progress: 30
  },
  {
    id: 3,
    title: "Room Service",
    status: "Estimated arrival: 10 mins",
    progress: 30
  },
  {
    id: 4,
    title: "Room cleaning",
    status: "Scheduled for 2:00 PM",
    progress: 30
  }
];

export default function TrackRequest({ open, onOpenChange }: TrackRequestProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <TrackOverlay />
        <TrackContent>
          <TrackHandle />
          
          <DrawerTextWrapper>
            <Text variant="hero" weight={400} color="#FFFFFF" align="center">
              Track your request
            </Text>
            <Text variant="bodyPrimary" weight={400} color="#8E8E93" align="center" lineHeight="1.4">
              Request room cleaning at your preferred time.
            </Text>
          </DrawerTextWrapper>
          
          <RequestList>
            {REQUESTS_DATA.map((request) => (
              <RequestCard key={request.id}>
                <CardHeader>
                  <LeftSection>
                    
                      <GiWashingMachine fill="white" size={32} />
                    
                    <TextContainer>
                      <Text variant="bodySecondary" weight={600} >
                        {request.title}
                      </Text>
                      <Text variant="caption" opacity={50} weight={400} >
                        {request.status}
                      </Text>
                    </TextContainer>
                  </LeftSection>
                  
                  <AvatarContainer>
                    <AvatarImage src="/assets/female_avatar.png" alt="Preethi Gupta" />
                    <Text variant="caption" opacity={50} weight={400}  style={{ fontSize: "10px" }}>
                      Preethi Gupta
                    </Text>
                  </AvatarContainer>
                </CardHeader>
                
                <StyledProgress value={request.progress} />
              </RequestCard>
            ))}
          </RequestList>
        </TrackContent>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
