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
  
  console.log('Client: decodedTag:', decodedTag);
  console.log('Client: displayTag:', displayTag);
  console.log('Client: tips:', tips);

  return (
    <div className="py-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← トップページに戻る
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">タグ: {displayTag}</h1>

      {tips.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">このタグが付いたTipsはまだありません。</p>
      ) : (
        <ul className="space-y-4">
          {tips.map((tip) => (
            <li
              key={tip.slug}
              className="border dark:border-gray-700 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Link href={`/tips/${tip.slug}`} className="block">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  {tip.title}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  作成日: {tip.created_at}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
