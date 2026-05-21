import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { Button } from "@/components/ui/button";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  accentText?: string;
  description?: string;
  gradient: string;
  icon: LucideIcon;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const SectionHeader = ({
  title,
  subtitle,
  accentText,
  description,
  gradient,
  icon: Icon,
  ctaLabel,
  onCtaClick,
}: SectionHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden gradient-hero">
      <div className="absolute top-20 right-10 w-72 h-72 bg-[hsl(var(--amber))/0.08] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-[hsl(var(--teal))/0.06] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl shadow-[hsl(var(--navy))/0.16]`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs uppercase tracking-[0.28em] text-white/60 font-semibold">
                {subtitle}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white">
              {title}
              {accentText && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">
                  {accentText}
                </span>
              )}
            </h1>
            {description && (
              <p className="mt-6 text-base md:text-lg font-body max-w-2xl text-white/75 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {ctaLabel && onCtaClick && (
            <div className="flex items-center justify-end">
              <Button
                onClick={onCtaClick}
                className="rounded-full bg-white/10 border border-white/15 text-white backdrop-blur-xl px-8 py-3.5 font-semibold shadow-xl shadow-black/20 hover:bg-white/15 transition-all duration-300"
              >
                {ctaLabel}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
