"use client";

import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import Header from "./Header";
import FoodBanners from "./FoodBanners";
import FoodCard from "@/components/dashboard/food/FoodCard";
import {
  PageContainer,
  FilterScrollRow,
  FilterOptionsBtn,
  FilterPill,
  ItemsSection,
  GridContainer,
  SectionTitleText,
} from "./FoodPage.styled";
import Text from "@/components/styles/text/Text";
import { useCartStore } from "@/store/cartStore";

import FOOD_ITEMS from "./food_items.json";

const CATEGORIES = ["Menu", "Recommended", "Ratings", "Self Pick-up"];

export default function FoodPage() {
  const [vegMode, setVegMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Recommended");
  
  // Extract cart state and actions from the Zustand store
  const { cart, addItem, increaseQuantity, decreaseQuantity } = useCartStore();

  // Filter items matching Veg Mode, Search query, and Category filters
  const filteredItems = FOOD_ITEMS.filter((item) => {
    if (vegMode && !item.isVeg) return false;
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedCategory && item.category !== selectedCategory) return false;
    return true;
  });

  return (
    <PageContainer>
      <Header
        vegMode={vegMode}
        onVegModeChange={setVegMode}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <FoodBanners />

      {/* Category scrolling selector */}
      <FilterScrollRow>
        <FilterOptionsBtn onClick={() => alert("Filter Options opened!")} aria-label="Open filter settings">
          <SlidersHorizontal size={16} />
        </FilterOptionsBtn>
        {CATEGORIES.map((cat) => (
          <FilterPill
            key={cat}
            $active={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </FilterPill>
        ))}
      </FilterScrollRow>

      {/* Grid container of food items */}
      <ItemsSection>
        {selectedCategory === "Recommended" && (
          <SectionTitleText>Popular Items</SectionTitleText>
        )}

        {filteredItems.length > 0 ? (
          <GridContainer>
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                isVeg={item.isVeg}
                rating={item.rating}
                isGlutenFree={item.isGlutenFree}
                description={item.description}
                image={item.image}
                quantity={cart[item.id] || 0}
                onAdd={() => addItem(item.id)}
                onIncrease={() => increaseQuantity(item.id)}
                onDecrease={() => decreaseQuantity(item.id)}
              />
            ))}
          </GridContainer>
        ) : (
          <div style={{ padding: "60px 0", textAlign: "center", opacity: 0.5, fontSize: "14px" }}>
            No items found under this category.
          </div>
        )}
      </ItemsSection>
    </PageContainer>
  );
}
