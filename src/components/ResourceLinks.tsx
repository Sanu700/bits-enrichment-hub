import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Download, ExternalLink, Link as LinkIcon, Mail, Phone, Shield } from "lucide-react";
import type { ResourceLink } from "@/data/sections";

interface ResourceLinksProps {
  resources: ResourceLink[];
  label?: string;
}

const iconMap = {
  link: LinkIcon,
  download: Download,
  external: ExternalLink,
  phone: Phone,
  mail: Mail,
  book: BookOpen,
  shield: Shield,
} as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const ResourceLinks = ({ resources, label = "Official Resources" }: ResourceLinksProps) => {
  if (!resources?.length) return null;

  return (
    <div>
      <span className="uni-label inline-flex items-center gap-2">
        <LinkIcon className="w-3.5 h-3.5 text-accent" />
        {label}
      </span>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {resources.map((r) => {
          const Icon = iconMap[r.icon ?? "external"];
          const isExternal = /^https?:\/\//i.test(r.url) || r.url.startsWith("//");
          return (
            <motion.li key={`${r.label}-${r.url}`} variants={card}>
              <a
                href={r.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="glass-card p-5 flex items-start gap-4 group h-full"
              >
                <span className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-lg shadow-amber/20 shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <Icon className="w-4 h-4 text-white" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex items-center gap-2 font-body text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    <span className="truncate">{r.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </span>
                  {r.description && (
                    <span className="block mt-1 font-body text-xs text-muted-foreground leading-relaxed">
                      {r.description}
                    </span>
                  )}
                </span>
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default ResourceLinks;
