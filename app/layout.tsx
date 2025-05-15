import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Link from 'next/link';

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
    <html lang="ja" className={inter.className}>
      <body>
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-foreground/10">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  AI Coding Recipes
                </h1>
              </Link>
              <div className="text-sm text-foreground/60">
                AI駆動開発Tipsコレクションサイト
              </div>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-foreground/10 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
            <p>&copy; {new Date().getFullYear()} AI Coding Recipes</p>
          </div>
        </footer>
      </body>
    </html>
  );
}