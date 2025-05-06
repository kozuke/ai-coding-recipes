import React from 'react';
import Link from 'next/link';
import { getAllTips, Tip } from '../lib/tips';

const tipsList: Tip[] = [];

export default function Home() {
  const tips = getAllTips();

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6">Tips一覧</h2>
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
    </div>
  );
}
