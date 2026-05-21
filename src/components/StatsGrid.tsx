import { CheckCircle2 } from "lucide-react";

interface StatsGridProps {
  stats: string[];
  title?: string;
}

const StatsGrid = ({ stats, title = "Highlights" }: StatsGridProps) => {
  if (!stats?.length) return null;

  return (
    <div className="glass-card p-8 md:p-10">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">{title}</span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">Key highlights</h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {stats.map((stat) => (
          <div key={stat} className="flex gap-3 rounded-3xl border border-white/10 bg-card/80 p-4">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-amber to-rose text-white shadow-lg shadow-amber/20">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <span className="font-body text-sm text-foreground/90 leading-relaxed">{stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
