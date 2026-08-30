import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "恋爱契约 · Love Pact",
  description: "给彼此一份认真而浪漫的约定。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}