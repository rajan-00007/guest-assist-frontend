"use client";

import React, { useState, useEffect } from "react";
import { Wallet, Percent, Download, ConciergeBell } from "lucide-react";
import FoodMenuFilledIcon from "@iconify-react/boxicons/food-menu-filled";
import Text from "@/components/styles/text/Text";
import PayNow from "./PayNow";
import SplitBill from "./SplitBill";
import DownloadBill from "./DownloadBill";
import RaiseIssue from "./RaiseIssue";
import BillPaySuccess from "./BillPaySuccess";
import {
  BillContainer,
  DottedCard,
  AmountSection,
  ActionsCard,
  ActionItem,
  ActionIconWrapper,
  ActivityContainer,
  ActivityTitleRow,
  ActivityRow,
  ActivityLeft,
  ActivityIconCircle,
  ActivityTextStack,
} from "./BillPay.styled";

type TabType = "pay" | "split" | "download" | "issue";

const activities = [
  { id: 1, title: "Room Service – Dinner", time: "Oct 24 12:10 Pm", amount: "$5,99" },
  { id: 2, title: "Room Service – Dinner", time: "Oct 24 12:10 Pm", amount: "$5,99" },
  { id: 3, title: "Room Service – Dinner", time: "Oct 24 12:10 Pm", amount: "$5,99" },
  { id: 4, title: "Room Service – Dinner", time: "Oct 24 12:10 Pm", amount: "$5,99" },
  { id: 5, title: "Room Service – Dinner", time: "Oct 24 12:10 Pm", amount: "$5,99" },
];

const BillPay = () => {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isIssueOpen, setIsIssueOpen] = useState(false);
  
  // Set to true to display the success screen, false for default screen
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector("main");
    if (!scrollContainer) return;

    if (isDownloadOpen || isIssueOpen) {
      scrollContainer.style.overflowY = "hidden";
    } else {
      scrollContainer.style.overflowY = "auto";
    }

    return () => {
      scrollContainer.style.overflowY = "auto";
    };
  }, [isDownloadOpen, isIssueOpen]);

  if (isPaid) {
    return <BillPaySuccess onClose={() => setIsPaid(false)} />;
  }

  const handleTabClick = (tab: TabType) => {
    setActiveTab((prev) => (prev === tab ? null : tab));
  };

  const renderActiveScreen = () => {
    switch (activeTab) {
      case "pay":
        return <PayNow onBack={() => setActiveTab(null)} />;
      case "split":
        return <SplitBill />;
      default:
        return null;
    }
  };

  return (
    <BillContainer>
      <DottedCard>
        {/* Balance Amount display section */}
        <AmountSection>
          <Text variant="sectionTitle" opacity={70} align="center" weight={400}>
            Total Amount Due
          </Text>
          <Text variant="billAmount" weight={500} align="center">
            $8.22
          </Text>
        </AmountSection>

        {/* Action Quick Links / Tab Bar */}
        <ActionsCard>
          <ActionItem onClick={() => handleTabClick("pay")}>
            <ActionIconWrapper $active={activeTab === "pay"}>
              <Wallet size={20} strokeWidth={activeTab === "pay" ? 2.5 : 2} />
            </ActionIconWrapper>
            <Text variant="caption" color={activeTab === "pay" ? "#FFFFFF" : "#A1A1AA"} weight={activeTab === "pay" ? 600 : 500}>
              Pay Now
            </Text>
          </ActionItem>

          <ActionItem onClick={() => handleTabClick("split")}>
            <ActionIconWrapper $active={activeTab === "split"}>
              <Percent size={20} strokeWidth={activeTab === "split" ? 2.5 : 2} />
            </ActionIconWrapper>
            <Text variant="caption" color={activeTab === "split" ? "#FFFFFF" : "#A1A1AA"} weight={activeTab === "split" ? 600 : 500}>
              Split Bill
            </Text>
          </ActionItem>

          <ActionItem onClick={() => setIsDownloadOpen(true)}>
            <ActionIconWrapper $active={false}>
              <Download size={20} strokeWidth={2} />
            </ActionIconWrapper>
            <Text variant="caption" color="#A1A1AA" weight={500}>
              Download
            </Text>
          </ActionItem>

          <ActionItem onClick={() => setIsIssueOpen(true)}>
            <ActionIconWrapper $active={false}>
              <ConciergeBell size={20} strokeWidth={2} />
            </ActionIconWrapper>
            <Text variant="caption" color="#A1A1AA" weight={500}>
              Raise Issue
            </Text>
          </ActionItem>
        </ActionsCard>
      </DottedCard>

      {/* Dynamic Tab Screen or Recent Activity */}
      {activeTab !== null ? (
        renderActiveScreen()
      ) : (
        <ActivityContainer>
          <ActivityTitleRow>
            <Text variant="sectionTitle" weight={600} color="#FFFFFF">
              Recent Activity
            </Text>
          </ActivityTitleRow>

          {activities.map((activity) => (
            <ActivityRow key={activity.id}>
              <ActivityLeft>
                <ActivityIconCircle>
                  <FoodMenuFilledIcon width="22" height="22" style={{ color: "white" }} />
                </ActivityIconCircle>
                <ActivityTextStack>
                  <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
                    {activity.title}
                  </Text>
                  <Text variant="caption" color="#71717A" weight={400}>
                    {activity.time}
                  </Text>
                </ActivityTextStack>
              </ActivityLeft>
              <Text variant="bodyPrimary" weight={500} color="#FFFFFF">
                {activity.amount}
              </Text>
            </ActivityRow>
          ))}
        </ActivityContainer>
      )}

      {/* Full Screen Dialog overlay */}
      {isDownloadOpen && (
        <DownloadBill onBack={() => setIsDownloadOpen(false)} />
      )}

      {isIssueOpen && (
        <RaiseIssue onBack={() => setIsIssueOpen(false)} />
      )}
    </BillContainer>
  );
};

export default BillPay;
