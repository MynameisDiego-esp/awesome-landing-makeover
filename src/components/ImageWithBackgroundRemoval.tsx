import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/lib/removeBackground";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithBackgroundRemovalProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithBackgroundRemoval = ({ src, alt, className = "" }: ImageWithBackgroundRemovalProps) => {
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsLoading(true);
        setError(false);

        // Check if we have a cached version
        const cacheKey = `bg-removed-${src}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          setProcessedImage(cached);
          setIsLoading(false);
          return;
        }

        // Load the image
        const response = await fetch(src);
        const blob = await response.blob();
        const img = await loadImage(blob);

        // Remove background
        const resultBlob = await removeBackground(img);
        const url = URL.createObjectURL(resultBlob);

        // Convert to base64 for caching
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          localStorage.setItem(cacheKey, base64);
          setProcessedImage(base64);
          setIsLoading(false);
        };
        reader.readAsDataURL(resultBlob);
      } catch (err) {
        console.error("Failed to process image:", err);
        setError(true);
        setIsLoading(false);
      }
    };

    processImage();
  }, [src]);

  if (isLoading) {
    return <Skeleton className={className} />;
  }

  if (error || !processedImage) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedImage} 
      alt={alt} 
      className={`${className} drop-shadow-2xl`}
      style={{
        filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))'
      }}
    />
  );
};

export default ImageWithBackgroundRemoval;
