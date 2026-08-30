import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:"Love Pact · 恋爱契约",
  description:"让承诺有边界，让关系更坦诚。"
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}