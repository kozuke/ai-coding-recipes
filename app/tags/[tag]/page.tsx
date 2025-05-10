import React from 'react';
import { getAllTags, getTipsByTag, Tip } from '../../../lib/tags';
import TagPageClient from './TagPageClient';

export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

type Props = {
  params: { tag: string };
};

export default async function TagPage({ params }: Props) {
  const { tag } = params;
  const decodedTag = decodeURIComponent(tag);
  console.log('Server: Tag before decode:', tag);
  console.log('Server: Tag after decode:', decodedTag);
  
  const tips: Tip[] = getTipsByTag(decodedTag);
  console.log('Server: Found tips count:', tips.length);

  return <TagPageClient decodedTag={decodedTag} tips={tips} />;
}
