import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitIgnore Generator — Create .gitignore Files Instantly",
  description:
    "Generate perfect .gitignore files for any project. Select your technologies and get a ready-to-use .gitignore in seconds. Supports 30+ languages, frameworks, and IDEs.",
  keywords:
    "gitignore generator, gitignore, git ignore, create gitignore, gitignore template, node gitignore, python gitignore, react gitignore",
  openGraph: {
    title: "GitIgnore Generator — Create .gitignore Files Instantly",
    description:
      "Generate perfect .gitignore files for any project. 30+ templates for languages, frameworks, and IDEs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
