import Link from "next/link";
import { Breadcrumbs, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Artículos sobre Salesforce, Apex e integraciones",
  description: "Artículos técnicos de Marco Flores sobre Salesforce, Apex, LWC, SOQL, APIs REST, automatización e integración de sistemas.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="case-page topic-page">
      <SiteHeader active="articles" />
      <div className="topic-page-body">
        <Breadcrumbs items={[{ label: "Artículos" }]} />
        <header className="topic-hero compact">
          <p className="eyebrow"><span /> Notas técnicas</p>
          <h1>Salesforce explicado desde la implementación</h1>
          <p>Patrones, decisiones y errores comunes documentados a partir de experiencia práctica, con ejemplos genéricos y sin información privada.</p>
        </header>

        <section className="article-index" aria-label="Artículos técnicos">
          <article>
            <p className="section-kicker">Apex · Integraciones REST</p>
            <h2><Link href="/blog/integraciones-rest-desde-apex">Cómo organizar integraciones REST desde Apex</Link></h2>
            <p>Responsabilidades, autenticación, DTOs, manejo de errores, límites y pruebas para evitar una clase monolítica difícil de mantener.</p>
            <Link className="text-link" href="/blog/integraciones-rest-desde-apex">Leer artículo →</Link>
          </article>
          <article>
            <p className="section-kicker">Salesforce · Google Drive</p>
            <h2><Link href="/proyectos/google-drive-salesforce">Integración server-to-server con JWT Bearer</Link></h2>
            <p>El flujo completo entre Salesforce, OAuth 2.0 y Google Drive API explicado como caso técnico.</p>
            <Link className="text-link" href="/proyectos/google-drive-salesforce">Leer caso →</Link>
          </article>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
