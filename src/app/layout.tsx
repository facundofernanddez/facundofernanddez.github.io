import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/ThemeProvider";
import LanguageProvider from "./components/LanguageProvider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facundo's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-500 dark:selection:bg-gray-800`}
      >
        <LanguageProvider>
          <Provider>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow footer">
              {children}
            </main>
            <Footer />
          </Provider>
        </LanguageProvider>
      </body>
    </html>
  );
}
