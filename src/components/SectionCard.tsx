import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SectionCardProps {
  index: number;
  title: string;
  description: string;
  gradient: string;
  onClick: () => void;
  icon?: LucideIcon;
}

const SectionCard = ({ index, title, description, gradient, onClick, icon: Icon }: SectionCardProps) => (
  <motion.button
    type="button"
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-card/80 p-8 text-left shadow-xl shadow-[hsl(var(--navy))/0.08] backdrop-blur-xl transition-transform duration-300 hover:border-amber/30 hover:shadow-[0_30px_60px_-24px_rgba(255,181,0,0.55)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none" />
    <div className="flex items-center justify-between gap-4 mb-6">
      <div>
        <span className="text-sm text-muted-foreground">{String(index).padStart(2, "0")}</span>
        <h3 className="mt-4 font-display text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
      </div>
      {Icon && (
        <div className={`w-12 h-12 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg shadow-[hsl(var(--navy))/0.18]`}>
          <Icon className="w-5 h-5" />
        </div>
      )}
    </div>
    <p className="font-body text-sm leading-6 text-muted-foreground">{description}</p>
    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
      Explore
      <ArrowRight className="w-4 h-4" />
    </span>
  </motion.button>
);

export default SectionCard;
