require('esbuild').build({
  entryPoints: ['src/App.tsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'dist/out.js',
}).catch(() => process.exit(1))
