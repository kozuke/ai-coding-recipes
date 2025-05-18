'use client';

import React, { useState, useEffect } from 'react';

export default function ReadingProgress() {
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const updateReadingProgress = () => {
      const currentPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentPosition / scrollHeight).toFixed(2)) * 100);
      }
    };
    
    window.addEventListener('scroll', updateReadingProgress);
    updateReadingProgress();
    
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-1 bg-gradient-to-r from-primary to-purple-600"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
}
