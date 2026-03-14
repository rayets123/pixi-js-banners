import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  resolve: {
    alias: {
      "client/themes/styled": path.resolve(__dirname, "src/stubs/styled.ts"),
      "@easycasino/shared/shared-config": path.resolve(
        __dirname,
        "src/stubs/shared-config.ts"
      ),
      "@easycasino/shared/utils/getStaticFilePath": path.resolve(
        __dirname,
        "src/stubs/getStaticFilePath.ts"
      )
    }
  },
  root: ".",
  build: {
    outDir: "dist"
  }
});
