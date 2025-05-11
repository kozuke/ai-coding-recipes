import React from 'react';
import Link from 'next/link';

interface TagProps {
  name: string;
  linkable?: boolean;
}

export default function Tag({ name, linkable = false }: TagProps) {
  const tagContent = (
    <span className="inline-block bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded mr-2 mb-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
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
