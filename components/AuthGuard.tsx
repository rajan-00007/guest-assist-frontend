"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/store/useAuthStore";
import styled from "styled-components";

const GuardSpinnerContainer = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #ffffff;

  @media (max-width: 440px) {
    max-width: 100%;
    height: 100dvh;
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #0052F7;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: #a0aec0;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, initialize } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initialize();
    setLoading(false);
  }, [initialize]);

  useEffect(() => {
    if (loading) return;

    const isAuthRoute = pathname === "/auth";
    const isRootRoute = pathname === "/";

    if (!isLoggedIn && !isAuthRoute) {
      router.replace("/auth");
    } else if (isLoggedIn && (isAuthRoute || isRootRoute)) {
      router.replace("/story");
    } else if (!isLoggedIn && isRootRoute) {
      router.replace("/auth");
    }
  }, [isLoggedIn, pathname, loading, router]);

  if (loading) {
    return (
      <GuardSpinnerContainer>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </GuardSpinnerContainer>
    );
  }

  const isAuthRoute = pathname === "/auth";
  const isRootRoute = pathname === "/";

  // Prevent flash of protected content during redirection
  if (!isLoggedIn && !isAuthRoute) {
    return (
      <GuardSpinnerContainer>
        <Spinner />
        <LoadingText>Redirecting to login...</LoadingText>
      </GuardSpinnerContainer>
    );
  }

  // Prevent flash of auth page during redirection if already logged in
  if (isLoggedIn && (isAuthRoute || isRootRoute)) {
    return (
      <GuardSpinnerContainer>
        <Spinner />
        <LoadingText>Redirecting to stories...</LoadingText>
      </GuardSpinnerContainer>
    );
  }

  return <>{children}</>;
}
