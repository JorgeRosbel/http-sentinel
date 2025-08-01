import { defineConfig } from 'tsup';
import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  minify: true,
  clean: true,
  outDir: 'dist',
  outExtension() {
    return {
      js: '.mjs',
    };
  },
  esbuildPlugins: [TsconfigPathsPlugin({})],
});
