import type { Metadata } from "next";
import Link from "next/link";
import { OrionCaseStudy } from "../../../components/OrionCaseStudy";
import { InteriorFooter, InteriorHeader } from "../../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Case study · Asistente para entender la lógica de Salesforce",
  description:
    "Orion: arquitectura de un chatbot de consulta (solo lectura) que explica objetos, campos, relaciones, Flows, Triggers y reglas de validación de una organización Salesforce.",
  alternates: {
    canonical: "/proyectos/orion",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Orion — Asistente para entender la lógica de Salesforce",
  description:
    "Chatbot de consulta solo lectura que explica objetos, campos, relaciones, Flows, Triggers y reglas de validación de una organización Salesforce con respuestas ancladas en la metadata vigente.",
  datePublished: "2026-09-13",
  dateModified: "2026-09-13",
  author: { "@id": "https://marcoflores.cl/#marco-flores" },
  mainEntityOfPage: "https://marcoflores.cl/proyectos/orion",
  proficiencyLevel: "Advanced",
};

export default function OrionPage() {
  return (
    <main className="case-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <InteriorHeader />

      <section className="case-page-body">
        <Link className="case-back" href="/#proyectos">← Volver a proyectos</Link>
        <OrionCaseStudy />
      </section>

      <InteriorFooter />
    </main>
  );
}
