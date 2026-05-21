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
      <div className="flex justify-between items-center mb-4">
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Camera className="w-4 h-4 text-orange-500" />
          {label}
        </span>

        <div className="flex gap-2">
          <button onClick={() => emblaApi?.scrollPrev()} className="btn-circle">
            <ChevronLeft />
          </button>
          <button onClick={() => emblaApi?.scrollNext()} className="btn-circle">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div ref={emblaRef} className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-lg shadow-foreground/5">
        <div className="flex gap-6">
          {images.map((img, i) => {
            const focus =
              img.focus === "top"
                ? "object-[center_30%]"
                : img.focus === "bottom"
                ? "object-[center_70%]"
                : "object-center";

            return (
              <div key={`${img.src}-${i}`} className="basis-[70%] shrink-0">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden group shadow-xl">
                  <img
                    src={img.src}
                    alt={img.alt ?? img.caption ?? `Gallery image ${i + 1}`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className={`w-full h-full object-cover ${focus} transition duration-[1200ms] ease-out group-hover:scale-105 scale-[1.05] brightness-[0.75] contrast-[1.2] saturate-[0.9] [filter:sepia(0.25)_hue-rotate(-8deg)]`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.3),transparent)]" />
                  <div className="absolute inset-0 bg-[hsl(var(--amber)/0.06)] mix-blend-overlay pointer-events-none" />
                  {img.caption && (
                    <div className="absolute bottom-5 left-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-md">
                      <span className="text-xs tracking-[0.2em] uppercase text-white/90">
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