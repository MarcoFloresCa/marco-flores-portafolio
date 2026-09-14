import type { Metadata } from "next";
import Link from "next/link";
import { InteriorFooter, InteriorHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacidad y términos · Marco Flores",
  description:
    "Política de privacidad y términos del sitio marcoflores.cl, portafolio profesional de Marco Flores, Salesforce Developer en Chile.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="case-page topic-page">
      <InteriorHeader />
      <article className="article-page">
        <nav className="breadcrumbs" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>/</span><span>Privacidad</span></nav>
        <header className="article-hero">
          <p className="eyebrow"><span /> Información del sitio</p>
          <h1>Privacidad y términos</h1>
          <p>Lo que este sitio recopila, cómo se usa y las condiciones bajo las que se comparte su contenido.</p>
        </header>

        <section className="article-section"><h2>Datos personales</h2><p>Este sitio no solicita ni almacena datos personales por su cuenta. No hay formularios de registro ni de contacto que guarden información. Si me escribes por correo, LinkedIn, GitHub o WhatsApp, la conversación queda fuera del sitio y no se transfiere a terceros.</p></section>

        <section className="article-section"><h2>Información técnica</h2><p>El sitio puede registrar información técnica estándar de servidor, como dirección IP o datos de navegación, a través de la infraestructura de hosting y de servicios de análisis y seguridad. Esta información se usa de forma agregada para operación, seguridad y medición de tráfico, y no para identificarte personalmente.</p></section>

        <section className="article-section"><h2>Cookies</h2><p>Este sitio no utiliza cookies con fines publicitarios ni de seguimiento cruzado. Las cookies de sesión o técnicas que pudieran existir sirven exclusivamente para el funcionamiento del sitio.</p></section>

        <section className="article-section"><h2>Links externos</h2><p>Algunas páginas enlazan a sitios externos como LinkedIn, GitHub, la documentación de Salesforce, Google, Qlik y organismos técnicos (IETF). Cada enlace se abre en una pestaña nueva y no comparto información tuya con esos servicios.</p></section>

        <section className="article-section"><h2>Contacto</h2><p>Para consultas sobre esta política puedes escribir a <a href="mailto:marcoangeloflorescantillana@gmail.com">marcoangeloflorescantillana@gmail.com</a>.</p></section>

        <section className="article-section"><h2>Contenido del sitio</h2><p>Los textos, casos técnicos y demostraciones publicados en marcoflores.cl se comparten con fines profesionales y educativos. Los proyectos privados de clientes se describen a alto nivel y no incluyen datos, credenciales ni configuración confidencial. Está permitido citar el contenido indicando la fuente.</p></section>

        <section className="article-section"><h2>Cambios</h2><p>Esta página puede actualizarse cuando cambien las prácticas del sitio. La fecha de la última revisión se indica en la parte inferior.</p></section>

        <p className="article-updated"><time dateTime="2026-09-14">Última revisión: 14 de septiembre de 2026</time></p>

        <div className="article-next"><Link href="/">Volver al portafolio →</Link></div>
      </article>
      <InteriorFooter />
    </main>
  );
}