"use client";

import React, { useState } from "react";
import { ChevronLeft, Plus, X } from "lucide-react";
import Text from "@/components/styles/text/Text";
import { StyledButton } from "@/components/styles/button/Button.Styled";
import {
  IssueContainer,
  IssueHeader,
  BackCircle,
  SectionBlock,
  CategoryGrid,
  CategoryCard,
  TextArea,
  UploadBox,
  PreviewWrapper,
  ImagePreview,
  CloseBtn,
  ButtonGroup,
  TextButton,
} from "./RaiseIssue.styled";

interface RaiseIssueProps {
  onBack?: () => void;
}

const categories = [
  "Incorrect Amount",
  "Duplicate Charge",
  "Service Not Received",
  "Other",
];

const RaiseIssue = ({ onBack }: RaiseIssueProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Incorrect Amount");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
  };

  const handleSubmit = () => {
    alert(
      `Dispute submitted!\nCategory: ${selectedCategory}\nDetails: ${details || "None"}\nPhoto Attached: ${
        photo ? "Yes" : "No"
      }`
    );
    if (onBack) onBack();
  };

  const handleShare = () => {
    alert("Share sheet opened!");
  };

  return (
    <IssueContainer>
      {/* Header with Back button */}
      <IssueHeader>
        <BackCircle onClick={onBack} aria-label="Go back">
          <ChevronLeft size={18} strokeWidth={2.5} />
        </BackCircle>
        <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
          Report Issue
        </Text>
      </IssueHeader>

      {/* Category selection */}
      <SectionBlock>
        <Text variant="caption" color="#71717A" weight={600} style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
          ISSUE CATEGORY
        </Text>
        <CategoryGrid>
          {categories.map((cat) => (
            <CategoryCard
              key={cat}
              $active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              <Text variant="bodySecondary" weight={500} color={selectedCategory === cat ? "#FFFFFF" : "#71717A"}>
                {cat}
              </Text>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </SectionBlock>

      {/* Details text input */}
      <SectionBlock>
        <Text variant="caption" color="#71717A" weight={600} style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
          ADDITIONAL DETAILS
        </Text>
        <TextArea
          placeholder="Describe the issue in detail..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </SectionBlock>

      {/* Photo upload input */}
      <SectionBlock>
        <Text variant="caption" color="#71717A" weight={600} style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
          ADDITIONAL DETAILS
        </Text>

        {!photo ? (
          <UploadBox>
            <Plus size={16} />
            <span>UPLOAD PHOTO</span>
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </UploadBox>
        ) : (
          <PreviewWrapper>
            <ImagePreview>
              <img src={photo} alt="Issue preview" />
              <CloseBtn onClick={handleRemovePhoto} aria-label="Remove image">
                <X size={12} strokeWidth={2.5} />
              </CloseBtn>
            </ImagePreview>
          </PreviewWrapper>
        )}
      </SectionBlock>

      {/* Action buttons */}
      <ButtonGroup>
        <StyledButton
          bgColor="#0052F7"
          textColor="#FFFFFF"
          width="100%"
          height="50px"
          radius="10px"
          $textSize={15}
          onClick={handleSubmit}
          style={{ fontWeight: 600, letterSpacing: "0.5px" }}
        >
          SUBMIT DISPUTE
        </StyledButton>

        <TextButton onClick={handleShare}>
          <Text variant="bodySecondary" weight={500} color="#FFFFFF">
            Share
          </Text>
        </TextButton>
      </ButtonGroup>
    </IssueContainer>
  );
};

export default RaiseIssue;
