import type { Metadata } from "next";
import Link from "next/link";
import { OrionCaseStudy } from "../../../components/OrionCaseStudy";

export const metadata: Metadata = {
  title: "Case study · Asistente para entender la lógica de Salesforce",
  description:
    "Orion: arquitectura de un chatbot de consulta (solo lectura) que explica objetos, campos, relaciones, Flows, Triggers y reglas de validación de una organización Salesforce.",
  alternates: {
    canonical: "/proyectos/orion",
  },
};

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function OrionPage() {
  return (
    <main className="case-page">
      <header className="site-header">
        <Link className="brand" href="/#inicio" aria-label="Marco Flores, inicio">Marco Flores</Link>
        <nav aria-label="Navegación principal">
          <Link className="nav-featured" href="/#proyectos">Proyectos</Link>
          <Link href="/#perfil">Perfil</Link>
          <Link href="/#experiencia">Trayectoria</Link>
        </nav>
        <Link className="header-contact" href="/#contacto">Hablemos <ArrowIcon /></Link>
      </header>

      <section className="case-page-body">
        <Link className="case-back" href="/#proyectos">← Volver a proyectos</Link>
        <OrionCaseStudy />
      </section>

      <footer>
        <Link className="brand" href="/#inicio">Marco Flores</Link>
        <p>Marco Flores Cantillana · Mostazal, Chile</p>
        <Link href="/#inicio">Volver arriba ↑</Link>
      </footer>
    </main>
  );
}