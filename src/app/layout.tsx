import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Awareness, medicine & affordable bionics`,
    template: `%s | ${site.name}`,
  },
  description: site.motto,
};

export const viewport: Viewport = {
  themeColor: "#0f2a2e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col overflow-x-hidden">
        <MotionProvider>
          <Navbar />
          <main className="flex-1 overflow-x-clip">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
