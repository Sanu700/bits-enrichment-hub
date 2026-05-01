import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import MiniGalleryCarousel from "@/components/MiniGalleryCarousel";
import VideoSpotlight from "@/components/VideoSpotlight";
import ResourceLinks from "@/components/ResourceLinks";
import CinematicImage from "@/components/CinematicImage";
import { getItem, getSection } from "@/data/sections";
import heroLibrary from "@/assets/hero-library.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import heroArchway from "@/assets/hero-archway.jpg";

const bannerImages = [heroLibrary, heroCampus, heroArchway];

interface DetailPageProps {
  sectionKey: string;
}

const DetailPage = ({ sectionKey }: DetailPageProps) => {
  const navigate = useNavigate();
  const { slug = "" } = useParams();
  const section = getSection(sectionKey);
  const item = getItem(sectionKey, slug);

  if (!section || !item) {
    return (
      <PageLayout>
        <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20 text-center">
          <h1 className="font-display text-3xl text-foreground">Page not found</h1>
          <Button onClick={() => navigate(-1)} className="mt-6 rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" /> Go back
          </Button>
        </section>
      </PageLayout>
    );
  }

  const Icon = section.icon;
  const otherItems = section.items.filter((i) => i.slug !== item.slug);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden gradient-hero">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[hsl(var(--amber))/0.08] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-[hsl(var(--teal))/0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Button
              variant="ghost"
              onClick={() => navigate(section.basePath)}
              className="mb-8 -ml-4 font-body text-sm text-white/40 hover:text-white hover:bg-white/5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to {section.title}{section.accentText ? ` ${section.accentText}` : ""}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              {section.title}{section.accentText ? ` ${section.accentText}` : ""}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white"
          >
            {item.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-base md:text-lg font-body max-w-2xl text-white/55 leading-relaxed"
          >
            {item.description}
          </motion.p>
        </div>
      </section>

      {/* Wide media banner — gives every detail page a cinematic photo space */}
      <section className="px-6 md:px-12 lg:px-20 pt-6 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <CinematicImage
            src={bannerImages[(item.slug?.length ?? 0) % bannerImages.length]}
            alt={`${item.title} — campus visual`}
            caption={`${section.title}${section.accentText ? ` ${section.accentText}` : ""} · BPHC`}
          />
        </motion.div>
      </section>

      {/* Detail body */}
      <section className="uni-section">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="uni-label">Overview</span>
              <p className="mt-4 font-body text-base text-foreground/85 leading-[1.85] whitespace-pre-line">
                {item.detail}
              </p>
            </motion.div>

            {item.features && item.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card p-8 md:p-10"
              >
                <span className="uni-label">Highlights</span>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-body text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {item.gallery && item.gallery.length > 0 && (
              <MiniGalleryCarousel
                images={item.gallery}
                label={`${item.title} · Gallery`}
              />
            )}

            {item.video && <VideoSpotlight video={item.video} />}

            {item.resources && item.resources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ResourceLinks resources={item.resources} />
              </motion.div>
            )}

            {item.contacts && item.contacts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="glass-card p-8"
              >
                <span className="uni-label">Contact</span>
                <ul className="mt-5 space-y-3">
                  {item.contacts.map((c) => (
                    <li key={c.label} className="flex items-center gap-3 font-body text-sm">
                      <Phone className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{c.label}:</span>
                      <span className="text-foreground font-medium">{c.value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Button
                onClick={() => navigate("/help")}
                className="font-body gradient-accent text-white hover:opacity-90 rounded-full px-8 text-sm font-semibold shadow-lg shadow-amber/20"
              >
                Get Help
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate(section.basePath)}
                className="font-body rounded-full px-8 text-sm"
              >
                Explore more in {section.title}
              </Button>
            </motion.div>
          </div>

          {/* Related sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <span className="uni-label">More in {section.title}{section.accentText ? ` ${section.accentText}` : ""}</span>
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

export default DetailPage;
