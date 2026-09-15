import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageViewerModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="w-full max-w-6xl flex items-center justify-between pb-3 text-white px-2">
        <span className="text-sm sm:text-base font-semibold truncate pr-4 text-slate-200">
          {title}
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div 
        className="relative max-w-6xl max-h-[85vh] overflow-auto rounded-xl border border-white/10 shadow-2xl flex items-center justify-center bg-slate-950"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title}
          referrerPolicy="no-referrer"
          className="max-h-[85vh] w-auto object-contain rounded-xl"
        />
      </div>
      <div className="text-slate-400 text-xs mt-2">
        Click anywhere outside or press Close to dismiss
      </div>
    </div>
  );
};
