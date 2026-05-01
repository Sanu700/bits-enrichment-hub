import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import type { GalleryImage } from "@/data/sections";

interface MiniGalleryCarouselProps {
  images: GalleryImage[];
  label?: string;
  /** auto-advance interval in ms; 0 disables */
  autoplay?: number;
}

/**
 * Premium, lightweight image carousel themed with the existing design system.
 * Designed to slot inside DetailPage between content blocks — additive, never replacing.
 */
const MiniGalleryCarousel = ({ images, label = "Gallery", autoplay = 4500 }: MiniGalleryCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), autoplay);
    return () => window.clearInterval(id);
  }, [emblaApi, autoplay]);

  if (!images?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="uni-label inline-flex items-center gap-2">
          <Camera className="w-3.5 h-3.5 text-accent" />
          {label}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => emblaApi?.scrollPrev()}
            className="w-8 h-8 rounded-full border border-border bg-card/70 backdrop-blur-md flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => emblaApi?.scrollNext()}
            className="w-8 h-8 rounded-full border border-border bg-card/70 backdrop-blur-md flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-lg shadow-foreground/5" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="relative shrink-0 grow-0 basis-full sm:basis-2/3 md:basis-1/2 lg:basis-[55%] pr-3 last:pr-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl group bg-foreground/5">
                <img
                  src={img.src}
                  alt={img.alt ?? img.caption ?? `Gallery image ${i + 1}`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  style={{
                    objectPosition: "center 35%",
                    filter: "brightness(0.92) contrast(1.08) saturate(0.9) sepia(0.08)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/15 to-transparent" />
                <div className="absolute inset-0 bg-[hsl(var(--amber)/0.06)] mix-blend-overlay pointer-events-none" />
                {img.caption && (
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 inline-flex items-center max-w-fit">
                    <span className="font-body text-[11px] tracking-[0.12em] uppercase text-white/90">
                      {img.caption}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MiniGalleryCarousel;
