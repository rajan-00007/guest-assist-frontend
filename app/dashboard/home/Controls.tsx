"use client";

import React, { useState } from "react";
import {
  Ban,
  Snowflake,
  Wifi,
  AudioLines,
  MessageSquare,
  Copy,
  Check
} from "lucide-react";
import { GiWashingMachine } from "react-icons/gi";
import { LiaBroomSolid } from "react-icons/lia";
import { BsLuggage } from "react-icons/bs";
import { FiBellOff } from "react-icons/fi";
import { Drawer } from "vaul";
import Text from "@/components/styles/text/Text";
import { StyledButton } from "@/components/styles/button/Button.Styled";
import {
  ControlsArea,
  ControlsTitle,
  GridArea,
  GridCell,
  ControlCard,
  ControlCardLabel,
  DrawerOverlay,
  DrawerContent,
  DrawerHandle,
  DrawerIconContainer,
  DrawerTextWrapper,
  DrawerButtonWrapper,
  WifiInfoCard,
  WifiInfoCardContent,
  CopyButton,
  StyledTextarea
} from "./Controls.styled";
import { colors } from "@/components/styles/colors";
import LuggageModal from "./LuggageModal";
import HousekeepingModal from "./HousekeepingModal";
import FeedbackModal from "./FeedbackModal";

export default function Controls() {
  // Room Controls toggling states for rich interactive feel
  const [activeControls, setActiveControls] = useState<Record<string, boolean>>({
    dnd: false,
    ac: true,          // Default AC to true to match premium dashboard visuals
    laundry: false,
    wifi: true,         // Default WiFi to active
    special: false,
    housekeeping: false,
    luggage: false,
    feedback: false
  });

  const [isDndOpen, setIsDndOpen] = useState(false);
  const [isLaundryOpen, setIsLaundryOpen] = useState(false);
  const [isWifiOpen, setIsWifiOpen] = useState(false);
  const [isSpecialOpen, setIsSpecialOpen] = useState(false);
  const [isLuggageOpen, setIsLuggageOpen] = useState(false);
  const [isHousekeepingOpen, setIsHousekeepingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [specialText, setSpecialText] = useState("");

  const toggleControl = (controlId: string) => {
    if (controlId === "dnd") {
      setIsDndOpen(true);
      return;
    }
    if (controlId === "laundry") {
      setIsLaundryOpen(true);
      return;
    }
    if (controlId === "wifi") {
      setIsWifiOpen(true);
      return;
    }
    if (controlId === "special") {
      setIsSpecialOpen(true);
      return;
    }
    if (controlId === "luggage") {
      setIsLuggageOpen(true);
      return;
    }
    if (controlId === "housekeeping") {
      setIsHousekeepingOpen(true);
      return;
    }
    if (controlId === "feedback") {
      setIsFeedbackOpen(true);
      return;
    }
    setActiveControls((prev) => ({
      ...prev,
      [controlId]: !prev[controlId]
    }));
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText("HorizonGuest_2024");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // 4x2 Grid of Room Controls
  const controlsList = [
    { id: "dnd", label: "Do Not Disturb", icon: Ban },
    { id: "ac", label: "AC Controls", icon: Snowflake },
    { id: "laundry", label: "Laundry Service", icon: GiWashingMachine },
    { id: "wifi", label: "Wi-Fi Info", icon: Wifi },
    { id: "special", label: "Special Request", icon: AudioLines },
    { id: "housekeeping", label: "House keeping", icon: LiaBroomSolid },
    { id: "luggage", label: "Luggage Assistance", icon: BsLuggage },
    { id: "feedback", label: "Hotel Feedback", icon: MessageSquare }
  ];

  const isDndActive = activeControls.dnd;

  return (
    <>
    <ControlsArea>
      <ControlsTitle>Room Controls</ControlsTitle>
      
      <GridArea>
        {controlsList.map((control) => {
          const IconComp = control.icon;
          const isAct = activeControls[control.id];
          return (
            <GridCell key={control.id}>
              <ControlCard 
                $active={isAct} 
                $isDnd={control.id === "dnd"}
                onClick={() => toggleControl(control.id)} 
                aria-label={control.label}
              >
                <IconComp size={36} strokeWidth={1.2} />
              </ControlCard>
              <ControlCardLabel $active={isAct} $isDnd={control.id === "dnd"}>
                {control.label}
              </ControlCardLabel>
            </GridCell>
          );
        })}
      </GridArea>

      {/* Do Not Disturb Bottom Sheet */}
      <Drawer.Root open={isDndOpen} onOpenChange={setIsDndOpen}>
        <Drawer.Portal>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHandle />
            <DrawerIconContainer $active={isDndActive}>
              <FiBellOff size={28} />
            </DrawerIconContainer>
            
            <DrawerTextWrapper>
              <Text variant="hero" weight={600} color="#FFFFFF" align="center">
                Do Not Disturb
              </Text>
              <Text variant="bodyPrimary" weight={400} color="#8E8E93" align="center" lineHeight="1.4">
                Enjoy your privacy. We&apos;ll pause all notifications and room service.
              </Text>
            </DrawerTextWrapper>
            
            <DrawerButtonWrapper>
              {isDndActive ? (
                <StyledButton
                  bgColor="#FF3B30"
                  textColor="#FFFFFF"
                  width="100%"
                  height="54px"
                  radius="14px"
                  $textSize={16}
                  onClick={() => {
                    setActiveControls((prev) => ({ ...prev, dnd: false }));
                    setIsDndOpen(false);
                  }}
                >
                  Deactivate
                </StyledButton>
              ) : (
                <StyledButton
                  bgColor="#FFFFFF"
                  textColor="#000000"
                  width="100%"
                  height="54px"
                  radius="14px"
                  $textSize={16}
                  onClick={() => {
                    setActiveControls((prev) => ({ ...prev, dnd: true }));
                    setIsDndOpen(false);
                  }}
                >
                  Activate
                </StyledButton>
              )}
            </DrawerButtonWrapper>
          </DrawerContent>
        </Drawer.Portal>
      </Drawer.Root>

      {/* Laundry Service Bottom Sheet */}
      <Drawer.Root open={isLaundryOpen} onOpenChange={setIsLaundryOpen}>
        <Drawer.Portal>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHandle />
            <DrawerIconContainer $active={false}>
              <GiWashingMachine size={32} />
            </DrawerIconContainer>
            
            <DrawerTextWrapper>
              <Text variant="hero" weight={600} color="#FFFFFF" align="center">
                Laundry Service
              </Text>
              <Text variant="bodyPrimary" weight={400} color="#8E8E93" align="center" lineHeight="1.4">
                Freshly cleaned, delivered to your room.
              </Text>
            </DrawerTextWrapper>
            
            <DrawerButtonWrapper>
              <StyledButton
                bgColor="#FFFFFF"
                textColor="#000000"
                width="100%"
                height="54px"
                radius="14px"
                $textSize={16}
                onClick={() => {
                  setActiveControls((prev) => ({ ...prev, laundry: true }));
                  setIsLaundryOpen(false);
                }}
              >
                Request Pickup
              </StyledButton>
            </DrawerButtonWrapper>
          </DrawerContent>
        </Drawer.Portal>
      </Drawer.Root>

      {/* Wi-Fi Info Bottom Sheet */}
      <Drawer.Root open={isWifiOpen} onOpenChange={setIsWifiOpen}>
        <Drawer.Portal>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHandle />
            <DrawerIconContainer $active={false}>
              <Wifi size={28} />
            </DrawerIconContainer>
            
            <div style={{ width: "100%", display: "flex", flexDirection: "column", marginTop: "8px" }}>
              <WifiInfoCard>
                <WifiInfoCardContent>
                  <Text variant="bodyPrimary" opacity={50} weight={500}>
                    Network Name
                  </Text>
                  <Text variant="sectionTitle" color="#FFFFFF" weight={400}>
                    HorizonGuest_Elite
                  </Text>
                </WifiInfoCardContent>
              </WifiInfoCard>

              <WifiInfoCard>
                <WifiInfoCardContent>
                  <Text variant="bodyPrimary" opacity={50} weight={400}>
                    Password
                  </Text>
                  <Text variant="sectionTitle" color="#FFFFFF" weight={600}>
                    HorizonGuest_2024
                  </Text>
                </WifiInfoCardContent>
                <CopyButton onClick={handleCopyPassword} aria-label="Copy password">
                  {copied ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
                </CopyButton>
              </WifiInfoCard>
            </div>
            
            <DrawerButtonWrapper>
              <StyledButton
                bgColor="#FFFFFF"
                textColor="#000000"
                width="100%"
                height="54px"
                radius="14px"
                $textSize={16}
                onClick={() => {
                  setActiveControls((prev) => ({ ...prev, wifi: true }));
                  setIsWifiOpen(false);
                }}
              >
                Connect
              </StyledButton>
            </DrawerButtonWrapper>
          </DrawerContent>
        </Drawer.Portal>
      </Drawer.Root>

      {/* Special Request Bottom Sheet */}
      <Drawer.Root open={isSpecialOpen} onOpenChange={setIsSpecialOpen}>
        <Drawer.Portal>
          <DrawerOverlay />
          <DrawerContent >
            <DrawerHandle />
            
            <DrawerTextWrapper style={{ marginBottom: "8px" }}>
              <Text variant="hero" weight={600} color="#FFFFFF" align="center">
                Special Request
              </Text>
              <Text variant="bodyPrimary" weight={400} color="#8E8E93" align="center" lineHeight="1.4">
                Need something extra? Let us know and we&apos;ll do our best to accommodate.
              </Text>
            </DrawerTextWrapper>

            <StyledTextarea
              placeholder="E.g. Extra pillows, sparkling water, late checkout request..."
              value={specialText}
              onChange={(e) => setSpecialText(e.target.value)}
            />
            
            <DrawerButtonWrapper>
              <StyledButton
                bgColor="#FFFFFF"
                textColor="#000000"
                width="100%"
                height="54px"
                radius="14px"
                $textSize={16}
                onClick={() => {
                  setActiveControls((prev) => ({ ...prev, special: !!specialText.trim() }));
                  setIsSpecialOpen(false);
                }}
              >
                Request Pickup
              </StyledButton>
            </DrawerButtonWrapper>
          </DrawerContent>
        </Drawer.Portal>
      </Drawer.Root>
    </ControlsArea>
    <LuggageModal isOpen={isLuggageOpen} onClose={setIsLuggageOpen} />
    <HousekeepingModal isOpen={isHousekeepingOpen} onClose={setIsHousekeepingOpen} />
    <FeedbackModal isOpen={isFeedbackOpen} onClose={setIsFeedbackOpen} />
    </>
  );
}
