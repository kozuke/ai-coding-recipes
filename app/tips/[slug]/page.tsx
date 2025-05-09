import React from 'react';
import Link from 'next/link';
import { getTipBySlug, getAllTips } from '../../../lib/tips';
import { markdownToHtml } from '../../../lib/markdown';
import Tag from '../../../components/ui/Tag';

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
      <article className="max-w-none">
        <h1 className="text-3xl font-bold mb-4">{tip.title}</h1>
        <div className="flex gap-2 mb-6">
          {tip.tags.map((tag) => (
            <Tag key={tag} name={tag} linkable={true} />
          ))}
        </div>
        <div className="text-sm text-gray-500 mb-6">
          作成日: {tip.created_at} | 更新日: {tip.updated_at}
        </div>
        <div 
          className="mt-6 prose prose-indigo prose-p:text-gray-600 prose-headings:text-gray-700 prose-a:text-blue-500 prose-code:bg-blue-50 prose-pre:bg-gray-50 max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
