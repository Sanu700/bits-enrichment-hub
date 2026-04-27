import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SubItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path: string;
  color: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  {
    label: "Acads",
    path: "/acads",
    color: "var(--amber)",
    children: [
      { label: "Programs (UG, PG, WILP, PhD)", path: "/acads#programs" },
      { label: "Academic Calendar", path: "/acads#calendar" },
      { label: "Departments", path: "/acads#departments" },
      { label: "Academic Buildings", path: "/acads#buildings" },
      { label: "PS, Placements & Internships", path: "/acads#placements" },
    ],
  },
  {
    label: "Admissions & Aid",
    path: "/admissions",
    color: "var(--emerald)",
    children: [
      { label: "Admission Process", path: "/admissions#process" },
      { label: "Scholarships", path: "/admissions#scholarships" },
      { label: "Loans & Financial Aid", path: "/admissions#loans" },
      { label: "Policies", path: "/admissions#policies" },
      { label: "Welcome Guide", path: "/admissions#welcome" },
    ],
  },
  {
    label: "Campus Life",
    path: "/campus-life",
    color: "var(--teal)",
    children: [
      { label: "Clubs", path: "/campus-life#clubs" },
      { label: "Hostels & Mess", path: "/campus-life#hostels" },
      { label: "Campus Places", path: "/campus-life#places" },
      { label: "Student Union", path: "/campus-life#union" },
      { label: "Fests", path: "/campus-life#fests" },
      { label: "Virtual Tour", path: "/campus-life#tour" },
    ],
  },
  {
    label: "Parents & Family",
    path: "/parents",
    color: "var(--violet)",
    children: [
      { label: "Stay", path: "/parents#stay" },
      { label: "Safety", path: "/parents#safety" },
      { label: "Parcels", path: "/parents#parcels" },
      { label: "Transport", path: "/parents#transport" },
      { label: "Communication", path: "/parents#communication" },
      { label: "Anti-Ragging", path: "/parents#anti-ragging" },
    ],
  },
  {
    label: "Research",
    path: "/research",
    color: "var(--rose)",
    children: [
      { label: "Labs", path: "/research#labs" },
      { label: "Journals", path: "/research#journals" },
      { label: "Recent Innovations", path: "/research#innovations" },
      { label: "Achievements", path: "/research#achievements" },
    ],
  },
  {
    label: "Health",
    path: "/health",
    color: "var(--sky)",
    children: [
      { label: "Medical Center", path: "/health#medical" },
      { label: "MPower (Mental Health)", path: "/health#mpower" },
      { label: "Ambulance", path: "/health#ambulance" },
      { label: "Helplines", path: "/health#helplines" },
    ],
  },
  {
    label: "Alumni",
    path: "/alumni",
    color: "var(--amber-light)",
    children: [
      { label: "BITSAA", path: "/alumni#bitsaa" },
      { label: "SARC", path: "/alumni#sarc" },
      { label: "Achievements", path: "/alumni#achievements" },
      { label: "BGM", path: "/alumni#bgm" },
    ],
  },
  {
    label: "Help",
    path: "/help",
    color: "var(--teal-light)",
    children: [
      { label: "AUGSD", path: "/help#augsd" },
      { label: "SWD", path: "/help#swd" },
      { label: "AGSRD", path: "/help#agsrd" },
      { label: "Admin Office", path: "/help#admin" },
      { label: "SWMC", path: "/help#swmc" },
      { label: "POSH", path: "/help#posh" },
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl shadow-[0_8px_32px_-8px_hsl(var(--navy)/0.12)] border-b border-border/40"
          : "bg-background/60 backdrop-blur-xl"
      }`}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-amber via-rose to-violet" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/logo.jpg" alt="BITS Hyderabad Logo" className="w-12 h-12 rounded-full" />
              <div className="absolute -bottom-0.5 -right-2.0 w-3 h-3 rounded-full bg-teal border-2 border-background animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-foreground leading-tight">
                BITS Hyderabad
              </span>
              <span className="text-[10px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground/70">
                Student Welfare Division
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-0.5 bg-secondary/50 rounded-2xl p-1.5 border border-border/30">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                <button
                  onMouseEnter={() => setOpenDropdown(item.path)}
                  onClick={() => setOpenDropdown(openDropdown === item.path ? null : item.path)}
                  className={`relative px-3 py-2 rounded-xl text-[12px] font-body font-semibold transition-all duration-300 flex items-center gap-1 ${
                    isActive(item.path) ? "text-foreground bg-card shadow-md border border-border/50" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive(item.path) && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: `hsl(${item.color})` }} />
                  )}
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-50" />}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {openDropdown === item.path && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setOpenDropdown(item.path)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-2xl shadow-foreground/[0.08] overflow-hidden z-50"
                    >
                      <div className={`h-1 bg-gradient-to-r`} style={{ background: `linear-gradient(to right, hsl(${item.color}), hsl(${item.color} / 0.3))` }} />
                      <div className="p-2">
                        <Link
                          to={item.path}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-body font-semibold text-foreground hover:bg-secondary/60 transition-colors duration-200"
                        >
                          Overview
                          <ChevronRight className="w-3 h-3 ml-auto opacity-40" />
                        </Link>
                        <div className="h-px bg-border/50 my-1" />
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-body text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
                          >
                            {child.label}
                            <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-40" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300">
              <Search className="w-4 h-4" />
            </button>
            <Link
              to="/help"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl gradient-accent text-white text-[13px] font-body font-semibold shadow-lg shadow-amber/20 hover:shadow-xl hover:shadow-amber/30 hover:scale-105 transition-all duration-300"
            >
              Get Help
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-secondary/80 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <nav className="px-6 py-5 space-y-1 bg-background/95 backdrop-blur-2xl border-t border-border/30 max-h-[75vh] overflow-y-auto">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                >
                  <div
                    onClick={() => setMobileExpanded(mobileExpanded === item.path ? null : item.path)}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-body font-semibold transition-all duration-300 cursor-pointer ${
                      isActive(item.path)
                        ? "text-foreground bg-card shadow-sm border border-border/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: `hsl(${item.color})` }} />
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`w-3.5 h-3.5 ml-auto transition-transform duration-300 ${mobileExpanded === item.path ? "rotate-180" : ""}`} />
                    )}
                  </div>
                  <AnimatePresence>
                    {mobileExpanded === item.path && item.children && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-9 pr-4 py-1 space-y-0.5">
                          <Link to={item.path} className="block py-2 px-3 rounded-lg text-[13px] font-body font-semibold text-foreground hover:bg-secondary/60 transition-colors">
                            Overview
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block py-2 px-3 rounded-lg text-[13px] font-body text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <div className="pt-3 mt-3 border-t border-border/30">
                <Link
                  to="/help"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl gradient-accent text-white text-sm font-body font-semibold shadow-lg shadow-amber/20"
                >
                  Get Help Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
