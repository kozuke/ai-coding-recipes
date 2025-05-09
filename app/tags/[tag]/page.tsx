import React from 'react';
import Link from 'next/link';
import { getTipsByTag } from '../../../lib/tags';
import { getAllTags } from '../../../lib/tags';

export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag,
  }));
}

type Props = {
  params: { tag: string }
}

export default function TagPage({ params }: Props) {
  const { tag } = params;
  const tips = getTipsByTag(tag);

  return (
    <div className="py-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:underline">
          ← トップページに戻る
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">タグ: {tag}</h1>
      
      {tips.length === 0 ? (
        <p className="text-gray-600">このタグが付いたTipsはまだありません。</p>
      ) : (
        <ul className="space-y-4">
          {tips.map((tip) => (
            <li key={tip.slug} className="border p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <Link href={`/tips/${tip.slug}`} className="block">
                <h3 className="text-xl font-semibold text-blue-600 hover:underline">{tip.title}</h3>
                <div className="text-sm text-gray-500 mt-1">
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
