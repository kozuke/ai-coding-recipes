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
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const tips: Tip[] = getTipsByTag(decodedTag);

  return <TagPageClient decodedTag={decodedTag} tips={tips} />;
}
