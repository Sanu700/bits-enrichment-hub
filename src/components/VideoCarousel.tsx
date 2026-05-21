import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { VideoEmbed } from "@/data/sections";

interface VideoCarouselProps {
  videos: VideoEmbed[];
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  if (!videos?.length) return null;

  return (
    <section className="glass-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">Watch</p>
          <h2 className="font-display text-2xl font-semibold text-foreground">Featured stories</h2>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {videos.map((video) => (
          <motion.a
            key={video.title}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/80 shadow-lg shadow-[hsl(var(--navy))/0.08]"
          >
            {video.poster ? (
              <div className="aspect-video w-full overflow-hidden bg-muted/10">
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-muted/10" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-amber/90 p-4 shadow-xl shadow-amber/20 transition group-hover:scale-105">
                <Play className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="p-5">
              <p className="font-display text-lg font-semibold text-foreground">{video.title}</p>
              {video.caption && <p className="mt-2 text-sm text-muted-foreground">{video.caption}</p>}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
