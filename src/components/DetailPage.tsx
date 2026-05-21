import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Phone, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import AnimatedContentBlock from "@/components/AnimatedContentBlock";
import CTAButton from "@/components/CTAButton";
import CinematicImage from "@/components/CinematicImage";
import ExpandableAccordion from "@/components/ExpandableAccordion";
import MiniGalleryCarousel from "@/components/MiniGalleryCarousel";
import QuickLinks from "@/components/QuickLinks";
import ResourceLinks from "@/components/ResourceLinks";
import StatsGrid from "@/components/StatsGrid";
import VideoCarousel from "@/components/VideoCarousel";
import VideoSpotlight from "@/components/VideoSpotlight";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getItem, getSection } from "@/data/sections";

interface DetailPageProps {
  sectionKey: string;
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const DetailPage = ({ sectionKey }: DetailPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug = "" } = useParams();
  const section = getSection(sectionKey);
  const item = getItem(sectionKey, slug);
  const [openSubItem, setOpenSubItem] = useState<string | undefined>();

  useEffect(() => {
    if (!item?.subItems?.length || !location.hash) return;

    const targetId = decodeURIComponent(location.hash.slice(1));
    const targetIndex = item.subItems.findIndex((sub) => slugify(sub.title) === targetId);
    if (targetIndex === -1) return;

    setOpenSubItem(`sub-${targetIndex}`);
    const id = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);

    return () => window.clearTimeout(id);
  }, [item, location.hash]);

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
  const bannerImage = item.gallery?.[0]?.src;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden gradient-hero">
        <div className="absolute top-20 right-4 md:right-10 w-56 h-56 md:w-72 md:h-72 bg-[hsl(var(--amber))/0.08] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-4 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-[hsl(var(--teal))/0.06] rounded-full blur-3xl pointer-events-none" />

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
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] md:leading-[0.95] text-white"
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
      {bannerImage && (
      <section className="px-6 md:px-12 lg:px-20 pt-6 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <CinematicImage
            src={bannerImage}
            alt={`${item.title} — campus visual`}
            caption={`${section.title}${section.accentText ? ` ${section.accentText}` : ""} · BPHC`}
          />
        </motion.div>
      </section>
      )}

      {/* Detail body */}
      <section className="uni-section">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <AnimatedContentBlock
              title="Overview"
              subtitle={`A curated deep dive into ${item.title}`}
            >
              <p className="font-body text-base text-foreground/85 leading-[1.85] whitespace-pre-line">
                {item.detail}
              </p>
            </AnimatedContentBlock>

            {item.features && item.features.length > 0 && <StatsGrid stats={item.features} />}

            {item.gallery && item.gallery.length > 0 && (
              <MiniGalleryCarousel
                images={item.gallery}
                label={`${item.title} · Gallery`}
              />
            )}

            {item.video && <VideoSpotlight video={item.video} />}

            {item.subItems && item.subItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 md:p-8"
              >
                <span className="uni-label inline-flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Explore
                </span>
                <h3 className="mt-3 font-display text-xl md:text-2xl text-foreground">
                  Inside {item.title}
                </h3>

                <Accordion
                  type="single"
                  collapsible
                  value={openSubItem}
                  onValueChange={setOpenSubItem}
                  className="mt-6 w-full"
                >
                  {item.subItems.map((sub, idx) => {
                    const subId = slugify(sub.title);
                    return (
                    <AccordionItem
                      key={sub.title}
                      id={subId}
                      value={`sub-${idx}`}
                      className="scroll-mt-28 border-b border-border/50 last:border-b-0"
                    >
                      <AccordionTrigger className="hover:no-underline py-5 group">
                        <div className="flex items-center gap-4 text-left">
                          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[hsl(var(--amber))/0.18] to-[hsl(var(--amber))/0.05] border border-[hsl(var(--amber))/0.25] flex items-center justify-center font-display text-xs font-semibold text-[hsl(var(--amber))]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <div className="font-display text-base md:text-lg text-foreground group-hover:text-accent transition-colors">
                              {sub.title}
                            </div>
                            {sub.tagline && (
                              <div className="font-body text-xs text-muted-foreground tracking-wide uppercase mt-0.5">
                                {sub.tagline}
                              </div>
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 sm:pl-14">
                          <p className="font-body text-sm text-foreground/80 leading-relaxed">
                            {sub.description}
                          </p>
                          {sub.videoUrl && (
                            <div className="aspect-video w-full overflow-hidden rounded-xl border border-border/60">
                              <iframe
                                src={sub.videoUrl}
                                title={`${sub.title} aftermovie`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full"
                              />
                            </div>
                          )}
                          {sub.link && (
                            <a
                              href={sub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-body text-sm text-accent hover:underline"
                            >
                              Visit {sub.title}
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    );
                  })}
                </Accordion>
              </motion.div>
            )}

            {item.videos && item.videos.length > 0 && <VideoCarousel videos={item.videos} />}

            {item.resources && item.resources.length > 0 && (
              <ExpandableAccordion title="Official Resources" summary="Open the most relevant portals and guides.">
                <ResourceLinks resources={item.resources} />
              </ExpandableAccordion>
            )}

            {item.contacts && item.contacts.length > 0 && (
              <ExpandableAccordion title="Contact & support" summary="Access the right campus office quickly.">
                <ul className="space-y-3">
                  {item.contacts.map((c) => (
                    <li key={c.label} className="flex items-center gap-3 font-body text-sm text-foreground/90">
                      <Phone className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{c.label}:</span>
                      <span className="font-medium">{c.value}</span>
                    </li>
                  ))}
                </ul>
              </ExpandableAccordion>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <CTAButton
                onClick={() => navigate("/help")}
                label="Get Help"
                className="text-sm"
              />
              <Button
                variant="outline"
                onClick={() => navigate(section.basePath)}
                className="font-body rounded-full px-8 text-sm lg:hidden"
              >
                Back to {section.title}
              </Button>
            </motion.div>
          </div>

          {/* Related sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <QuickLinks
                title={`More in ${section.title}`}
                items={otherItems.map((other) => ({
                  label: other.title,
                  onClick: () => navigate(`${section.basePath}/${other.slug}`),
                }))}
              />

            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default DetailPage;
