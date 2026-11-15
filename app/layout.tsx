import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shehzad Shaikh | Developer",
  description: 
    "Software developer building web applications and low-level software",
};

export default function RootLayout({
    children 
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
