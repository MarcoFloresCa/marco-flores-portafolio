import { OrionCaseStudy } from "../../../components/OrionCaseStudy";
import { Breadcrumbs, SiteFooter, SiteHeader } from "../../../components/SiteChrome";
import { createPageMetadata } from "../../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Case study · Asistente para entender la lógica de Salesforce",
  description:
    "Orion: arquitectura de un chatbot de consulta (solo lectura) que explica objetos, campos, relaciones, Flows, Triggers y reglas de validación de una organización Salesforce.",
  path: "/proyectos/orion",
  type: "article",
});

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
      <SiteHeader active="projects" />

      <section className="case-page-body">
        <Breadcrumbs items={[{ label: "Proyectos", href: "/proyectos" }, { label: "Orion" }]} />
        <OrionCaseStudy />
      </section>

      <SiteFooter />
    </main>
  );
}
