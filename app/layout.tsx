import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import { LanguageProvider } from "@/components/LanguageProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hamza Aboullail | QA Analyst",
  description:
    "Portfolio de Hamza Aboullail, QA Analyst spécialisé en tests fonctionnels, API et automatisation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
