import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    viteSingleFile({
      useRecommendedBuildConfig: true,
      removeViteModuleLoader: true,
    }),
    {
      name: 'dev-html-serve',
      apply: 'serve',
      transformIndexHtml() {
        return fs.readFileSync(path.resolve(__dirname, 'index.dev.html'), 'utf8');
      },
    },
    {
      name: 'copy-to-root',
      apply: 'build',
      closeBundle() {
        const srcFile = fs.existsSync(path.resolve(__dirname, 'dist/index.dev.html'))
          ? path.resolve(__dirname, 'dist/index.dev.html')
          : path.resolve(__dirname, 'dist/index.html');
        const rootFile = path.resolve(__dirname, 'index.html');
        if (fs.existsSync(srcFile)) {
          const content = fs.readFileSync(srcFile, 'utf8');
          // Reliably relocate script to end of body avoiding RegExp replacement pattern expansion ($&, $', etc.)
          const scriptMatch = content.match(/<script[\s\S]*?<\/script>/i);
          if (scriptMatch && scriptMatch.index !== undefined) {
            const originalScript = scriptMatch[0];
            const scriptBody = originalScript
              .replace(/^<script\b[^>]*>/i, '')
              .replace(/<\/script>$/i, '');
            const withoutScript = content.slice(0, scriptMatch.index) + content.slice(scriptMatch.index + originalScript.length);
            const bodyCloseIdx = withoutScript.lastIndexOf('</body>');
            const finalHtml = bodyCloseIdx !== -1
              ? withoutScript.slice(0, bodyCloseIdx) + `<script>\n${scriptBody}\n</script>\n` + withoutScript.slice(bodyCloseIdx)
              : withoutScript + `<script>\n${scriptBody}\n</script>`;
            fs.writeFileSync(rootFile, finalHtml, 'utf8');
            console.log('[copy-to-root] Standalone index.html successfully configured for direct local opening!');
          }
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.dev.html'),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: false,
    host: true,
  },
});
