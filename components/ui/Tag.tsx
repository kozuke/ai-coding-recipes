import React from 'react';
import Link from 'next/link';

interface TagProps {
  name: string;
  linkable?: boolean;
}

export default function Tag({ name, linkable = false }: TagProps) {
  const tagContent = (
    <span className="tag">
      {name}
    </span>
  );

  if (linkable) {
    return (
      <Link href={`/tags/${encodeURIComponent(name)}`}>
        {tagContent}
      </Link>
    );
  }

  return tagContent;
}