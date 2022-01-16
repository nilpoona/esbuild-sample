require('esbuild').serve({
  port: 3333,
  servedir: 'www',
},{
  entryPoints: ['src/App.tsx'],
  bundle: true,
  outdir: 'www/js',
})
