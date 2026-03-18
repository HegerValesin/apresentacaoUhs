import type { Metadata } from "next";
import "./globals.css";

<link
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
      rel="stylesheet"
/>

export const metadata: Metadata = {
  title: "Apresentação UHS",
  description: "Apresentação unificada em uma única página"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
