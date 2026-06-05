import React from "react";
import { Star, Leaf, Plus, Minus } from "lucide-react";
import Text from "@/components/styles/text/Text";
import {
  CardContainer,
  PlateWrapper,
  PlateImage,
  VegIndicatorRow,
  VegSquare,
  VegDot,
  TitleText,
  BadgesRow,
  RatingBadge,
  GlutenFreeBadge,
  DescriptionText,
  PriceTag,
  AddButton,
  QuantityControl,
  QtyBtn,
  QtyVal,
} from "./FoodCard.styled";

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
  rating: number;
  isGlutenFree: boolean;
  description: string;
  image: string;
  quantity: number;
  onAdd: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function FoodCard({
  id,
  name,
  price,
  isVeg,
  rating,
  isGlutenFree,
  description,
  image,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
}: FoodCardProps) {
  return (
    <CardContainer>
      {/* Floating overlapping plate image */}
      <PlateWrapper>
        <PlateImage src={image} alt={name} />
      </PlateWrapper>

      <div className=" flex flex-col mt-[10px] gap-[2px]">
        {/* Veg symbol & Title */}
        <VegIndicatorRow>
          {isVeg && (
            <VegSquare>
              <VegDot />
            </VegSquare>
          )}
          <TitleText>{name}</TitleText>
        </VegIndicatorRow>

        {/* Badges section */}
        <BadgesRow>
          <RatingBadge>
            <Star size={11} fill="#F4C454" stroke="#F4C454" />
            <Text variant="caption" weight={600} color="#FFFFFF">
              {rating}
            </Text>
          </RatingBadge>
          {isGlutenFree && (
            <GlutenFreeBadge>
              <Leaf
                size={10}
                fill="#FFFFFF"
                color="#FFFFFF"
                style={{ flexShrink: 0 }}
              />
              Gluten Free
            </GlutenFreeBadge>
          )}
        </BadgesRow>

        {/* Description text */}
        <DescriptionText>{description}</DescriptionText>

        {/* Price tag */}
        <PriceTag>Rs {price}</PriceTag>
      </div>
      {/* Cart quantity control triggers */}
      {quantity > 0 ? (
        <QuantityControl>
          <QtyBtn
            onClick={onDecrease}
            aria-label="Decrease quantity"
            type="button"
          >
            <Minus size={14} strokeWidth={3} />
          </QtyBtn>
          <QtyVal>{String(quantity).padStart(2, "0")}</QtyVal>
          <QtyBtn
            onClick={onIncrease}
            aria-label="Increase quantity"
            type="button"
          >
            <Plus size={14} strokeWidth={3} />
          </QtyBtn>
        </QuantityControl>
      ) : (
        <AddButton onClick={onAdd} aria-label="Add to cart" type="button">
          <Plus size={24} strokeWidth={2.5} />
        </AddButton>
      )}
    </CardContainer>
  );
}
