import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ className }) => {
  return (
    <button className={`mt-6 sm:mt-8 bg-blue-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-full flex items-center justify-center w-full text-lg sm:text-xl font-semibold ${className}`}>
      <Share2 size={20} className="mr-2 sm:mr-3" />
      Share Achievement
    </button>
  );
};

export default ShareButton;