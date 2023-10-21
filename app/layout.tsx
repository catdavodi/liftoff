import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chameleon - Instantly Tailor Your Resume",
  openGraph: {
    title: "Chameleon - Instantly Tailor Your Resume",
    description:
      "Chameleon - Instantly Tailor Your Resume",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chameleon - Instantly Tailor Your Resume",
    description:
      "Chameleon - Instantly Tailor Your Resume",
  },
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
