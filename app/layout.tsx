import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Coding Recipes',
  description: 'AI駆動開発Tipsコレクションサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">AI Coding Recipes</h1>
            <p className="text-sm">AI駆動開発Tipsコレクションサイト</p>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600 dark:text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} AI Coding Recipes
          </div>
        </footer>
      </body>
    </html>
  );
}
