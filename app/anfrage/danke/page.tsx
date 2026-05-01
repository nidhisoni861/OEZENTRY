import type { Metadata } from "next";
import ThankYouInquiry from "@/components/inquiry/ThankYouInquiry";

export const metadata: Metadata = {
  title: "Vielen Dank – OEZENTRY",
  description: "Deine Anfrage wurde erfolgreich gesendet.",
};

export default function DankePage() {
  return <ThankYouInquiry />;
}
