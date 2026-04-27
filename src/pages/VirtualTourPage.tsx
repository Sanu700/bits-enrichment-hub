import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Compass, Play, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { getItem, getSection } from "@/data/sections";
import heroLibrary from "@/assets/hero-library.jpg";

// External virtual tour URL — single source of truth
const TOUR_URL = "https://bits-hyderabad.ac.in/bphcvirtualtour/index.htm";

const areas = [
  { title: "Academic Block", subtitle: "Lecture halls & labs", img: heroLibrary },
  { title: "Hostels", subtitle: "Residential life", img: heroLibrary },
  { title: "Library", subtitle: "Study & archives", img: heroLibrary },
  { title: "Sports Facilities", subtitle: "Fields & courts", img: heroLibrary },
  { title: "Campus Life", subtitle: "Plazas & greens", img: heroLibrary },
];

// Hotspots positioned over the immersive hero card (percentages)
const hotspots = [
  { label: "Academic Block", x: "22%", y: "62%" },
  { label: "Library", x: "48%", y: "44%" },
  { label: "Hostels", x: "72%", y: "70%" },
  { label: "Sports", x: "85%", y: "38%" },
];

const VirtualTourPage = () => {
  const navigate = useNavigate();
  const section = getSection("campus-life")!;
  const item = getItem("campus-life", "virtual-tour")!;
  const Icon = section.icon;
  const otherItems = section.items.filter((i) => i.slug !== "virtual-tour");

  const openTour = () => window.open(TOUR_URL, "_blank", "noopener,noreferrer");

  return (
    <PageLayout>
      {/* Hero — reuse existing structure */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden gradient-hero">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[hsl(var(--amber))/0.08] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-[hsl(var(--teal))/0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(section.basePath)}
            className="mb-8 -ml-4 font-body text-sm text-white/40 hover:text-white hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to {section.title}
          </Button>

          <div className="flex items-center gap-3 mb-6">
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              {section.title} {section.accentText}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white"
          >
            {item.title}
          </motion.h1>

          <p className="mt-6 text-base md:text-lg font-body max-w-2xl text-white/55 leading-relaxed">
            Get a quick glimpse of campus spaces, then explore the full interactive tour.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="uni-section">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Immersive launch card — replaces external link unfurl */}
            <div>
              <span className="uni-label">Featured experience</span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={openTour}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openTour()}
                aria-label="Launch BITS Hyderabad 360 virtual tour"
                className="group mt-5 relative overflow-hidden rounded-3xl cursor-pointer aspect-[16/10] md:aspect-[16/9] glass-card p-0 shadow-2xl shadow-[hsl(var(--amber))/0.15]"
              >
                <img
                  src={heroLibrary}
                  alt="BITS Hyderabad campus aerial preview"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-foreground/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--amber))/0.2] via-transparent to-[hsl(var(--violet))/0.25] mix-blend-overlay" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--amber-light))] animate-pulse" />
                      <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-white">
                        360° Interactive
                      </span>
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl drop-shadow-lg">
                    Explore BITS Hyderabad in 360°
                  </h2>
                  <p className="mt-3 font-body text-sm md:text-base text-white/80 max-w-xl">
                    Preview campus spaces and launch the official interactive virtual tour.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[hsl(var(--amber))] via-[hsl(var(--rose))] to-[hsl(var(--violet))] text-white font-body text-sm font-semibold shadow-lg shadow-[hsl(var(--amber))/0.4] group-hover:scale-[1.03] transition-transform duration-300">
                      <Play className="w-4 h-4 fill-white" />
                      Launch Virtual Tour
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </span>
                    <span className="hidden sm:inline font-body text-xs text-white/60">
                      Opens in a new tab
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interactive grid of campus areas */}
            <div>
              <span className="uni-label">Explore campus areas</span>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
                {areas.map((area, idx) => (
                  <motion.button
                    key={area.title}
                    onClick={openTour}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group relative overflow-hidden rounded-2xl aspect-[4/3] glass-card p-0"
                    aria-label={`Open virtual tour: ${area.title}`}
                  >
                    <img
                      src={area.img}
                      alt={`${area.title} preview`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-base md:text-lg font-semibold text-white drop-shadow">
                          {area.title}
                        </span>
                        <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-[hsl(var(--amber-light))] transition-colors" />
                      </div>
                      <span className="font-body text-[11px] text-white/65 uppercase tracking-wider">
                        {area.subtitle}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <span className="uni-label">Overview</span>
              <p className="mt-4 font-body text-base text-foreground/85 leading-[1.85] whitespace-pre-line">
                {item.detail}
              </p>
            </div>

            {/* Highlights */}
            {item.features && item.features.length > 0 && (
              <div className="glass-card p-8 md:p-10">
                <span className="uni-label">Highlights</span>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Improved CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={openTour}
                className="font-body text-white rounded-full px-8 text-sm font-semibold shadow-lg shadow-[hsl(var(--amber))/0.3] bg-gradient-to-r from-[hsl(var(--amber))] via-[hsl(var(--rose))] to-[hsl(var(--violet))] hover:opacity-95 hover:scale-[1.02] transition-all duration-300"
              >
                <Compass className="w-4 h-4 mr-1" />
                Explore Full 360° Tour
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate(section.basePath)}
                className="font-body rounded-full px-8 text-sm"
              >
                Explore more in {section.title}
              </Button>
            </div>
          </div>

          {/* Related sidebar — same as DetailPage */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <span className="uni-label">More in {section.title} {section.accentText}</span>
              <ul className="mt-5 space-y-2">
                {otherItems.map((other) => (
                  <li key={other.slug}>
                    <button
                      onClick={() => navigate(`${section.basePath}/${other.slug}`)}
                      className="w-full text-left glass-card p-4 group flex items-center justify-between gap-3"
                    >
                      <span className="font-body text-sm text-foreground/85 group-hover:text-accent transition-colors">
                        {other.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default VirtualTourPage;
