import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import SectionCard from "@/components/SectionCard";
import QuickLinks from "@/components/QuickLinks";
import CTAButton from "@/components/CTAButton";

interface ContentItem {
  title: string;
  description: string;
  detail?: string;
  slug?: string;
}

interface ContentPageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: ContentItem[];
  accentText?: string;
  gradient?: string;
  basePath: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const ContentPage = ({
  title,
  subtitle,
  icon: Icon,
  items,
  accentText,
  gradient = "from-[hsl(var(--amber))] to-[hsl(var(--amber-light))]",
  basePath,
}: ContentPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  useEffect(() => {
    if (!location.hash) return;

    const targetId = decodeURIComponent(location.hash.slice(1));
    const id = window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }, 120);

    return () => window.clearTimeout(id);
  }, [location.hash, items]);

  return (
    <>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        accentText={accentText}
        description="Explore the curated student ecosystem for academics, campus life, admissions, wellbeing and support."
        gradient={gradient}
        icon={Icon}
        ctaLabel="Jump to sections"
        onCtaClick={() => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" })}
      />

      <section id="explore" className="uni-section scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <QuickLinks
            title={`Quick Jump`}
            items={items.map((item) => ({
              label: item.title,
              onClick: () => {
                if (!item.slug) {
                  setSelectedItem(item);
                  return;
                }

                navigate(`${basePath}#${item.slug}`);
              },
            }))}
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.slug ?? i}
                id={item.slug}
                variants={cardItem}
                className="scroll-mt-28"
              >
                <SectionCard
                  index={i + 1}
                  title={item.title}
                  description={item.description}
                  gradient={gradient}
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-lg border-border bg-card p-0 overflow-hidden rounded-2xl">
          <div className={`h-2 bg-gradient-to-r ${gradient}`} />
          <div className="p-8 md:p-10">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl md:text-3xl font-semibold">{selectedItem?.title}</DialogTitle>
              <DialogDescription className="font-body mt-3 text-sm">{selectedItem?.description}</DialogDescription>
            </DialogHeader>
            {selectedItem?.detail && (
              <div className="mt-6 font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {selectedItem.detail}
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton
                onClick={() => {
                  if (selectedItem?.slug) {
                    const slug = selectedItem.slug;
                    setSelectedItem(null);
                    navigate(`${basePath}/${slug}`);
                  }
                }}
                label="More Info"
                className="text-sm"
              />
              <Button
                variant="outline"
                onClick={() => setSelectedItem(null)}
                className="font-body rounded-full px-8 text-sm"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContentPage;
