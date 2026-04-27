import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden gradient-hero">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[hsl(var(--amber))/0.08] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-[hsl(var(--teal))/0.06] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-10 -ml-4 font-body text-sm text-white/40 hover:text-white hover:bg-white/5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          </motion.div>
          <div className="flex items-start gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg mt-2`}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white"
              >
                {title}
                {accentText && (
                  <span className="bg-gradient-to-r from-amber to-amber-light bg-clip-text text-transparent"> {accentText}</span>
                )}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-5 text-base md:text-lg font-body max-w-xl text-white/45"
              >
                {subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="uni-section">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.slug ?? i}
              variants={cardItem}
              onClick={() => setSelectedItem(item)}
              className="glass-card p-8 md:p-10 group relative overflow-hidden cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`} />
              <div className="relative">
                <span className="font-display text-3xl font-bold text-border group-hover:text-accent transition-colors duration-500 block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              <Button
                onClick={() => {
                  if (selectedItem?.slug) {
                    const slug = selectedItem.slug;
                    setSelectedItem(null);
                    navigate(`${basePath}/${slug}`);
                  }
                }}
                className="font-body gradient-accent text-white hover:opacity-90 rounded-full px-8 text-sm font-semibold shadow-lg shadow-amber/20"
              >
                More Info <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
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
