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
      <div className="py-8">
        <h2 className="text-3xl font-bold mb-6">Tipが見つかりませんでした</h2>
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          トップページに戻る
        </Link>
      </div>
    );
  }

  const contentHtml = await markdownToHtml(tip.content);

  return (
    <div className="py-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
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
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          作成日: {tip.created_at} | 更新日: {tip.updated_at}
        </div>
        <div 
作成日: {tip.created_at} | 更新日: {tip.updated_at}
        </div>
        <div 
          className={styles.contentWrapper}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}

// TODO: Create a CSS module file (e.g., TipPage.module.css) and define the following class:
// .contentWrapper {
//   composes: mt-6 prose prose-indigo dark:prose-invert prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-headings:text-gray-700 dark:prose-headings:text-gray-200 prose-a:text-blue-500 dark:prose-a:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-gray-800 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 max-w-none;
// }

// TODO: Import the CSS module at the top of the file:
// import styles from './TipPage.module.css';
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
