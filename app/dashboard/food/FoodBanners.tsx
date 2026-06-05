import React, { useEffect, useRef, useState } from "react";
import FoodBannerCard from "@/components/dashboard/food/FoodBannerCard";
import { BannersContainer } from "./FoodBanners.styled";

const bannerItems = [
  {
    id: 1,
    title: "Tasty",
    name: "Dosai/Masala dosai",
    image: "/assets/dosa.png",
    gradient: "linear-gradient(103.87deg, #E84739 31.75%, #EC6A3E 100%)",
    buttonTextColor: "#E84739",
  },
  {
    id: 2,
    title: "Tasty",
    name: "Dosai/Masala dosai",
    image: "/assets/dosa.png", // Using dosa image or other matching food
    gradient: "linear-gradient(103.87deg, #1D7B75 31.75%, #57A8A3 100%)",
    buttonTextColor: "#1D7B75",
  },
  {
    id: 3,
    title: "Rich",
    name: "Paneer/Butter Naan",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop",
    gradient: "linear-gradient(103.87deg, #028090 31.75%, #00798C 100%)",
    buttonTextColor: "#028090",
  },
  {
    id: 4,
    title: "Fresh",
    name: "Healthy/Greek Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
    gradient: "linear-gradient(103.87deg, #11998e 31.75%, #38ef7d 100%)",
    buttonTextColor: "#11998e",
  },
  {
    id: 5,
    title: "Sweet",
    name: "Lava Cake/Vanilla Icecream",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
    gradient: "linear-gradient(103.87deg, #8E2DE2 31.75%, #4A00E0 100%)",
    buttonTextColor: "#4A00E0",
  },
];

export default function FoodBanners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (name: string) => {
    alert(`Opened menu for ${name}`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!containerRef.current) return;

      const totalBanners = bannerItems.length;
      const nextIndex = (activeIndex + 1) % totalBanners;

      // Card width (290px) + Gap (16px) = 306px
      const cardWidth = 306;

      containerRef.current.scrollTo({
        left: nextIndex * cardWidth,
        behavior: "smooth",
      });

      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // Sync scroll state on manual scroll triggers
  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = 306;
    const index = Math.round(scrollLeft / cardWidth);
    if (index !== activeIndex && index >= 0 && index < bannerItems.length) {
      setActiveIndex(index);
    }
  };

  return (
    <BannersContainer ref={containerRef} onScroll={handleScroll}>
      {bannerItems.map((item) => (
        <FoodBannerCard
          key={item.id}
          title={item.title}
          name={item.name}
          image={item.image}
          gradient={item.gradient}
          buttonTextColor={item.buttonTextColor}
          onClick={() => handleCardClick(item.name)}
        />
      ))}
    </BannersContainer>
  );
}
