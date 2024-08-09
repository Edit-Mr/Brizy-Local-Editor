import { defaultThemeAttr } from "@/components/Metronic/layout/core/_LayoutConfig";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Next App + Brizy Local",
  description: "Brizy Local Builder",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" data-bs-theme="light">
      <body {...defaultThemeAttr}>{children}</body>
    </html>
  );
}
