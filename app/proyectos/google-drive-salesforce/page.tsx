import type { Metadata } from "next";
import Link from "next/link";
import { InteriorFooter, InteriorHeader } from "../../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Integración Salesforce con Google Drive mediante JWT",
  description:
    "Caso técnico de Marco Flores: arquitectura de una integración server-to-server entre Salesforce y Google Drive con Apex, JWT Bearer, RS256 y OAuth 2.0.",
  alternates: { canonical: "/proyectos/google-drive-salesforce" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Integración Salesforce con Google Drive mediante JWT Bearer",
  description: "Arquitectura server-to-server con Apex, OAuth 2.0, firma RS256 y Google Drive API.",
  dateModified: "2026-09-13",
  author: { "@id": "https://marcoflores.cl/#marco-flores" },
  mainEntityOfPage: "https://marcoflores.cl/proyectos/google-drive-salesforce",
};

export default function GoogleDriveSalesforcePage() {
  return (
    <main className="case-page topic-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <InteriorHeader />
      <article className="article-page">
        <nav className="breadcrumbs" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>/</span><Link href="/proyectos">Proyectos</Link><span>/</span><span>Google Drive</span></nav>
        <header className="article-hero">
          <p className="eyebrow"><span /> Caso técnico · Salesforce</p>
          <h1>Google Drive conectado con Salesforce mediante JWT Bearer</h1>
          <p>Una integración server-to-server para crear y organizar carpetas desde Salesforce sin depender de la sesión de un usuario.</p>
          <div className="topic-tags"><span>Apex</span><span>JWT / RS256</span><span>OAuth 2.0</span><span>Google Drive API</span></div>
        </header>

        <section className="article-section">
          <h2>El problema</h2>
          <p>Los documentos necesitaban una estructura consistente en Drive y una referencia trazable desde Salesforce. La creación manual de carpetas introducía nombres distintos, permisos difíciles de revisar y registros sin vínculo documental.</p>
        </section>

        <section className="article-section">
          <h2>Arquitectura de la integración</h2>
          <ol className="architecture-list">
            <li><strong>Salesforce inicia la operación.</strong><span>Apex recibe el registro y los datos necesarios para definir la ubicación documental.</span></li>
            <li><strong>Se construye una aserción JWT.</strong><span>El servidor firma con RS256 una solicitud de acceso de corta duración para la cuenta de servicio.</span></li>
            <li><strong>OAuth 2.0 entrega el token.</strong><span>La aserción se intercambia por un access token, sin pedir interacción a una persona.</span></li>
            <li><strong>Google Drive API crea la estructura.</strong><span>La integración localiza la carpeta padre, crea lo necesario y controla la respuesta HTTP.</span></li>
            <li><strong>Salesforce conserva la referencia.</strong><span>El identificador y el resultado quedan asociados al proceso para seguimiento y manejo de errores.</span></li>
          </ol>
        </section>

        <section className="article-section split">
          <div><h2>Decisiones técnicas</h2><p>Autenticación sin usuario, tokens de corta duración, permisos mínimos, separación entre autenticación y operación, y respuestas HTTP tratadas explícitamente.</p></div>
          <div><h2>Resultado</h2><p>Una estructura documental repetible desde Salesforce, con menos trabajo manual y una relación clara entre el registro de negocio y su carpeta en Drive.</p></div>
        </section>

        <aside className="article-note"><strong>Alcance público</strong><p>Este caso describe el patrón técnico y omite credenciales, nombres internos, datos y configuración privada de la organización.</p></aside>

        <section className="article-sources">
          <h2>Fuentes y referencias</h2>
          <ul>
            <li>
              <a href="https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_jwt_flow.htm" target="_blank" rel="noopener noreferrer">Salesforce · OAuth 2.0 JWT Bearer Flow</a>
              <span>Flujo de autenticación server-to-server usado por la cuenta de servicio.</span>
            </li>
            <li>
              <a href="https://www.rfc-editor.org/rfc/rfc7519" target="_blank" rel="noopener noreferrer">RFC 7519 · JSON Web Token (JWT)</a>
              <span>Formato de la aserción firmada con RS256 intercambiada por un access token.</span>
            </li>
            <li>
              <a href="https://developers.google.com/drive/api/reference/rest/v3" target="_blank" rel="noopener noreferrer">Google Drive API v3 · Reference</a>
              <span>Recurso Files y operaciones para crear y organizar la estructura documental.</span>
            </li>
            <li>
              <a href="https://developers.google.com/identity/protocols/oauth2/service-account" target="_blank" rel="noopener noreferrer">Google · OAuth 2.0 Service Accounts</a>
              <span>Autorización de la cuenta de servicio y ámbito de la integración.</span>
            </li>
          </ul>
        </section>

        <div className="article-next"><Link href="/blog/integraciones-rest-desde-apex">Continuar: cómo organizar integraciones REST desde Apex →</Link></div>
      </article>
      <InteriorFooter />
    </main>
  );
}
