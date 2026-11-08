import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    alternates: { canonical: "https://www.wellingtonjunior.dev/" },
    title: "Wellington Junior | Sites e aplicações web",
    description: "Criação de sites, landing pages e aplicações web para negócios. Desenvolvimento no Rio de Janeiro com atendimento remoto.",
    keywords: ["desenvolvedor web", "criação de sites", "aplicações web", "landing page", "Rio de Janeiro"],
    authors: [{ name: "Wellington Junior" }],
    openGraph: {
      title: "Wellington Junior | Sites que fazem negócios serem escolhidos",
      description: "Desenvolvimento de sites profissionais, rápidos e responsivos.",
      type: "website",
      locale: "pt_BR",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Portfólio de Wellington Junior, desenvolvedor web" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wellington Junior | Sites e aplicações web",
      description: "Sites profissionais para transformar presença digital em oportunidades.",
      images: [`${origin}/og.png`],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
