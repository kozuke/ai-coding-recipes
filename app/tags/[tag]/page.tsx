import React from 'react';
import { getAllTags, getTipsByTag, Tip } from '../../../lib/tags';
import TagPageClient from './TagPageClient';
import { getAllTips } from '../../../lib/tips';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function generateStaticParams() {
  try {
    const tipsDirectory = path.join(process.cwd(), 'content/tips');
    console.log('Tips directory for static generation:', tipsDirectory);
    
    const fileNames = fs.readdirSync(tipsDirectory);
    console.log('Files found for static generation:', fileNames);
    
    const allTags = new Set();
    
    fileNames.forEach(fileName => {
      if (!fileName.endsWith('.md')) return;
      
      try {
        const fullPath = path.join(tipsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        
        if (matterResult.data.tags && Array.isArray(matterResult.data.tags)) {
          matterResult.data.tags.forEach(tag => {
            if (tag) allTags.add(tag.trim());
          });
        }
      } catch (error) {
        console.error(`Error processing file ${fileName}:`, error);
      }
    });
    
    const uniqueTags = [...allTags];
    console.log('Static generation - unique tags:', uniqueTags);
    
    const encodedParams = uniqueTags.map(tag => {
      const encoded = encodeURIComponent(tag);
      console.log(`Encoding tag: "${tag}" -> "${encoded}"`);
      return { tag: encoded };
    });
    
    console.log('Static generation - encoded params:', encodedParams);
    return encodedParams;
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
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
