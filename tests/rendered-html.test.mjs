import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker;
}

const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const ctx = {
  waitUntil() {},
  passThroughOnException() {},
};

test("renders the portfolio with security headers and SEO metadata", async () => {
  const worker = await loadWorker();

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    env,
    ctx,
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  const html = await response.text();
  assert.match(html, /<title>Marco Flores \| Desarrollador Salesforce en Chile<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/marcoflores\.cl"/i);
  assert.match(html, /<script type="application\/ld\+json">/i);
  assert.match(html, /"@type":"Person"/i);
  assert.match(html, />Marco Flores<\/a>/i);
  assert.match(html, /https:\/\/wa\.me\/56953994713\?text=/i);
  assert.match(html, /class="floating-whatsapp"/i);
  assert.match(html, /class="contact-constellation"/i);
  assert.match(html, /class="nav-featured"[^>]*href="#proyectos"/i);
  assert.doesNotMatch(html, /class="contact-expertise"/i);
  assert.doesNotMatch(html, />Scroll</i);
  assert.doesNotMatch(html, /QlikView/i);
  assert.match(html, /icons\/brands\/salesforce\.svg/i);
  assert.match(html, /icons\/brands\/whatsapp\.svg/i);
  assert.match(html, /icons\/brands\/qlik\.svg/i);
  assert.ok((html.match(/icons\/brands\/qlik\.svg/gi) ?? []).length >= 2);
  assert.match(html, /icons\/projects\/bot-assistant\.svg/i);
  assert.match(html, /href="\/marco-flores-cv\.pdf"[^>]*download="Marco Flores C\.pdf"/i);
  assert.match(html, /whatsapp-web\.js/i);
  assert.match(html, /Sistema-de-confirmaci-n-de-asistencia-por-Whatsapp-para-hospital/i);
  assert.match(html, />React<\/span>/i);
  assert.match(html, />Bruno<\/span>/i);
  assert.match(html, />Hardis<\/span>/i);
  assert.match(html, /\/proyectos\/orion/i);
  assert.match(html, />Ver case study/i);
  assert.doesNotMatch(html, /<video /i);
  assert.doesNotMatch(html, /El asistente que audita lo que dice/i);
});

test("renders the Orion case study page with videos", async () => {
  const worker = await loadWorker();

  const response = await worker.fetch(
    new Request("http://localhost/proyectos/orion", {
      headers: { accept: "text/html" },
    }),
    env,
    ctx,
  );

  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>[^<]*Asistente para entender la l[óo]gica de Salesforce[^<]*<\/title>/i);
  assert.match(html, /class="case-back"/i);
  assert.match(html, /href="\/#proyectos"/i);
  assert.match(html, /El asistente que audita lo que dice/i);
  assert.match(html, /Redacta el modelo, decide el c[oó]digo/i);
  assert.match(html, /Respuesta determinista/i);
  assert.match(html, /class="flow-track"/i);
  assert.match(html, /Post-validaci[oó]n/i);
  assert.match(html, />LWC<\/span>/i);
  assert.match(html, /Por qu[ée] es distinto/i);
  assert.match(html, /Preg[úu]ntale esto/i);
  assert.match(html, /Cómo funciona<\/p>/i);
  assert.equal((html.match(/<video /gi) ?? []).length, 7);
  assert.ok((html.match(/preload="metadata"/gi) ?? []).length >= 7);
  ["motor-de-diagnostico", "asistente-contextual", "definiciones-de-diagnostico", "historial-de-chat", "orion-knowledge", "sla", "paneles-de-gobierno"].forEach((slug) => {
    assert.match(html, new RegExp(`src="\\/videos\\/${slug}\\.mp4"`, "i"));
  });
});

test("exposes robots.txt and sitemap.xml", async () => {
  const worker = await loadWorker();
  const robotsResponse = await worker.fetch(new Request("http://localhost/robots.txt"), env, ctx);
  const sitemapResponse = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);

assert.equal(robotsResponse.status, 200);
  assert.match(await robotsResponse.text(), /Sitemap: https:\/\/marcoflores\.cl\/sitemap\.xml/i);
  assert.equal(sitemapResponse.status, 200);
  const sitemapText = await sitemapResponse.text();
  assert.match(sitemapText, /<loc>https:\/\/marcoflores\.cl<\/loc>/i);
  assert.match(sitemapText, /<loc>https:\/\/marcoflores\.cl\/proyectos\/orion<\/loc>/i);
});

test("includes the downloadable public assets", async () => {
  const assets = [
    "marco-flores-cv.pdf",
    "favicon.svg",
    "icons/brands/salesforce.svg",
    "icons/brands/whatsapp.svg",
    "icons/brands/qlik.svg",
    "icons/projects/bot-assistant.svg",
    "icons/projects/drive-sync.svg",
    "icons/projects/asset-trace.svg",
    "icons/systems/integration-nodes.svg",
    "icons/systems/code-automation.svg",
    "videos/motor-de-diagnostico.mp4",
    "videos/asistente-contextual.mp4",
    "videos/definiciones-de-diagnostico.mp4",
    "videos/historial-de-chat.mp4",
    "videos/orion-knowledge.mp4",
    "videos/sla.mp4",
    "videos/paneles-de-gobierno.mp4",
  ];

  await Promise.all(assets.map((asset) => access(new URL(`../public/${asset}`, import.meta.url))));
});
