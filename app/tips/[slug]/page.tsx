import React from 'react';
import Link from 'next/link';
import { getTipBySlug, getAllTips } from '../../../lib/tips';
import { markdownToHtml } from '../../../lib/markdown';

export function generateStaticParams() {
  const tips = getAllTips();
  return tips.map((tip) => ({
    slug: tip.slug,
  }));
}

type Props = {
  params: { slug: string }
}

export default async function TipPage({ params }: Props) {
  const tip = getTipBySlug(params.slug);

  if (!tip) {
    return (
      <div className="py-8">
        <h2 className="text-3xl font-bold mb-6">Tipが見つかりませんでした</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          トップページに戻る
        </Link>
      </div>
    );
  }

  const contentHtml = await markdownToHtml(tip.content);

  return (
    <div className="py-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:underline">
          ← トップページに戻る
        </Link>
      </div>
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-3xl font-bold mb-4">{tip.title}</h1>
        <div className="flex gap-2 mb-6">
          {tip.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500 mb-6">
          作成日: {tip.created_at} | 更新日: {tip.updated_at}
        </div>
        <div 
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
