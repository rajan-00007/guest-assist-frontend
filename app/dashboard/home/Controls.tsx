"use client";

import React, { useState } from "react";
import {
  Ban,
  Snowflake,
  Wifi,
  AudioLines,
  MessageSquare
} from "lucide-react";
import { GiWashingMachine } from "react-icons/gi";
import { LiaBroomSolid } from "react-icons/lia";
import { BsLuggage } from "react-icons/bs";
import {
  ControlsArea,
  ControlsTitle,
  GridArea,
  GridCell,
  ControlCard,
  ControlCardLabel
} from "./Controls.styled";

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

  const toggleControl = (controlId: string) => {
    setActiveControls((prev) => ({
      ...prev,
      [controlId]: !prev[controlId]
    }));
  };

  // 4x2 Grid of Room Controls
  const controlsList = [
    { id: "dnd", label: "Do Not Disturb", icon: Ban },
    { id: "ac", label: "AC Controls", icon: Snowflake },
    { id: "laundry", label: "Laundry Service", icon: GiWashingMachine },
    { id: "wifi", label: "Wi-Fi Info", icon: Wifi },
    { id: "special", label: "Special Request", icon: AudioLines },
    { id: "housekeeping", label: "Housekeeping", icon: LiaBroomSolid },
    { id: "luggage", label: "Luggage Assistance", icon: BsLuggage },
    { id: "feedback", label: "Hotel Feedback", icon: MessageSquare }
  ];

  return (
    <ControlsArea>
      <ControlsTitle>Room Controls</ControlsTitle>
      
      <GridArea>
        {controlsList.map((control) => {
          const IconComp = control.icon;
          const isAct = activeControls[control.id];
          return (
            <GridCell key={control.id}>
              <ControlCard $active={isAct} onClick={() => toggleControl(control.id)} aria-label={control.label}>
                <IconComp size={24} strokeWidth={1.8} />
              </ControlCard>
              <ControlCardLabel>{control.label}</ControlCardLabel>
            </GridCell>
          );
        })}
      </GridArea>
    </ControlsArea>
  );
}
