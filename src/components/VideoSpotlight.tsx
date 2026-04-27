import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import type { VideoEmbed } from "@/data/sections";

interface VideoSpotlightProps {
  video: VideoEmbed;
}

/**
 * Lazy-loaded video block. Shows a poster + play button until the user opts in,
 * preventing third-party iframes from loading on first paint.
 */
const VideoSpotlight = ({ video }: VideoSpotlightProps) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="uni-label inline-flex items-center gap-2">
          <Film className="w-3.5 h-3.5 text-accent" />
          Watch
        </span>
        <span className="font-display text-sm md:text-base text-foreground/80">{video.title}</span>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/60 bg-foreground/5">
        {!active ? (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Play video: ${video.title}`}
          >
            {video.poster && (
              <img
                src={video.poster}
                alt={video.title}
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-accent flex items-center justify-center shadow-2xl shadow-amber/30 group-hover:scale-110 transition-transform duration-500">
                <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
              </span>
            </span>
          </button>
        ) : (
          <iframe
            src={`${video.url}${video.url.includes("?") ? "&" : "?"}autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>

      {video.caption && (
        <p className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">{video.caption}</p>
      )}
    </motion.div>
  );
};

export default VideoSpotlight;
