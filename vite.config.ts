import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import CopyPlugin from 'vite-copy-plugin';
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      // 通过vite插件将dist目录复制到example/node_modules/hexo-oh-my-live2d/dist,实现热更新
      mode === 'dev' &&
        CopyPlugin([
          {
            from: './dist',
            to: './example/node_modules/hexo-ollama-excerpt/dist'
          }
        ]),
      VitePluginNode({
        appPath: './src/index.ts',
        tsCompiler: 'esbuild',
        adapter: params => {
          const { app, server, req, res, next } = params;
          console.log(app, server, req, res, next);
        }
      })
    ],
    build: {
      minify: 'esbuild',
      lib: {
        entry: 'src/index.ts',
        formats: ['cjs']
      }
    }
  };
});
