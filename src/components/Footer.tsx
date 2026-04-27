import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-primary text-primary-foreground">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--amber))/0.05] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--teal))/0.05] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center font-display font-bold text-sm text-white shadow-lg shadow-amber/20">
                U
              </div>
              <span className="font-display text-xl font-bold text-white">University</span>
            </div>
            <p className="text-sm leading-relaxed font-body text-white/40 max-w-xs">
              Empowering students to thrive academically, personally,
              and professionally.
            </p>
          </div>
          {[
            { title: "Academics", links: [
              { label: "Programs", to: "/acads" },
              { label: "Admissions", to: "/admissions" },
              { label: "Research", to: "/research" },
            ]},
            { title: "Student Life", links: [
              { label: "Campus Life", to: "/campus-life" },
              { label: "Health & Wellbeing", to: "/health" },
              { label: "Parents & Family", to: "/parents" },
            ]},
            { title: "Connect", links: [
              { label: "Alumni", to: "/alumni" },
              { label: "Get Help", to: "/help" },
              { label: "Emergency", to: "/help" },
            ]},
          ].map((col) => (
            <div key={col.title} className="md:col-span-3">
              <h4 className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-amber mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm font-body text-white/40 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-white/30">
          <span>© {new Date().getFullYear()} University. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
