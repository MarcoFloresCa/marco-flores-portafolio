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
});

test("exposes robots.txt and sitemap.xml", async () => {
  const worker = await loadWorker();
  const robotsResponse = await worker.fetch(new Request("http://localhost/robots.txt"), env, ctx);
  const sitemapResponse = await worker.fetch(new Request("http://localhost/sitemap.xml"), env, ctx);

  assert.equal(robotsResponse.status, 200);
  assert.match(await robotsResponse.text(), /Sitemap: https:\/\/marcoflores\.cl\/sitemap\.xml/i);
  assert.equal(sitemapResponse.status, 200);
  assert.match(await sitemapResponse.text(), /<loc>https:\/\/marcoflores\.cl<\/loc>/i);
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
  ];

  await Promise.all(assets.map((asset) => access(new URL(`../public/${asset}`, import.meta.url))));
});
