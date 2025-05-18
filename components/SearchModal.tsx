'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearch, SearchResult } from '../hooks/useSearch';
import Tag from './ui/Tag';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const { search, isLoading } = useSearch();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (searchQuery.trim()) {
      const searchResults = search(searchQuery);
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [searchQuery, search]);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prevIndex => 
          prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prevIndex => 
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
        break;
      case 'Enter':
        if (results[selectedIndex]) {
          e.preventDefault();
          router.push(`/tips/${results[selectedIndex].slug}`);
          onClose();
        }
        break;
    }
  };
  
  useEffect(() => {
    const selectedElement = document.getElementById(`search-result-${selectedIndex}`);
    if (selectedElement && resultsContainerRef.current) {
      selectedElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }
  }, [selectedIndex]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* オーバーレイ */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* モーダルコンテンツ */}
      <div className="relative w-full max-w-2xl bg-background border border-foreground/10 rounded-lg shadow-xl overflow-hidden">
        {/* 検索入力 */}
        <div className="p-4 border-b border-foreground/10">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="記事を検索..."
              className="w-full px-4 py-2 pl-10 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg 
              className="absolute left-3 top-2.5 h-5 w-5 text-foreground/50" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>
        
        {/* 検索結果 */}
        <div 
          ref={resultsContainerRef}
          className="max-h-[60vh] overflow-y-auto"
        >
          {isLoading ? (
            <div className="p-4 text-center text-foreground/50">
              読み込み中...
            </div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((result, index) => (
                <li 
                  key={result.slug}
                  id={`search-result-${index}`}
                  className={`p-4 hover:bg-foreground/5 cursor-pointer ${
                    selectedIndex === index ? 'bg-foreground/10' : ''
                  }`}
                  onClick={() => {
                    router.push(`/tips/${result.slug}`);
                    onClose();
                  }}
                >
                  <h3 className="text-lg font-medium mb-1">
                    {result.title}
                  </h3>
                  
                  {result.summary && (
                    <p className="text-sm text-foreground/70 mb-2 line-clamp-2">
                      {result.summary}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {result.tags.map(tag => (
                      <Tag 
                        key={`${result.slug}-${tag}`}
                        name={tag} 
                        linkable={false}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          ) : searchQuery.trim() ? (
            <div className="p-4 text-center text-foreground/50">
              検索結果が見つかりませんでした
            </div>
          ) : (
            <div className="p-4 text-center text-foreground/50">
              検索キーワードを入力してください
            </div>
          )}
        </div>
        
        {/* キーボードナビゲーションヘルプ */}
        <div className="p-3 border-t border-foreground/10 bg-muted/30 text-xs text-foreground/60 flex justify-between">
          <div>
            <span className="px-1.5 py-0.5 bg-foreground/10 rounded mr-1">↑</span>
            <span className="px-1.5 py-0.5 bg-foreground/10 rounded mr-2">↓</span>
            <span>移動</span>
          </div>
          <div>
            <span className="px-1.5 py-0.5 bg-foreground/10 rounded mr-2">Enter</span>
            <span>選択</span>
          </div>
          <div>
            <span className="px-1.5 py-0.5 bg-foreground/10 rounded mr-2">Esc</span>
            <span>閉じる</span>
          </div>
        </div>
      </div>
    </div>
  );
}
