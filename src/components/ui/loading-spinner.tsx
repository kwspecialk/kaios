import React from 'react';

export const LoadingSpinner = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`animate-spin rounded-full border-2 border-current border-t-transparent h-6 w-6 ${className}`} />
  );
};

// Usage example in pages:
export const LoadingState = () => (
  <div className="flex h-[200px] w-full items-center justify-center">
    <LoadingSpinner />
  </div>
);