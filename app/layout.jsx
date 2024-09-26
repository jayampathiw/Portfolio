// app/layout.js

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/stairTransition";
import { DataProvider } from "../contexts/DataContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Jayampathy Portfolio",
  description: "Jayampathy Wijesena Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <DataProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </DataProvider>
      </body>
    </html>
  );
}
