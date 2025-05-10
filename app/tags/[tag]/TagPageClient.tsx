'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Tip } from '../../../lib/tags';

interface TagPageClientProps {
  decodedTag: string;
  tips: Tip[];
}

async function fetchTipsByTag(tag: string): Promise<Tip[]> {
  try {
    const response = await fetch(`/api/tips/by-tag?tag=${encodeURIComponent(tag)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch tips: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tips:', error);
    return [];
  }
}

export default function TagPageClient({ decodedTag, tips: serverTips }: TagPageClientProps) {
  const [tips, setTips] = useState<Tip[]>(serverTips);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const displayTag = typeof decodedTag === 'string' && decodedTag.includes('%') 
    ? decodeURIComponent(decodedTag) 
    : decodedTag;
    
  useEffect(() => {
    console.log('Client: decodedTag:', decodedTag);
    console.log('Client: displayTag:', displayTag);
    console.log('Client: serverTips:', serverTips);
    
    if (serverTips.length === 0) {
      console.log('Client: サーバーサイドのtipsが空のため、クライアントサイドで再取得を試みます');
      
      try {
        const cachedData = localStorage.getItem(`tips-${displayTag}`);
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          console.log('Client: キャッシュからデータを取得:', parsedData);
          setTips(parsedData);
        }
      } catch (error) {
        console.error('Client: キャッシュ取得エラー:', error);
      }
      
      setIsLoading(true);
      fetchTipsByTag(displayTag)
        .then(fetchedTips => {
          console.log('Client: APIからデータを取得:', fetchedTips);
          if (fetchedTips.length > 0) {
            setTips(fetchedTips);
            try {
              localStorage.setItem(`tips-${displayTag}`, JSON.stringify(fetchedTips));
            } catch (error) {
              console.error('Client: キャッシュ保存エラー:', error);
            }
          }
        })
        .catch(error => {
          console.error('Client: データ取得エラー:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [decodedTag, displayTag, serverTips]);

  return (
    <div className="py-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:underline">
          ← トップページに戻る
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">タグ: {displayTag}</h1>

      {isLoading ? (
        <p className="text-gray-600">データを読み込み中...</p>
      ) : tips.length === 0 ? (
        <p className="text-gray-600">このタグが付いたTipsはまだありません。</p>
      ) : (
        <ul className="space-y-4">
          {tips.map((tip) => (
            <li
              key={tip.slug}
              className="border p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Link href={`/tips/${tip.slug}`} className="block">
                <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                  {tip.title}
                </h3>
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
