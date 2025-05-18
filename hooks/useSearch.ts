import { useState, useEffect, useMemo } from 'react';
import * as FlexSearch from 'flexsearch';

export type SearchItem = {
  slug: string;
  title: string;
  tags: string[];
  content: string;
  summary?: string;
};

export type SearchResult = {
  slug: string;
  title: string;
  tags: string[];
  summary?: string;
};

export function useSearch() {
  const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const index = useMemo(() => {
    const idx = new FlexSearch.Index({
      preset: 'performance',
      tokenize: 'full',
      cache: 100
    });
    
    if (searchIndex.length > 0) {
      searchIndex.forEach(item => {
        idx.add(
          item.slug,
          item.title + ' ' + item.tags.join(' ') + ' ' + item.content
        );
      });
    }
    
    return idx;
  }, [searchIndex]);
  
  useEffect(() => {
    async function loadSearchIndex() {
      try {
        setIsLoading(true);
        const response = await fetch('/search-index.json', {
          // キャッシュを無効化して常に最新のインデックスを取得
          cache: 'no-store'
        });
        
        if (!response.ok) {
          throw new Error('Failed to load search index');
        }
        
        const data = await response.json();
        setSearchIndex(data);
      } catch (err) {
        console.error('Error loading search index:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    }
    
    loadSearchIndex();
  }, []);
  
  const search = (query: string): SearchResult[] => {
    if (!query || isLoading || error) return [];
    
    try {
      const results = index.search(query, 10) as string[];
      
      const searchResults: SearchResult[] = [];
      
      if (results && results.length > 0) {
        const slugSet = new Set<string>();
        
        results.forEach(slug => {
          if (!slugSet.has(slug)) {
            slugSet.add(slug);
            const item = searchIndex.find(item => item.slug === slug);
            if (item) {
              searchResults.push({
                slug,
                title: item.title,
                tags: item.tags,
                summary: item.summary
              });
            }
          }
        });
      }
      
      return searchResults;
    } catch (err) {
      console.error('Error performing search:', err);
      return [];
    }
  };
  
  return { search, isLoading, error };
}
