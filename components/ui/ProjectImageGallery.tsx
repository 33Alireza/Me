"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectImageGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectImageGallery({
  images,
  title,
}: ProjectImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <>
      <div className="mb-6">
        {/* Main Card Preview (shows top portion of picture) */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-full h-60 sm:h-64 rounded-xl overflow-hidden bg-black/40 border border-[var(--border)] cursor-pointer group/preview shadow-md"
          title="Click to view full image"
        >
          <Image
            src={currentImage}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-black/80 backdrop-blur-md text-white font-['Space_Mono',monospace] text-xs px-3.5 py-2 rounded-lg border border-white/20 flex items-center gap-2 shadow-lg">
              <i className="fa-solid fa-expand"></i> Click to view full image
            </span>
          </div>
        </div>

        {/* Thumbnail Selector Row (only if multiple images) */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Select screenshot ${idx + 1}`}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  currentIndex === idx
                    ? "border-[var(--code-blue-light)] scale-105 shadow-md"
                    : "border-[var(--border)] opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot viewer`}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close modal"
              className="absolute top-2 right-2 sm:-top-10 sm:right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-lg z-50 border border-white/20"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="relative w-full h-[75vh] sm:h-[80vh] flex items-center justify-center">
              <Image
                src={currentImage}
                alt={`${title} full screenshot`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Lightbox Thumbnails (only if multiple images) */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto p-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Select screenshot ${idx + 1}`}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      currentIndex === idx
                        ? "border-[var(--code-blue-light)] scale-110 shadow-lg"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
