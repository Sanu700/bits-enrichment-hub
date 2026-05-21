import { motion } from "framer-motion";

interface AnimatedContentBlockProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const AnimatedContentBlock = ({ title, subtitle, children }: AnimatedContentBlockProps) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card p-8 md:p-10"
  >
    <div className="flex items-center justify-between gap-4 mb-6">
      <div>
        <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{subtitle}</p>}
      </div>
    </div>
    <div className="space-y-4">{children}</div>
  </motion.div>
);

export default AnimatedContentBlock;
