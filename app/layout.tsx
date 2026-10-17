import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import Script from "next/script";
import "lenis/dist/lenis.css";
import "./globals.css";
import "../components/layout/site-header.css";
import "../components/sections/hero.css";
import "../components/sections/landing-sections.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

const displayFont = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Staryes × Bar Lamanna",
  description: "Landing page Staryes × Bar Lamanna.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <head>
        <Script id="staryes-motion-bootstrap" strategy="beforeInteractive">
          {`if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            document.documentElement.dataset.staryesMotion = "pending";
            window.setTimeout(() => {
              if (document.documentElement.dataset.staryesMotion === "pending") {
                delete document.documentElement.dataset.staryesMotion;
              }
            }, 2800);
          }`}
        </Script>
      </head>
      <body className="min-h-full">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
