import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Hippo | Digital Marketplace",
  description: "Your one stop for innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="relative h-full font-sans antialiased">
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          {/** Adding flex-grow flex-1 helps specify elements to take up available space
           * Even if multiple elements have flex-grow: 1, they will share the extra available space
           * when used flex-1 to all elements in a container it makes each element:
           * -Start with zero width (flex-basis: 0%).
            -Grow equally to share the available space (flex-grow: 1).
            -Shrink equally when space is tight (flex-shrink: 1).
           */}
          <div className="flex-grow flex-1">{children} </div>
        </main>
      </body>
    </html>
  );
}
