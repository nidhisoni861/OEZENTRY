import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import InquiryForm from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "Serviceanfrage – OEZENTRY",
  description: "Stelle deine Serviceanfrage bei OEZENTRY KFZ-Service.",
};

export default function AnfragePage() {
  return (
    <>
      <Header />
      <InquiryForm />
    </>
  );
}
