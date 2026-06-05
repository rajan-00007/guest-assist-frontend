import React from "react";
import Text from "@/components/styles/text/Text";
import {
  CardWrapper,
  CardLeftContent,
  TextGroup,
  MenuPillButton,
  CardImageWrapper,
  CardImage,
  BackgroundBlob1,
  BackgroundBlob2,
} from "@/app/dashboard/food/FoodBanners.styled";

interface FoodBannerCardProps {
  title: string;
  name: string;
  image: string;
  gradient: string;
  buttonTextColor: string;
  onClick?: () => void;
}

export default function FoodBannerCard({
  title,
  name,
  image,
  gradient,
  buttonTextColor,
  onClick,
}: FoodBannerCardProps) {
  return (
    <CardWrapper $gradient={gradient} onClick={onClick}>
      {/* Background design accents */}
      <BackgroundBlob1 />
      <BackgroundBlob2 />

      <CardLeftContent>
        <TextGroup>
          <Text variant="caption" weight={400} color="rgba(255, 255, 255, 0.8)">
            {title}
          </Text>
          <Text variant="bodyPrimary" weight={500} style={{ fontSize: "16px"}}>
            {name}
          </Text>
        </TextGroup>
        <MenuPillButton $textColor={buttonTextColor} type="button">
          Menu
        </MenuPillButton>
      </CardLeftContent>

      <CardImageWrapper>
        <CardImage src={image} alt={name} />
      </CardImageWrapper>
    </CardWrapper>
  );
}
