'use client';

import React from 'react';
import ReadingProgress from '../../../components/ReadingProgress';

type TipPageClientProps = {
  children: React.ReactNode;
};

export default function TipPageClient({ children }: TipPageClientProps) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
