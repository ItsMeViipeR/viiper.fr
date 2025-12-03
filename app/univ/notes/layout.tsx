import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculateur de moyenne Paris 8",
  description: "Calculez votre moyenne par semestre et pour l'année",
};

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen text-black bg-gradient-to-b from-purple-800 to-blue-900">
      <div className="relative z-10">{children}</div>
    </div>
  );
}
