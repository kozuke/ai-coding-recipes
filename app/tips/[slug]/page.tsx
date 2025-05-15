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
  const { slug } = await params;
  const tip = getTipBySlug(slug);

  if (!tip) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6">Tipが見つかりませんでした</h2>
        <Link href="/" className="text-primary hover:underline">
          トップページに戻る
        </Link>
      </div>
    );
  }

  const contentHtml = await markdownToHtml(tip.content);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline inline-flex items-center">
          ← トップページに戻る
        </Link>
      </div>
      
      <article className="card p-8">
        <h1 className="text-4xl font-bold mb-6">{tip.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tip.tags.map((tag) => (
            <Tag key={tag} name={tag} linkable={true} />
          ))}
        </div>
        
        <div className="text-sm text-foreground/60 mb-8">
          作成日: {tip.created_at} | 更新日: {tip.updated_at}
        </div>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none markdown-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}