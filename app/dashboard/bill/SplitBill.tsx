"use client";

import React from "react";
import Text from "@/components/styles/text/Text";
import { StyledButton } from "@/components/styles/button/Button.Styled";
import {
  SplitContainer,
  SplitHeader,
  GuestRow,
  GuestInfo,
  RightSection,
  StatusText,
} from "./SplitBill.styled";

const guests = [
  { id: 1, name: "Rohit Kumar (You)", status: "Paid" as const, amount: "$5,99", actionType: "Pay" },
  { id: 2, name: "Rohit Kumar", status: "Paid" as const, amount: "$5,99", actionType: "Request" },
  { id: 3, name: "Rohit Kumar", status: "Pending" as const, amount: "$5,99", actionType: "Request" },
  { id: 4, name: "Rohit Kumar", status: "Pending" as const, amount: "$5,99", actionType: "Request" },
];

const SplitBill = () => {
  const handleSendRequest = () => {
    alert("Send request clicked!");
  };

  const handleGuestAction = (name: string, type: string) => {
    alert(`${type} action initiated for ${name}`);
  };

  return (
    <SplitContainer>
      {/* Header Row */}
      <SplitHeader>
        <Text variant="subSectionTitle" weight={700} color="#FFFFFF" style={{ letterSpacing: "0.5px" }}>
          ADD GUEST
        </Text>
        <StyledButton
          bgColor="#0c142c"
          textColor="#ffffff"
          strokeColor="#1c2e5c"
          radius="8px"
          height="36px"
          $textSize={13}
          onClick={handleSendRequest}
        >
          Send request
        </StyledButton>
      </SplitHeader>

      {/* Guest List */}
      {guests.map((guest) => (
        <GuestRow key={guest.id}>
          <GuestInfo>
            <Text variant="bodyPrimary" weight={600} color="#FFFFFF">
              {guest.name}
            </Text>
            <StatusText $status={guest.status}>{guest.status}</StatusText>
          </GuestInfo>

          <RightSection>
            <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
              {guest.amount}
            </Text>

            {guest.actionType === "Pay" ? (
              <StyledButton
                bgColor="#9c633a"
                textColor="#ffffff"
                radius="6px"
                height="34px"
                width="72px"
                $textSize={14}
                onClick={() => handleGuestAction(guest.name, "Pay")}
              >
                Pay
              </StyledButton>
            ) : (
              <StyledButton
                bgColor="#000000"
                textColor="#ffffff"
                strokeColor="#9c633a"
                radius="6px"
                height="34px"
                width="84px"
                $textSize={14}
                onClick={() => handleGuestAction(guest.name, "Request")}
              >
                Request
              </StyledButton>
            )}
          </RightSection>
        </GuestRow>
      ))}
    </SplitContainer>
  );
};

export default SplitBill;
