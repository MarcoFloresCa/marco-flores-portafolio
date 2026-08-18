import "./cloudflare-env.ts";
import { cloudflare } from "@cloudflare/vite-plugin";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";
import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig(async () => {
  return {
    server: {
      host: "127.0.0.1",
      allowedHosts: ["terminal.local"],
    },
    plugins: [
      vinext({ images: { optimizer: imagesOptimizer() } }),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        inspectorPort: false,
      }),
    ],
  };
});
