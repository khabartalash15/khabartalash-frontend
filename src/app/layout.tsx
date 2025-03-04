import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/Appbar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khabartalash",
  description: "Connecting People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-2006686999800306"
        ></meta>
      </head>
      <body
        className={`max-w-full ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Appbar />
        <div className="min-h-screen flex-col overflow-x-clip">
          <Container>{children}</Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
