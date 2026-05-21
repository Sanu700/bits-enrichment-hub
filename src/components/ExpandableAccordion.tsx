import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandableAccordionProps {
  title: string;
  summary?: string;
  children: React.ReactNode;
}

const ExpandableAccordion = ({ title, summary, children }: ExpandableAccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden border border-white/10">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
          {summary && <p className="mt-2 text-sm text-muted-foreground">{summary}</p>}
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-foreground/80"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-white/10 px-6 pb-6"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableAccordion;
