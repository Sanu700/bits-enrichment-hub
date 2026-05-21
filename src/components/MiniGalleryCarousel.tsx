import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface GalleryImage {
  src: string;
  caption?: string;
  alt?: string;
  focus?: "center" | "top" | "bottom";
}

interface Props {
  images: GalleryImage[];
  label?: string;
  autoplay?: number;
}

const MiniGalleryCarousel = ({
  images,
  label = "Campus Gallery",
  autoplay = 4500,
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const id = setInterval(() => emblaApi.scrollNext(), autoplay);
    return () => clearInterval(id);
  }, [emblaApi, autoplay]);

  if (!images?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
        <span className="inline-flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
          <Camera className="w-4 h-4 text-orange-500" />
          <span className="truncate">{label}</span>
        </span>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-sm hover:bg-card"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-sm hover:bg-card"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div ref={emblaRef} className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-lg shadow-foreground/5">
        <div className="flex gap-4 sm:gap-6">
          {images.map((img, i) => {
            const focus =
              img.focus === "top"
                ? "object-[center_30%]"
                : img.focus === "bottom"
                ? "object-[center_70%]"
                : "object-center";

            return (
              <div key={`${img.src}-${i}`} className="basis-full sm:basis-[82%] lg:basis-[72%] shrink-0">
                <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-xl bg-foreground/5">
                  <img
                    src={img.src}
                    alt={img.alt ?? img.caption ?? `Gallery image ${i + 1}`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className={`w-full h-full object-cover ${focus} transition duration-1000 ease-out group-hover:scale-[1.03] brightness-[0.82] contrast-[1.12] saturate-[0.92] [filter:sepia(0.16)_hue-rotate(-6deg)]`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.3),transparent)]" />
                  <div className="absolute inset-0 bg-[hsl(var(--amber)/0.06)] mix-blend-overlay pointer-events-none" />
                  {img.caption && (
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[calc(100%-2.5rem)] px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-md">
                      <span className="block text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.2em] uppercase text-white/90 truncate">
                        {img.caption}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MiniGalleryCarousel;
