import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Invoice Smart Categorizer – Auto-categorize for Tax Filing",
  description: "AI categorizes your Stripe transactions into IRS business expense categories. Connect Stripe, review, and export tax-ready reports in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0a6a292d-72dd-4611-ab7d-6798f257e696"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
