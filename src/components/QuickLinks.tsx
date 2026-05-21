import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickLinksItem {
  label: string;
  onClick: () => void;
  active?: boolean;
}

interface QuickLinksProps {
  title: string;
  items: QuickLinksItem[];
}

const QuickLinks = ({ title, items }: QuickLinksProps) => (
  <aside className="hidden lg:block">
    <div className="glass-card p-6 sticky top-28">
      <div className="flex items-center gap-2 mb-5">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber to-rose" />
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{title}</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        {items.map((item) => (
          <Button
            key={item.label}
            variant="outline"
            className={`h-auto min-h-11 justify-start rounded-2xl px-4 py-3 text-left text-sm leading-snug text-foreground hover:bg-white/10 hover:text-foreground focus-visible:text-foreground whitespace-normal ${
              item.active ? "border-accent/60 bg-amber/10 !text-accent hover:!text-accent" : ""
            }`}
            onClick={item.onClick}
          >
            <LinkIcon className="mr-2 h-4 w-4 text-accent" />
            <span className="min-w-0">{item.label}</span>
          </Button>
        ))}
      </motion.div>
    </div>
  </aside>
);

export default QuickLinks;
