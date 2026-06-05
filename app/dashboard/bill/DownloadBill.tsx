"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import Text from "@/components/styles/text/Text";
import { StyledButton } from "@/components/styles/button/Button.Styled";
import {
  DownloadContainer,
  DownloadHeader,
  BackCircle,
  InvoiceCard,
  ResortRow,
  ResortLeft,
  ResortLogo,
  InvoiceIdBlock,
  StayPanel,
  StayColumn,
  ItemizedSection,
  ChargesDivider,
  ChargeRow,
  TotalRow,
  ButtonGroup,
  TextButton,
} from "./DownloadBill.styled";

interface DownloadBillProps {
  onBack?: () => void;
}

const itemizedCharges = [
  { id: 1, label: "Room Service – Dinner", price: "$5.99" },
  { id: 2, label: "Room Service – Dinner", price: "$5.99" },
  { id: 3, label: "Room Service – Dinner", price: "$5.99" },
  { id: 4, label: "Room Service – Dinner", price: "$5.99" },
  { id: 5, label: "Room Service – Dinner", price: "$5.99" },
  { id: 6, label: "Room Service – Dinner", price: "$5.99" },
];

const DownloadBill = ({ onBack }: DownloadBillProps) => {
  const handleDownload = () => {
    alert("Downloading invoice PDF...");
  };

  const handleShare = () => {
    alert("Share sheet opened!");
  };

  return (
    <DownloadContainer>
      {/* Header with Back button */}
      <DownloadHeader>
        <BackCircle onClick={onBack} aria-label="Go back">
          <ChevronLeft size={18} strokeWidth={2.5} />
        </BackCircle>
        <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
          Bill Information
        </Text>
      </DownloadHeader>

      {/* Invoice Card */}
      <InvoiceCard>
        {/* Resort info header */}
        <ResortRow>
          <ResortLeft>
            <ResortLogo />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <Text variant="bodyPrimary" weight={600} style={{ fontStyle: "italic", letterSpacing: "0.2px" }}>
                TheGrandHorizon
              </Text>
              <Text variant="caption" color="#71717A" weight={400}>
                Luxury Hospitality Group
              </Text>
            </div>
          </ResortLeft>
          <InvoiceIdBlock>
            <Text variant="caption" color="#71717A" weight={500} style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
              INVOICE ID
            </Text>
            <Text variant="bodySecondary" weight={600} color="#FFFFFF">
              #GH-2024-4021
            </Text>
          </InvoiceIdBlock>
        </ResortRow>

        {/* Stay details block */}
        <StayPanel>
          <StayColumn>
            <Text variant="caption" color="#71717A" weight={500} style={{ fontSize: "11px" }}>
              GUEST
            </Text>
            <Text variant="bodySecondary" weight={600} color="#FFFFFF">
              Alex Johnson
            </Text>
            <Text variant="caption" color="#71717A" weight={400} style={{ fontSize: "11px" }}>
              SUITE 402
            </Text>
          </StayColumn>
          <StayColumn className="right">
            <Text variant="caption" color="#71717A" weight={500} style={{ fontSize: "11px" }}>
              STAY DATES
            </Text>
            <Text variant="bodySecondary" weight={600} color="#FFFFFF">
              Oct 22 – Oct 25
            </Text>
            <Text variant="caption" color="#71717A" weight={400} style={{ fontSize: "11px" }}>
              3 Nights
            </Text>
          </StayColumn>
        </StayPanel>

        {/* Itemized charges list */}
        <ItemizedSection>
          <Text variant="bodySecondary" weight={600} color="#FFFFFF">
            Itemized Charges
          </Text>
          <ChargesDivider />

          {itemizedCharges.map((item) => (
            <ChargeRow key={item.id}>
              <Text variant="bodySecondary" color="#71717A" weight={400}>
                {item.label}
              </Text>
              <Text variant="bodySecondary" color="#FFFFFF" weight={500}>
                {item.price}
              </Text>
            </ChargeRow>
          ))}

          <ChargesDivider />

          {/* Subtotal & Tax */}
          <ChargeRow>
            <Text variant="bodySecondary" color="#71717A" weight={400}>
              Subtotal
            </Text>
            <Text variant="bodySecondary" color="#FFFFFF" weight={500}>
              $5.99
            </Text>
          </ChargeRow>
          <ChargeRow>
            <Text variant="bodySecondary" color="#71717A" weight={400}>
              Tax (GST 8%)
            </Text>
            <Text variant="bodySecondary" color="#FFFFFF" weight={500}>
              $5.99
            </Text>
          </ChargeRow>

          <ChargesDivider />

          {/* Total Due */}
          <TotalRow>
            <Text variant="sectionTitle" weight={700} color="#FFFFFF">
              Total Due
            </Text>
            <Text variant="sectionTitle" weight={700} color="#FFFFFF">
              $8.22
            </Text>
          </TotalRow>
        </ItemizedSection>
      </InvoiceCard>

      {/* Buttons */}
      <ButtonGroup>
        <StyledButton
          bgColor="#0052F7"
          textColor="#FFFFFF"
          width="100%"
          height="50px"
          radius="10px"
          $textSize={15}
          onClick={handleDownload}
          style={{ fontWeight: 600, letterSpacing: "0.5px" }}
        >
          DOWNLOAD
        </StyledButton>

        <TextButton onClick={handleShare}>
          <Text variant="bodySecondary" weight={500} color="#FFFFFF">
            Share
          </Text>
        </TextButton>
      </ButtonGroup>
    </DownloadContainer>
  );
};

export default DownloadBill;
