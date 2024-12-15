
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ImageCarousel({ images, initialIndex, onClose, gameName }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  useEffect(() => {
    setIsVideo(images[currentIndex].includes('youtu'));
    // Lock body scroll when carousel is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, images]);

  const getVideoEmbedUrl = (url) => {
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1]
      : url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
      >
        <X size={32} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white text-lg">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronRight size={48} />
      </button>

      {/* Main content */}
      <div className="w-full h-full flex items-center justify-center p-16">
        {isVideo ? (
          <iframe
            src={getVideoEmbedUrl(images[currentIndex])}
            className="w-full max-w-6xl aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
            <Image
              src={images[currentIndex]}
              alt={`${gameName} screenshot ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        )}
      </div>
    </div>
  );
}