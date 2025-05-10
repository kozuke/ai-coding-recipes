import React from 'react';
import { getAllTags, getTipsByTag, Tip } from '../../../lib/tags';
import TagPageClient from './TagPageClient';
import { getAllTips } from '../../../lib/tips';

export function generateStaticParams() {
  const tags = getAllTags();
  console.log('Static generation - all tags:', tags);
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

type Props = {
  params: { tag: string };
};

export default function TagPage({ params }: Props) {
  const { tag } = params;
  const decodedTag = decodeURIComponent(tag);
  console.log('Server: Tag before decode:', tag);
  console.log('Server: Tag after decode:', decodedTag);
  
  const allTips = getAllTips();
  console.log('Server: All tips count:', allTips.length);
  
  const normalizedTag = decodedTag.trim();
  const tips = allTips.filter((tip) => {
    if (!tip.tags || !Array.isArray(tip.tags)) return false;
    return tip.tags.some(t => t.trim() === normalizedTag);
  });
  
  console.log('Server: Filtered tips count:', tips.length);
  console.log('Server: Filtered tips:', tips.map(t => t.title));

  return <TagPageClient decodedTag={decodedTag} tips={tips} />;
}
