// tailwind.config.ts
import type { Config } from 'tailwindcss';
import path from 'path';

const config: Config = {
  content: [path.join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Golos Text Variable', 'Arial', 'sans-serif'],
        display: ['Literata Variable', 'Georgia', 'serif'],
      },
      colors: {
        tezaika: {
          navy: '#1F2436',       // Основной темно-синий из логотипа
          'navy-light': '#2A314A',
          sage: '#9EB196',       // Шалфейный зеленый из знака
          'sage-hover': '#8B9F83',
          'sage-light': '#EBF0E9', // Мягкий фон плашек
          paper: '#FAF9F6',      // Теплый фоновый "крафт"
          card: '#FFFFFF',
          border: '#E8E5DF',     // Мягкие разделители
          muted: '#636A77',      // описания и подсказки (контраст 5.4:1 на белом)
          'sage-dark': '#5A6E52', // зелёный для текста и акцентов на светлом фоне (контраст 5:1)
        },
      },
      borderRadius: {
        'bento': '20px',
      },
      boxShadow: {
        'tactile': '0 4px 20px -2px rgba(31, 36, 54, 0.06), 0 2px 6px -1px rgba(31, 36, 54, 0.04)',
        'tactile-hover': '0 12px 30px -4px rgba(31, 36, 54, 0.12), 0 4px 10px -2px rgba(31, 36, 54, 0.06)',
      }
    },
  },
  plugins: [],
};

export default config;
