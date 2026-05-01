import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface CinematicImageProps {
  src: string;
  alt: string;
  /** Optional caption rendered as a glass chip in the bottom-left */
  caption?: string;
  /** Show camera icon next to caption (default: true) */
  showIcon?: boolean;
  /** Tailwind sizing classes for height/width if 16:10 aspect-ratio not desired */
  className?: string;
  /** Disable hover zoom (default enabled) */
  noZoom?: boolean;
  /** Image object-position; defaults to "center 35%" for slightly-top focus */
  focus?: string;
  /** Loading attribute (default lazy) */
  loading?: "lazy" | "eager";
}

/**
 * Site-wide cinematic photo treatment.
 *
 * Enforces a single, consistent visual language for every photo:
 *  - 16:10 aspect ratio
 *  - center-slightly-top crop (avoids ground-heavy compositions)
 *  - warm tone + brightness↓ + contrast↑ + saturation↓
 *  - soft dark gradient overlay (stronger at the bottom)
 *  - large rounded corners + soft shadow
 *  - subtle hover zoom (~1.04)
 *  - optional bottom-left glass caption chip
 *
 * Purely presentational — does not change layouts or structure.
 */
const CinematicImage = ({
  src,
  alt,
  caption,
  showIcon = true,
  className,
  noZoom = false,
  focus = "center 35%",
  loading = "lazy",
}: CinematicImageProps) => {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-xl shadow-foreground/10 group bg-foreground/5",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn(
          "w-full h-full object-cover transition-transform duration-[1400ms] ease-out",
          !noZoom && "group-hover:scale-[1.04]",
        )}
        style={{
          objectPosition: focus,
          // Cinematic, warm filter — applied uniformly across the site
          filter:
            "brightness(0.92) contrast(1.08) saturate(0.9) sepia(0.08)",
        }}
      />

      {/* Soft dark gradient — stronger at the bottom for caption legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/15 to-transparent" />
      {/* Subtle warm tint wash */}
      <div className="pointer-events-none absolute inset-0 bg-[hsl(var(--amber)/0.06)] mix-blend-overlay" />

      {caption && (
        <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 max-w-[calc(100%-2rem)]">
          {showIcon && <Camera className="w-3.5 h-3.5 text-white/85 shrink-0" />}
          <span className="font-body text-[10px] tracking-[0.18em] uppercase text-white/90 truncate">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
};

export default CinematicImage;
