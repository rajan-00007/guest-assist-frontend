"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, Check } from "lucide-react";
import { colors } from "@/components/styles/colors";
import Text from "@/components/styles/text/Text";
import { StyledInput } from "@/components/styles/input/Input.styled";
import {
  PhoneLayout,
  HeaderCard,
  WaveOverlay,
  HeaderContent,
  CircleBackButton,
  FormArea,
  InputsSection,
  InputWrapper,
  FloatingLabel,
  OtpTextContainer,
  OtpInputsContainer,
  OtpCharInput,
  ResendText,
  ButtonContainer,
  PillButton,
  SuccessCard,
  SuccessIconWrapper
} from "./CheckIn.styled";

type Step = "PHONE_ENTRY" | "OTP_VERIFY" | "SUCCESS";

export default function CheckIn() {
  const [step, setStep] = useState<Step>("PHONE_ENTRY");
  
  // Step 1 States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  // Step 2 States
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  // Auto-focus first OTP input when transitioning to Step 2
  useEffect(() => {
    if (step === "OTP_VERIFY") {
      setTimeout(() => {
        otpRefs[0].current?.focus();
      }, 100);
    }
  }, [step]);

  // Step 1 Validation
  const isPhoneEntryValid = name.trim().length > 0 && phone.trim().replace(/\s+/g, "").length >= 10;

  // Step 2 Validation (All 4 digits filled)
  const isOtpValid = otp.every(digit => digit !== "" && /^\d$/.test(digit));

  // Handle Send OTP
  const handleSendOtp = () => {
    if (isPhoneEntryValid) {
      setStep("OTP_VERIFY");
    }
  };

  // Handle OTP digit changes
  const handleOtpChange = (index: number, value: string) => {
    // Only allow digits
    const cleanedValue = value.replace(/\D/g, "");
    if (!cleanedValue) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }

    const digit = cleanedValue.substring(cleanedValue.length - 1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // If paste event or multi-char, handle it
    if (cleanedValue.length > 1) {
      const pasteDigits = cleanedValue.split("").slice(0, 4);
      const updatedOtp = [...otp];
      pasteDigits.forEach((char, idx) => {
        if (idx < 4) updatedOtp[idx] = char;
      });
      setOtp(updatedOtp);
      // Focus the last filled or last input
      const targetFocusIndex = Math.min(pasteDigits.length, 3);
      otpRefs[targetFocusIndex].current?.focus();
      return;
    }

    // Auto-focus next input
    if (index < 3) {
      otpRefs[index + 1].current?.focus();
    }
  };

  // Handle backspace key press
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        // If current is empty, go to previous and clear it
        if (index > 0) {
          const newOtp = [...otp];
          newOtp[index - 1] = "";
          setOtp(newOtp);
          otpRefs[index - 1].current?.focus();
        }
      } else {
        // Clear current
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // Handle Paste
  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (pasteData) {
      const newOtp = ["", "", "", ""];
      pasteData.split("").forEach((char, idx) => {
        newOtp[idx] = char;
      });
      setOtp(newOtp);
      const focusIndex = Math.min(pasteData.length, 3);
      otpRefs[focusIndex].current?.focus();
    }
  };

  // Handle Continue Verification
  const handleContinue = () => {
    if (isOtpValid) {
      setStep("SUCCESS");
    }
  };

  // Render wave vector graphic matching the mockup with 2 circles from top left
  const WaveBackground = () => (
    <svg viewBox="0 0 375 270" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circle 1: Outer large shape from top-left */}
      <circle cx="-10" cy="-5" r="260" fill="#152534" />
      {/* Circle 2: Inner shape from top-left */}
      <circle cx="-10" cy="-2" r="180" fill="#1E2E3D" />
      {/* Subtle vector highlights */}
     
    </svg>
  );

  return (
    <PhoneLayout>
      {/* Header section (Curved background and Wave pattern) */}
      <HeaderCard>
        <WaveOverlay>
          <WaveBackground />
        </WaveOverlay>

        {step === "OTP_VERIFY" && (
          <CircleBackButton onClick={() => setStep("PHONE_ENTRY")}>
            <ChevronLeft size={20} />
          </CircleBackButton>
        )}

        <HeaderContent>
          <Text variant="hero" weight={700} align="center" color="#ffffff">
            {step === "OTP_VERIFY" ? "OTP Verify" : step === "SUCCESS" ? "All Set!" : "Verify your number"}
          </Text>
          <Text variant="bodySecondary" align="center" color="#B0C6F3" lineHeight="1.4">
            {step === "SUCCESS" 
              ? "You have successfully verified your identity." 
              : "Enter your mobile number to access your stay details."}
          </Text>
        </HeaderContent>
      </HeaderCard>

      {/* Dynamic step form area */}
      <FormArea>
        {step === "PHONE_ENTRY" && (
          <>
            <InputsSection>
              {/* Full Name Input */}
              <InputWrapper>
                <FloatingLabel $isFocused={isNameFocused} $hasValue={name.length > 0}>
                  Full Name
                </FloatingLabel>
                <StyledInput
                  $dark
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                  $hasValue={name.length > 0}
                  height={60}
                />
              </InputWrapper>

              {/* Phone Number Input */}
              <InputWrapper>
                <FloatingLabel $isFocused={isPhoneFocused} $hasValue={phone.length > 0}>
                  Phone Number
                </FloatingLabel>
                <StyledInput
                  $dark
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={() => setIsPhoneFocused(true)}
                  onBlur={() => setIsPhoneFocused(false)}
                  $hasValue={phone.length > 0}
                  height={60}
                />
              </InputWrapper>
            </InputsSection>

            <ButtonContainer>
              <PillButton $active={isPhoneEntryValid} disabled={!isPhoneEntryValid} onClick={handleSendOtp}>
                Send OTP
              </PillButton>
            </ButtonContainer>
          </>
        )}

        {step === "OTP_VERIFY" && (
          <>
            <InputsSection>
              <OtpTextContainer>
                Enter the OTP sent to <strong>+91 {phone || "9999989333"}</strong>
              </OtpTextContainer>

              <OtpInputsContainer>
                {otp.map((digit, index) => (
                  <OtpCharInput
                    key={index}
                    ref={otpRefs[index]}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-8]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    onPaste={index === 0 ? handleOtpPaste : undefined}
                    placeholder={index === 3 && otp[0] && otp[1] && otp[2] && !otp[3] ? "_" : ""}
                  />
                ))}
              </OtpInputsContainer>

              <ResendText>
                Didn&apos;t you receive the OTP? <a onClick={() => setOtp(["", "", "", ""])}>Resend OTP</a>
              </ResendText>
            </InputsSection>

            <ButtonContainer>
              <PillButton $active={isOtpValid} disabled={!isOtpValid} onClick={handleContinue}>
                Continue
              </PillButton>
            </ButtonContainer>
          </>
        )}

        {step === "SUCCESS" && (
          <SuccessCard>
            <SuccessIconWrapper>
              <Check size={40} strokeWidth={2.5} />
            </SuccessIconWrapper>
            <Text variant="sectionTitle" weight={600} color="#ffffff" align="center" style={{ marginBottom: "12px" }}>
              Welcome, {name}!
            </Text>
            <Text variant="bodySecondary" color="#71717A" align="center" style={{ marginBottom: "32px" }}>
              Verification completed successfully. You now have full access to your stay details.
            </Text>
            <PillButton $active={true} onClick={() => {
              setStep("PHONE_ENTRY");
              setName("");
              setPhone("");
              setOtp(["", "", "", ""]);
            }}>
              Start Over
            </PillButton>
          </SuccessCard>
        )}
      </FormArea>
    </PhoneLayout>
  );
}
