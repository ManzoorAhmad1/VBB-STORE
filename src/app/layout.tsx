import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VBB Store - Buy Verified Business Manager & WhatsApp Business API",
  description: "Purchase verified Facebook Business Managers, WhatsApp Business API accounts, and ad accounts. 100% verified, instant delivery, 24/7 support. Trusted by 10,000+ advertisers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.variable}>
      <body className={roboto.className}>
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}