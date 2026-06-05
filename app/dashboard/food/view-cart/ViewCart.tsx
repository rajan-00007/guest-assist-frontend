"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Plus, Minus, Edit2, ChevronDown, ChevronRight, Star, Leaf, Check } from "lucide-react";
import Text from "@/components/styles/text/Text";
import { StyledButton } from "@/components/styles/button/Button.Styled";
import { useCartStore } from "@/store/cartStore";
import FOOD_ITEMS from "../food_items.json";
import {
  CartWrapper,
  HeaderContainer,
  BackButton,
  TextStack,
  DeliveryInfoBar,
  DeliveryLeft,
  ClockIconCircle,
  ItemsListContainer,
  CartItemRow,
  ItemImage,
  ItemMiddle,
  ItemDescriptionWrapper,
  ItemBadgesRow,
  StarBadge,
  GFBadge,
  ItemRight,
  QuantityRow,
  QtySquareBtn,
  QuickActionsRow,
  PaymentSummaryBlock,
  SummaryRow,
  SummaryDivider,
  FooterPaymentBar,
  PayBtnContent,
  PayBtnLeft,
  PayBtnRight,
} from "./ViewCart.styled";

export default function ViewCart() {
  const router = useRouter();
  const { cart, increaseQuantity, decreaseQuantity } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Route back to main food menu page
  const handleGoBack = () => {
    router.push("/dashboard/food");
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  // Map card state to details inside JSON database
  const cartItems = FOOD_ITEMS.filter((item) => cart[item.id] > 0).map((item) => ({
    ...item,
    quantity: cart[item.id],
  }));

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = subtotal * 0.05; // 5% GST matching mockup style
  const roomDiningFee = subtotal > 0 ? 5.00 : 0.00;
  const total = subtotal + gst + roomDiningFee;

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartWrapper>
      {/* Custom wine-maroon header */}
      <HeaderContainer>
        <BackButton onClick={handleGoBack} aria-label="Go back to menu">
          <ChevronLeft size={20} />
        </BackButton>
        <TextStack>
          <Text variant="bodyPrimary" weight={600} style={{ fontStyle: "italic", letterSpacing: "0.2px" }}>
            In-Room Dining Cart
          </Text>
          <Text variant="caption" weight={400} opacity={80} color="rgba(255, 255, 255, 0.7)">
            Executive Suite 402
          </Text>
        </TextStack>
      </HeaderContainer>

      {cartItems.length > 0 ? (
        <>
          {/* Delivery speed bar */}
          <DeliveryInfoBar>
            <DeliveryLeft>
              <ClockIconCircle>
                <Check size={12} strokeWidth={4} />
              </ClockIconCircle>
              <Text variant="bodySecondary" weight={600} color="#FFFFFF">
                Delivery in 23 mins
              </Text>
            </DeliveryLeft>
            <Text variant="caption" weight={500} color="#71717A">
              {String(totalItemsCount).padStart(2, "0")} Items
            </Text>
          </DeliveryInfoBar>

          {/* Scrolling items list */}
          <ItemsListContainer >
            {cartItems.map((item) => (
              <CartItemRow key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                
                <ItemMiddle>
                  <Text variant="bodySecondary" weight={600} color="#FFFFFF" lineHeight="1.2">
                    {item.name}
                  </Text>
                  <ItemDescriptionWrapper>
                    <Text variant="bodySmall" color="#71717A" lineHeight="1.3">
                      {item.description}
                    </Text>
                  </ItemDescriptionWrapper>
                  <ItemBadgesRow>
                    <StarBadge>
                      <Star size={9} fill="#FFFFFF" color="#FFFFFF" />
                      <Text variant="bodyTiny" weight={600} color="#FFFFFF" style={{ marginLeft: "2px" }}>
                        {item.rating}
                      </Text>
                    </StarBadge>
                    {item.isGlutenFree && (
                      <GFBadge>
                        <Leaf size={9} fill="#FFFFFF" color="#FFFFFF" />
                        <Text variant="bodyTiny" weight={600} color="#FFFFFF" style={{ marginLeft: "2px" }}>
                          Gluten Free
                        </Text>
                      </GFBadge>
                    )}
                  </ItemBadgesRow>
                </ItemMiddle>

                <ItemRight>
                  <Text variant="bodySecondary" weight={600} color="#FFFFFF">
                    ₹ {item.price}
                  </Text>
                  
                  {/* Quantity Modifier */}
                  <QuantityRow>
                    <QtySquareBtn onClick={() => decreaseQuantity(item.id)} aria-label="Decrease quantity" type="button">
                      <Minus size={14} strokeWidth={3} />
                    </QtySquareBtn>
                    <Text variant="bodySecondary" weight={600} color="#FFFFFF" align="center" style={{ minWidth: "18px" }}>
                      {String(item.quantity).padStart(2, "0")}
                    </Text>
                    <QtySquareBtn onClick={() => increaseQuantity(item.id)} aria-label="Increase quantity" type="button">
                      <Plus size={14} strokeWidth={3} />
                    </QtySquareBtn>
                  </QuantityRow>
                </ItemRight>
              </CartItemRow>
            ))}

            {/* Quick Actions Row */}
            <QuickActionsRow   >
              <StyledButton
                variant="dark"
                bgColor="transparent"
                textColor="#0052F7"
                strokeColor="rgba(255, 255, 255, 0.4)"
                radius="8px"
                height="42px"
                width="42%"
                onClick={handleGoBack}
                type="button"
              >
                <Plus size={15} strokeWidth={2.5} style={{ marginRight: "4px" }} />
                Add items
              </StyledButton>

              <StyledButton
                variant="dark"
                bgColor="transparent"
                textColor="#FFFFFF"
                strokeColor="rgba(255, 255, 255, 0.4)"
                radius="8px"
                height="42px"
                width="56%"
                onClick={() => alert("Cooking requests opened!")}
                type="button"
              >
                <Edit2 size={13} style={{ marginRight: "4px" }} />
                Cooking requests
              </StyledButton>
            </QuickActionsRow>
          </ItemsListContainer>

          {/* Payment summary table block */}
          <PaymentSummaryBlock >
            <Text variant="bodyPrimary" weight={500} color="#FFFFFF" style={{ marginBottom: "4px", display: "block" }}>
              Payment Summary
            </Text>
            
            <SummaryRow>
              <Text variant="bodySecondary" opacity={50} weight={400}>Subtotal</Text>
              <Text variant="bodySecondary" color="#FFFFFF" weight={500}>₹ {subtotal.toFixed(2)}</Text>
            </SummaryRow>

            <SummaryRow>
              <Text variant="bodySecondary" opacity={50}  weight={400}>GST</Text>
              <Text variant="bodySecondary" color="#FFFFFF" weight={500}>₹ {gst.toFixed(2)}</Text>
            </SummaryRow>

            <SummaryRow>
              <Text variant="bodySecondary" opacity={50}  weight={400}>Room Dinning</Text>
              <Text variant="bodySecondary" color="#FFFFFF" weight={500}>₹ {roomDiningFee.toFixed(2)}</Text>
            </SummaryRow>

            <SummaryDivider />

            <SummaryRow style={{ marginTop: "4px" }}>
              <Text variant="bodyPrimary" opacity={50}  weight={500}>Total Amount</Text>
              <Text variant="sectionTitle" color="#22C55E" weight={500}>₹ {total.toFixed(2)}</Text>
            </SummaryRow>
          </PaymentSummaryBlock>

          {/* Bottom pay action bar */}
          <FooterPaymentBar>
            <StyledButton
              bgColor="#0052F7"
              textColor="#FFFFFF"
              radius="8px"
              height="56px"
              width="100%"
              onClick={() => alert(`Proceeding to pay ₹ ${total.toFixed(2)} via Paytm UPI`)}
              type="button"
            >
              <PayBtnContent>
                <PayBtnLeft>
                  <Text variant="caption" weight={500} color="#FFFFFF">Paytm UPI</Text>
                  <ChevronDown size={16} strokeWidth={2.5} />
                </PayBtnLeft>
                <PayBtnRight>
                  <Text variant="bodyPrimary" weight={500} color="#FFFFFF">₹ {total.toFixed(2)}</Text>
                  <ChevronRight size={16} strokeWidth={2.5} />
                </PayBtnRight>
              </PayBtnContent>
            </StyledButton>
          </FooterPaymentBar>
        </>
      ) : (
        /* Empty Cart State Layout */
        <ItemsListContainer style={{ justifyContent: "center", alignItems: "center", gap: "16px" }}>
          <Text variant="sectionTitle" weight={600} align="center">
            Your Cart is Empty
          </Text>
          <Text variant="bodySecondary" color="#71717A" align="center" style={{ maxWidth: "250px" }}>
            Add some chef-crafted meals to your cart to begin ordering.
          </Text>
          <StyledButton
            bgColor="#520B24"
            textColor="#FFFFFF"
            radius="8px"
            height="42px"
            onClick={handleGoBack}
            type="button"
            style={{ marginTop: "8px" }}
          >
            Browse Food Menu
          </StyledButton>
        </ItemsListContainer>
      )}
    </CartWrapper>
  );
}
