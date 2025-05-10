import React from 'react';
import { getAllTags, getTipsByTag, Tip } from '../../../lib/tags';
import TagPageClient from './TagPageClient';
import { getAllTips } from '../../../lib/tips';

export function generateStaticParams() {
  const tags = getAllTips().flatMap(tip => tip.tags || []);
  const uniqueTags = [...new Set(tags)];
  
  console.log('Static generation - raw tags:', uniqueTags);
  
  const normalizedTags = uniqueTags.map(tag => tag.trim());
  
  const encodedParams = normalizedTags.map(tag => {
    const encoded = encodeURIComponent(tag);
    console.log(`Encoding tag: "${tag}" -> "${encoded}"`);
    return { tag: encoded };
  });
  
  console.log('Static generation - encoded params:', encodedParams);
  return encodedParams;
}

type Props = {
  params: { tag: string };
};

export default function TagPage({ params }: Props) {
  const { tag } = params;
  
  const recursiveDecodeURIComponent = (encodedStr: string): string => {
    try {
      const decoded = decodeURIComponent(encodedStr);
      return decoded.includes('%') ? recursiveDecodeURIComponent(decoded) : decoded;
    } catch (e) {
      console.error('Decoding error:', e);
      return encodedStr;
    }
  };
  
  console.log('Server: Tag before decode:', tag);
  const decodedTag = recursiveDecodeURIComponent(tag);
  console.log('Server: Tag after recursive decode:', decodedTag);
  
  const allTips = getAllTips();
  console.log('Server: All tips count:', allTips.length);
  
  const normalizedTag = decodedTag.trim();
  console.log('Server: Normalized tag:', normalizedTag);
  
  const tips = allTips.filter((tip) => {
    if (!tip.tags || !Array.isArray(tip.tags)) return false;
    
    const matchingTags = tip.tags.filter(t => {
      const normalizedTipTag = t.trim();
      const isMatch = normalizedTipTag === normalizedTag;
      console.log(`Comparing: "${normalizedTipTag}" with "${normalizedTag}" = ${isMatch}`);
      return isMatch;
    });
    
    return matchingTags.length > 0;
  });
  
  console.log('Server: Filtered tips count:', tips.length);
  console.log('Server: Filtered tips:', tips.map(t => t.title));

  return <TagPageClient decodedTag={decodedTag} tips={tips} />;
}
