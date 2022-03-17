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
    outdir: "../../../priv/static/assets/extension/dist",
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`
    },
    plugins: [copyFilePlugin({
      after: {
        '../../../priv/static/assets/js/extension/manifest.json': './manifest.json'
      }
    })],
    watch: {
      onRebuild(error, result) {
        if (error) console.error('watch build failed:', error)
        else console.log('watch build succeeded:', result)
      },
    },
  })
  .catch(() => process.exit(1));