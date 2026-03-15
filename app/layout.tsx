import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PSR — Развиваем цифровые продукты",
  description:
    "Мы упаковываем сложные смыслы в премиальный дизайн, разрабатываем отраслевые операционные системы и выстраиваем каналы продаж для стартапов, крупного бизнеса и государства.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

