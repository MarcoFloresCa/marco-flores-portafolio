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

export default function OrionPage() {
  return (
    <main className="case-page">
      <InteriorHeader />

      <section className="case-page-body">
        <Link className="case-back" href="/#proyectos">← Volver a proyectos</Link>
        <OrionCaseStudy />
      </section>

      <InteriorFooter />
    </main>
  );
}
