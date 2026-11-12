import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
export default {
  images: { unoptimized: true },
  // Корень проекта не зависит от того, из какой папки запущен сервер
  env: { PROJECT_ROOT: root },
  distDir: process.env.DIST_DIR || '.next', // отдельная папка для проверочной сборки
  webpack: (config) => {
    // pdfjs-dist пытается подключить node-canvas; в браузере он не нужен
    config.resolve.alias.canvas = false;
    return config;
  },
};
