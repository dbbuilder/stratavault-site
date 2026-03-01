import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strata Vault — Private AI for Every Organization",
  description:
    "Strata Vault gives every organization a secure, isolated AI knowledge base built from its own documents. For consultants and MSPs, it's a platform you can bring to your clients.",
  openGraph: {
    title: "Strata Vault — Private AI for Every Organization",
    description:
      "Secure, isolated AI knowledge base for organizations. Consultant partner program for MSPs and vCIOs.",
    url: "https://stratavault.ai",
    siteName: "Strata Vault",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} antialiased bg-[#0f172a] text-[#f8fafc]`}>
        {children}
      </body>
    </html>
  );
}
