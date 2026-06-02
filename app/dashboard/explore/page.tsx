"use client";
import React from "react";
import Text from "@/components/styles/text/Text";
import styled from "styled-components";
import { Compass } from "lucide-react";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #000000;
  color: #ffffff;
  box-sizing: border-box;
`;

export default function ExplorePage() {
  return (
    <PageContainer>
      <Compass size={48} color="#0052F7" style={{ marginBottom: "16px" }} />
      <Text variant="sectionTitle" weight={700}>Explore Area</Text>
      <Text variant="bodySecondary" color="#94A3B8" align="center" style={{ marginTop: "8px", maxWidth: "280px" }}>
        Discover local attractions and luxury excursions recommended by concierge. Coming soon!
      </Text>
    </PageContainer>
  );
}
