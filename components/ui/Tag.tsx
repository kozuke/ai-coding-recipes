import React from 'react';

interface TagProps {
  name: string;
}

export default function Tag({ name }: TagProps) {
  return (
    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-2 mb-1">
      {name}
    </span>
  );
}
