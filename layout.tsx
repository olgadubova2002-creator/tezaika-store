// src/app/layout.tsx
import { ScrollToTop } from '@/components/common/ScrollToTop';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-tezaika-paper text-tezaika-navy font-sans antialiased min-h-screen flex flex-col justify-between">
        {/* Шапка сайта (Хедер) */}
        <header id="site-header">
          {/* Контент хедера */}
        </header>

        {/* Основной контент страницы */}
        <main className="flex-1">
          {children}
        </main>

        {/* Подвал сайта (Футер) */}
        <footer>
          {/* Контент футера */}
        </footer>

        {/* Глобальная кнопка быстрого возврата к хедеру */}
        <ScrollToTop />
      </body>
    </html>
  );
}