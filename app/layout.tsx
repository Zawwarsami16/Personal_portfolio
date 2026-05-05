import type { Metadata, Viewport } from "next";
import { inter, cormorant, jetbrains } from "@/lib/fonts";
import { baseMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, cormorant.variable, jetbrains.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-dvh font-sans antialiased grain">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
