import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickLinksItem {
  label: string;
  onClick: () => void;
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
            className="justify-start rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-white/10"
            onClick={item.onClick}
          >
            <LinkIcon className="mr-2 h-4 w-4 text-accent" />
            {item.label}
          </Button>
        ))}
      </motion.div>
    </div>
  </aside>
);

export default QuickLinks;
