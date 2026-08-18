import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marcoflores.cl"),
  title: "Marco Flores | Portafolio",
  description: "Portafolio de Marco Flores, Analista TI y Desarrollador Salesforce especializado en BI, automatización e integración de sistemas.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${archivo.variable} ${spaceGrotesk.variable}`}>{children}</body></html>;
}
