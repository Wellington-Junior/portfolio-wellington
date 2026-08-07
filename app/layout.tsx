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
    title: "Wellington Junior | Desenvolvedor Front-end",
    description: "Sites profissionais, landing pages e interfaces responsivas para pequenos negócios. Desenvolvimento front-end no Rio de Janeiro e atendimento remoto.",
    keywords: ["desenvolvedor front-end", "criação de sites", "landing page", "React", "Rio de Janeiro"],
    authors: [{ name: "Wellington Junior" }],
    openGraph: {
      title: "Wellington Junior | Sites que fazem negócios serem escolhidos",
      description: "Desenvolvimento de sites profissionais, rápidos e responsivos.",
      type: "website",
      locale: "pt_BR",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Portfólio de Wellington Junior, Desenvolvedor Front-end" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wellington Junior | Desenvolvedor Front-end",
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
