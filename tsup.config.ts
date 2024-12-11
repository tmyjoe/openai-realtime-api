import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/node/index.ts'],
    outDir: 'dist',
    target: 'node18',
    platform: 'node',
    format: ['cjs', 'esm'],
    clean: true,
    splitting: false,
    sourcemap: true,
    minify: false,
    shims: true,
    dts: true
  }
])
