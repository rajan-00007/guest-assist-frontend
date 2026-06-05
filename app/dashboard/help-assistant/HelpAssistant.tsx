"use client";

import React, { useState } from "react";
import { Mic, Send, Keyboard, X } from "lucide-react";
import Text from "@/components/styles/text/Text";
import { StyledButton } from "@/components/styles/button/Button.Styled";
import {
  AssistantWrapper,
  MainContent,
  IridescentOrb,
  CenterPrompt,
  ChatArea,
  BubbleRow,
  MessageBubble,
  BottomInputArea,
  CustomInputBar,
  CustomInput,
  ActionIconButton,
  ControlsCircleRow,
  KeyboardIconBtn,
  BigMicBtn,
  CloseIconBtn
} from "./HelpAssistant.styled";

type UIState = "PROMPT" | "CONVERSATION" | "VOICE";

export default function HelpAssistant() {
  const [uiState, setUiState] = useState<UIState>("PROMPT");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "user" | "assistant"; text: string }>>([
    { sender: "user", text: "Send someone to fix the AC." },
    { sender: "assistant", text: "Maintenance assigned. Technician arriving in 15 minutes." }
  ]);

  const handleActionClick = () => {
    if (inputText.trim() === "") {
      // Microphone mode: open Voice Assistant
      setUiState("VOICE");
    } else {
      // Send mode: add message & transition to conversation view
      const userQuery = inputText.trim();
      
      // Update message history
      setMessages([
        { sender: "user", text: userQuery },
        { sender: "assistant", text: "Analyzing your request... One moment." }
      ]);
      
      setInputText("");
      setUiState("CONVERSATION");

      // Simulate a custom reply
      setTimeout(() => {
        setMessages([
          { sender: "user", text: userQuery },
          { sender: "assistant", text: `I have notified the guest relations manager about: "${userQuery}".` }
        ]);
      }, 1500);
    }
  };

  return (
    <AssistantWrapper>
      {/* State 1: Prompt Mode */}
      {uiState === "PROMPT" && (
        <MainContent>
          <IridescentOrb />
          <CenterPrompt>
            <Text variant="sectionTitle" weight={600} color="#FFFFFF">
              What can i help With?
            </Text>
          </CenterPrompt>

          <BottomInputArea>
            <CustomInputBar>
              <CustomInput
                type="text"
                placeholder="Ask me anyhting"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleActionClick()}
              />
              <ActionIconButton $white onClick={handleActionClick} aria-label={inputText.trim() === "" ? "Open voice menu" : "Send text"}>
                {inputText.trim() === "" ? <Mic size={16} /> : <Send size={16} />}
              </ActionIconButton>
            </CustomInputBar>
          </BottomInputArea>
        </MainContent>
      )}

      {/* State 2: Conversation View */}
      {uiState === "CONVERSATION" && (
        <MainContent style={{ justifyContent: "flex-start" }}>
          <ChatArea>
            {messages.map((msg, idx) => (
              <BubbleRow key={idx} $right={msg.sender === "user"}>
                <MessageBubble $user={msg.sender === "user"}>
                  {msg.text}
                </MessageBubble>
              </BubbleRow>
            ))}
          </ChatArea>

          <BottomInputArea>
            <CustomInputBar>
              <CustomInput
                type="text"
                placeholder="Ask me anything"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleActionClick()}
              />
              <ActionIconButton onClick={handleActionClick} aria-label={inputText.trim() === "" ? "Open voice menu" : "Send text"}>
                {inputText.trim() === "" ? <Mic size={16} /> : <Send size={16} />}
              </ActionIconButton>
            </CustomInputBar>
          </BottomInputArea>
        </MainContent>
      )}

      {/* State 3: Voice Assistant Listening (Frame 4) */}
      {uiState === "VOICE" && (
        <MainContent>
          <IridescentOrb $large />
          
          <ControlsCircleRow>
            {/* Keyboard Mode */}
            <KeyboardIconBtn onClick={() => setUiState("CONVERSATION")} aria-label="Switch to keyboard">
              <Keyboard size={20} />
            </KeyboardIconBtn>

            {/* Mic Center */}
            <BigMicBtn onClick={() => alert("Listening for speech request...")} aria-label="Voice listening trigger">
              <Mic size={28} />
            </BigMicBtn>

            {/* Close assistant */}
            <CloseIconBtn onClick={() => setUiState("PROMPT")} aria-label="Close assistant">
              <X size={20} />
            </CloseIconBtn>
          </ControlsCircleRow>
        </MainContent>
      )}
    </AssistantWrapper>
  );
}
