import assert from "node:assert/strict";
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
