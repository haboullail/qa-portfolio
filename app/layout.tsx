import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import { LanguageProvider } from "@/components/LanguageProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hamza Aboullail | QA Engineer & DevOps",
  description:
    "Portfolio de Hamza Aboullail — QA Engineer spécialisé en tests fonctionnels, tests API, automatisation et DevOps CI/CD.",
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

        <Analytics />
      </body>
    </html>
  );
}
