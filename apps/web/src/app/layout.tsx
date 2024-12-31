import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "./providers";

const dmReg = localFont({
  src: "./fonts/DMMono-Regular.ttf",
  variable: "--font-dm-mono-req",
});

const dmMed = localFont({
  src: "./fonts/DMMono-Medium.ttf",
  variable: "--font-dm-mono-med",
});

// const monaReg = localFont({
//   src: "./fonts/Mona-Sans-Regular.ttf",
//   variable: "--font-mona-sans-req",
// });

// const monaMed = localFont({
//   src: "./fonts/Mona-Sans-Medium.ttf",
//   variable: "--font-mona-sans-med",
// });

export const metadata: Metadata = {
  title: "Opensox",
  description: "Find the perfect open source project to contribute",
  icons: {
    icon: "/images/os-image.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmMed.variable} ${dmReg.variable} antialiased bg-background`}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
