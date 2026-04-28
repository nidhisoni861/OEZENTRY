import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OEZENTRY – KFZ Service Pocking",
  description:
    "Professioneller KFZ-Service in Pocking, Bayern. Chip Tuning, Schlüsselprogrammierung, Xentry Codierung & mehr — präzise ausgeführt, transparent kommuniziert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={poppins.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
