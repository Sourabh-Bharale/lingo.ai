import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { secondaryFont } from "@/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Lingo.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={secondaryFont.className}>
        <TanstackQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative">
              <Header />
              <main className="px-4 md:px-16">{children}</main>
              <Toaster richColors closeButton />
            </div>
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
