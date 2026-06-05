"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import Text from "@/components/styles/text/Text";
import {
  PaymentContainer,
  MethodHeader,
  BackCircle,
  PaymentCard,
  LogoRow,
  LogoBadge,
} from "./PayNow.styled";

interface PayNowProps {
  onBack?: () => void;
}

// Inline SVG components for high fidelity logos
const VisaLogo = () => (
  <svg width="34" height="11" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.766 0.117L2.484 8.000H0.648L1.930 0.117H3.766ZM8.984 0.117L7.266 8.000H5.539L3.922 1.637C3.766 0.996 3.633 0.816 3.125 0.535C2.715 0.301 1.945 0.086 1.055 0.000L1.094 0.117H4.078C4.531 0.117 4.938 0.406 5.047 0.871L5.992 5.961L7.742 0.117H8.984ZM13.820 5.371C13.820 3.328 10.984 3.211 11.000 2.293C11.000 2.012 11.273 1.703 11.859 1.629C12.148 1.594 12.953 1.539 13.828 1.938L14.156 0.414C13.258 0.090 12.242 0.000 11.219 0.000C9.375 0.000 8.070 0.980 8.055 2.375C8.039 3.949 10.422 4.078 10.406 5.031C10.391 5.320 10.078 5.617 9.438 5.695C8.953 5.750 8.047 5.656 7.078 5.211L6.750 6.758C7.750 7.219 8.922 7.422 10.078 7.422C12.016 7.422 13.820 6.477 13.820 5.371ZM18.000 0.117H16.594C16.141 0.117 15.773 0.375 15.594 0.773L12.938 7.109L12.930 7.125C12.922 7.133 12.914 7.148 12.906 7.164L12.875 7.227C12.867 7.242 12.859 7.258 12.852 7.273L12.594 8.000H14.430L14.805 6.945H17.039L17.250 8.000H18.891L17.469 1.156C17.469 1.141 17.477 1.125 17.484 1.109L17.531 0.883C17.570 0.703 17.602 0.523 17.633 0.344C17.656 0.219 17.672 0.117 18.000 0.117ZM15.297 5.516L16.242 2.828L16.781 5.516H15.297Z" fill="#1A1F71" />
    <path d="M1.094 0.117H0.000L0.016 0.176C0.781 0.371 1.453 0.703 1.953 1.156C2.109 1.297 2.227 1.453 2.305 1.637L2.484 8.000H0.648L1.094 0.117Z" fill="#F79E1B" />
  </svg>
);

const MastercardLogo = () => (
  <svg width="22" height="14" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="7.5" fill="#EB001B" />
    <circle cx="16.5" cy="7.5" r="7.5" fill="#F79E1B" fillOpacity="0.8" />
  </svg>
);

const AmexLogo = () => (
  <svg width="34" height="11" viewBox="0 0 38 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="38" height="13" rx="1.5" fill="#0070CD" />
    <text x="3" y="10" fill="white" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.4">AMEX</text>
  </svg>
);

const GooglePayLogo = () => (
  <svg width="36" height="14" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8c0-.6.1-1.1.3-1.6L1.1 4.2C.4 5.3 0 6.6 0 8s.4 2.7 1.1 3.8l3.2-2.2C4.1 9.1 4 8.6 4 8z" fill="#FBBC05" />
    <path d="M8 4c1 0 1.8.3 2.5.9l2.8-2.8C11.6.8 9.9 0 8 0 4.9 0 2.2 1.7 1.1 4.2l3.2 2.2C5 5 6.4 4 8 4z" fill="#EA4335" />
    <path d="M8 12c-1.6 0-3-1-3.7-2.4l-3.2 2.2c1.1 2.5 3.8 4.2 6.9 4.2 1.9 0 3.6-.6 4.9-1.7l-3.1-2.4c-.5.4-1.1.7-1.8.7z" fill="#34A853" />
    <path d="M14.5 8c0-.5-.1-1-.2-1.5H8v3h3.7c-.2.9-.8 1.6-1.7 2.1l3.1 2.4c1.8-1.7 2.9-4.2 2.9-6z" fill="#4285F4" />
    <text x="17" y="12.5" fill="white" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">Pay</text>
  </svg>
);

const PayPalLogo = () => (
  <svg width="36" height="14" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="2" y="12" fill="#003087" fontSize="11" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif">Pay</text>
    <text x="20" y="12" fill="#0079C1" fontSize="11" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif">Pal</text>
  </svg>
);

const ApplePayLogo = () => (
  <svg width="34" height="14" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.2 2.5c-.5.6-1.3.9-2 1C2 2.8 2.4 2 3 1.3c.6-.7 1.3-1 2-1-.1.8-.4 1.6-.8 2.2zM5.5 4.3C4.8 4.3 4.2 4 3.8 4c-.4 0-1 .3-1.6.3-.7 0-1.4-.4-1.8-1-.8-1.3-.2-3.3 1-5 .6-.8 1.3-1.3 2-1.3.6 0 1 .3 1.5.3.4 0 .9-.3 1.6-.3.7 0 1.3.4 1.7 1.1-1.4.8-1.2 2.5.2 3.1-.3.9-.9 1.7-1.7 2.4C6.2 4.2 5.8 4.3 5.5 4.3z" fill="white" transform="translate(1, 2)" />
    <text x="14" y="12.5" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Pay</text>
  </svg>
);

const PayNow = ({ onBack }: PayNowProps) => {
  const handlePaymentMethod = (method: string) => {
    alert(`Initiating payment with: ${method}`);
  };

  return (
    <PaymentContainer>
      {/* Header with Back button */}
      <MethodHeader>
        <BackCircle onClick={onBack} aria-label="Go back">
          <ChevronLeft size={18} strokeWidth={2.5} />
        </BackCircle>
        <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
          Payment Method
        </Text>
      </MethodHeader>

      {/* Credit Card Option */}
      <PaymentCard onClick={() => handlePaymentMethod("Credit Card")}>
        <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
          Credit Card
        </Text>
        <LogoRow>
          <LogoBadge>
            <VisaLogo />
          </LogoBadge>
          <LogoBadge>
            <MastercardLogo />
          </LogoBadge>
          <LogoBadge>
            <AmexLogo />
          </LogoBadge>
        </LogoRow>
      </PaymentCard>

      {/* UPI Option */}
      <PaymentCard onClick={() => handlePaymentMethod("UPI")}>
        <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
          UPI
        </Text>
        <LogoRow>
          <LogoBadge style={{ backgroundColor: "#000000" }}>
            <GooglePayLogo />
          </LogoBadge>
          <LogoBadge>
            <PayPalLogo />
          </LogoBadge>
        </LogoRow>
      </PaymentCard>

      {/* Google Pay Option */}
      <PaymentCard onClick={() => handlePaymentMethod("Google Pay")}>
        <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
          Google pay
        </Text>
        <LogoRow>
          <LogoBadge style={{ backgroundColor: "#000000", width: "66px" }}>
            <GooglePayLogo />
          </LogoBadge>
        </LogoRow>
      </PaymentCard>

      {/* Apple Pay Option */}
      <PaymentCard onClick={() => handlePaymentMethod("Apple Pay")}>
        <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
          Apple pay
        </Text>
        <LogoRow>
          <LogoBadge style={{ backgroundColor: "#000000", width: "66px" }}>
            <ApplePayLogo />
          </LogoBadge>
        </LogoRow>
      </PaymentCard>
    </PaymentContainer>
  );
};

export default PayNow;
