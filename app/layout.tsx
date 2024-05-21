import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { cn } from "@/lib/utils";
import { SideBar } from "./components/SideBar";
import { AppConfig } from "@/app.config";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'h-dvh flex flex-col')}>
        {''}
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <Header />
          </Suspense>
          <main className="flex flex-1">
            <Suspense>
              <SideBar />
            </Suspense>
            <div className="flex-1 bg-muted/30">
              <Suspense>{children}</Suspense>
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
