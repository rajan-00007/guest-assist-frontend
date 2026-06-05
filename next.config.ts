import type { NextConfig } from "next";
// @ts-ignore
import withPWAInit from "next-pwa";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
};

const finalConfig = isDev
  ? nextConfig
  : withPWAInit({
      dest: "public",
      register: true,
      skipWaiting: true,
    })(nextConfig);

export default finalConfig;
