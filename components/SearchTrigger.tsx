'use client';

import React, { useState, useEffect } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import SearchModal from './SearchModal';

export default function SearchTrigger() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  useHotkeys('mod+k', (e) => {
    e.preventDefault();
    setIsSearchOpen(true);
  });
  
  return (
    <>
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}
