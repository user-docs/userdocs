const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: [
      "./src/actions.ts",
      "./src/recordable.ts",
      "./src/recorder.ts",
      "./src/background.ts",
      "./src/content.ts",
      "./src/parser.ts",
      "./src/devtools.ts"
    ],
    bundle: true,
    //minify: true,
    sourcemap: process.env.NODE_ENV !== "production",
    outdir: "./public/dist",
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`
    }
  })
  .catch(() => process.exit(1));