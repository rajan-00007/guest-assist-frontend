"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import Text from "@/components/styles/text/Text";
import { StyledButton } from "@/components/styles/button/Button.Styled";
import {
  SuccessContainer,
  IllustrationContainer,
  DetailCard,
  DetailRow,
  DetailDivider,
  ButtonGroup,
  TextButton,
  SuccessHeader,
  BackCircle,
} from "./BillPaySuccess.styled";

interface BillPaySuccessProps {
  onClose?: () => void;
}

const BillPaySuccess = ({ onClose }: BillPaySuccessProps) => {
  const handleDownload = () => {
    alert("Downloading success invoice PDF...");
  };

  const handleShare = () => {
    alert("Share sheet opened!");
  };

  return (
    <SuccessContainer>
      {/* Header with Back button */}
      <SuccessHeader>
        <BackCircle onClick={onClose} aria-label="Go back">
          <ChevronLeft size={18} strokeWidth={2.5} />
        </BackCircle>
        <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
          Payment Receipt
        </Text>
      </SuccessHeader>

      {/* Payment success vector illustration */}
      <IllustrationContainer>
        <img src="/assets/billpay.png" alt="Bill Pay Successful" />
      </IllustrationContainer>

      {/* Success Title */}
      <Text variant="pageTitle" weight={700} color="#FFFFFF" align="center">
        Bill Pay Successful
      </Text>

      {/* Payment Details Card */}
      <DetailCard>
        <Text variant="bodySecondary" weight={600} color="#FFFFFF">
          Payment Detail
        </Text>
        <DetailDivider />

        <DetailRow>
          <Text variant="bodySecondary" color="#71717A" weight={400}>
            Transaction ID
          </Text>
          <Text variant="bodySecondary" color="#FFFFFF" weight={600}>
            #71L69PS834673K3
          </Text>
        </DetailRow>

        <DetailRow>
          <Text variant="bodySecondary" color="#71717A" weight={400}>
            Amount
          </Text>
          <Text variant="bodySecondary" color="#FFFFFF" weight={600}>
            $234.2442
          </Text>
        </DetailRow>

        <DetailRow>
          <Text variant="bodySecondary" color="#71717A" weight={400}>
            Charge
          </Text>
          <Text variant="bodySecondary" color="#FFFFFF" weight={600}>
            $232.233
          </Text>
        </DetailRow>

        <DetailRow>
          <Text variant="bodySecondary" color="#71717A" weight={400}>
            Total
          </Text>
          <Text variant="bodySecondary" color="#FFFFFF" weight={600}>
            $4545.545
          </Text>
        </DetailRow>

        <DetailRow>
          <Text variant="bodySecondary" color="#71717A" weight={400}>
            Transaction ID
          </Text>
          <Text variant="bodySecondary" color="#FFFFFF" weight={600}>
            #71L69PJK3
          </Text>
        </DetailRow>

        <DetailRow>
          <Text variant="bodySecondary" color="#71717A" weight={400}>
            Timestamp
          </Text>
          <Text variant="bodySecondary" color="#FFFFFF" weight={600}>
            01/11/22, 10:45PM
          </Text>
        </DetailRow>

        <DetailDivider />

        {/* Paid Status row */}
        <DetailRow>
          <Text variant="bodySecondary" weight={700} color="#FFFFFF">
            Status
          </Text>
          <Text variant="bodySecondary" weight={700} color="#22c55e">
            Paid
          </Text>
        </DetailRow>
      </DetailCard>

      {/* Action buttons */}
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

        <TextButton onClick={onClose || handleShare}>
          <Text variant="bodySecondary" weight={500} color="#FFFFFF">
            Share
          </Text>
        </TextButton>
      </ButtonGroup>
    </SuccessContainer>
  );
};

export default BillPaySuccess;
