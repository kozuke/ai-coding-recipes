import React from 'react';
import Link from 'next/link';
import { getAllTips } from '../lib/tips';
import Tag from '../components/ui/Tag';

export default function Home() {
  const tips = getAllTips();

  return (
    <div className="space-y-8">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          AI Coding Recipes
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          AIを活用した開発のベストプラクティスとTipsを集めたコレクションサイト
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">最新のTips</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {tips.map((tip) => (
            <article key={tip.slug} className="card p-6">
              <Link href={`/tips/${tip.slug}`} className="block">
                <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                  {tip.title}
                </h3>
                <div className="text-sm text-foreground/60 mt-2">
                  {tip.created_at}
                </div>
              </Link>
              {tip.tags && tip.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tip.tags.map((tag) => (
                    <Tag key={`${tip.slug}-${tag}`} name={tag} linkable={true} />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}