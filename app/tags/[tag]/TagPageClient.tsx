'use client';

import React from 'react';
import Link from 'next/link';
import { Tip } from '../../../lib/tags';

interface TagPageClientProps {
  decodedTag: string;
  tips: Tip[];
}

export default function TagPageClient({ decodedTag, tips }: TagPageClientProps) {
  const displayTag = typeof decodedTag === 'string' && decodedTag.includes('%') 
    ? decodeURIComponent(decodedTag) 
    : decodedTag;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline inline-flex items-center">
          ← トップページに戻る
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8">タグ: {displayTag}</h1>

      {tips.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-foreground/60">このタグが付いたTipsはまだありません。</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {tips.map((tip) => (
            <article key={tip.slug} className="card p-6">
              <Link href={`/tips/${tip.slug}`}>
                <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                  {tip.title}
                </h3>
                <div className="text-sm text-foreground/60 mt-2">
                  {tip.created_at}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}