import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marcoflores.cl"),
  title: {
    default: "Marco Flores | Desarrollador Salesforce en Chile",
    template: "%s | Marco Flores",
  },
  description:
    "Desarrollador Salesforce y Analista TI en Mostazal, Región de O'Higgins, Chile, especializado en Apex, LWC, Flow, integraciones, automatización y Qlik Sense.",
  applicationName: "Portafolio de Marco Flores",
  authors: [{ name: "Marco Flores", url: "https://marcoflores.cl" }],
  creator: "Marco Flores",
  publisher: "Marco Flores",
  keywords: [
    "desarrollador Salesforce Chile",
    "Salesforce developer Chile",
    "consultor Salesforce",
    "especialista Salesforce",
    "Apex",
    "Lightning Web Components",
    "Salesforce Flow",
    "integraciones Salesforce",
    "analista TI Chile",
    "Salesforce developer Región de O'Higgins",
    "desarrollador Salesforce Sexta Región",
    "Qlik Sense",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    languages: { "es-CL": "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "Marco Flores | Desarrollador Salesforce",
    title: "Marco Flores | Desarrollador Salesforce en Chile",
    description:
      "Experiencia en Salesforce, Apex, LWC, Flow, automatización, integraciones y Business Intelligence.",
  },
  twitter: {
    card: "summary",
    title: "Marco Flores | Desarrollador Salesforce en Chile",
    description:
      "Experiencia en Salesforce, Apex, LWC, Flow, automatización, integraciones y Business Intelligence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://marcoflores.cl/#website",
  url: "https://marcoflores.cl",
  name: "Marco Flores | Salesforce Developer",
  inLanguage: "es-CL",
  publisher: { "@id": "https://marcoflores.cl/#marco-flores" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body className={`${archivo.variable} ${spaceGrotesk.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
