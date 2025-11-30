import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, title = "YouTube video", className = "" }: YouTubeEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  // Extract video ID from full URL if provided
  const extractVideoId = (urlOrId: string): string => {
    // If it's already just an ID, return it
    if (!urlOrId.includes('youtube.com') && !urlOrId.includes('youtu.be')) {
      return urlOrId;
    }
    
    // Extract from youtu.be format
    if (urlOrId.includes('youtu.be/')) {
      const match = urlOrId.match(/youtu\.be\/([^?&]+)/);
      return match ? match[1] : urlOrId;
    }
    
    // Extract from youtube.com format
    if (urlOrId.includes('youtube.com')) {
      const match = urlOrId.match(/[?&]v=([^?&]+)/);
      return match ? match[1] : urlOrId;
    }
    
    return urlOrId;
  };

  const id = extractVideoId(videoId);
  
  // Build embed URL with autoplay and minimal UI - hiding all possible overlays
  // Parameters: no controls, minimal branding, no related videos, no info, no annotations, no fullscreen, no captions
  const baseParams = 'controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&enablejsapi=0&origin=' + (typeof window !== 'undefined' ? encodeURIComponent(window.location.origin) : '');
  
  const embedUrl = shouldAutoplay
    ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&${baseParams}`
    : `https://www.youtube.com/embed/${id}?${baseParams}`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAutoplay(true);
            observer.disconnect(); // Only trigger once
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of video is visible
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
          loading="lazy"
          style={{ border: 'none' }}
        />
      </div>
    </motion.div>
  );
};

export default YouTubeEmbed;

