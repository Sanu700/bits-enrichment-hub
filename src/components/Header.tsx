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
      { label: "Academic Calendar", path: "/acads#academic-calendar" },
      { label: "Branches & Programs", path: "/acads#branches-programs" },
      { label: "Academic Buildings", path: "/acads#academic-buildings" },
      { label: "PS, Placements & Internships", path: "/acads#ps-placements" },
    ],
  },
  {
    label: "Admissions & Aid",
    path: "/admissions",
    color: "var(--emerald)",
    children: [
      { label: "Admission Process", path: "/admissions#admission-process" },
      { label: "Scholarships", path: "/admissions#scholarships" },
      { label: "Loans & Financial Aid", path: "/admissions#loans" },
      { label: "Policies", path: "/admissions#policies" },
      { label: "Welcome Guide", path: "/admissions#welcome-guide" },
    ],
  },
  {
    label: "Campus Life",
    path: "/campus-life",
    color: "var(--teal)",
    children: [
      { label: "Clubs", path: "/campus-life#clubs" },
      { label: "Hostels & Mess", path: "/campus-life#hostels" },
      { label: "Campus Places", path: "/campus-life#campus-places" },
      { label: "Student Union", path: "/campus-life#student-union" },
      { label: "Fests", path: "/campus-life#fests" },
      { label: "Virtual Tour", path: "/campus-life#virtual-tour" },
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
      { label: "Medical Center", path: "/health#medical-center" },
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
      { label: "Admin Office", path: "/help#admin-office" },
      { label: "SWMC", path: "/help#swmc" },
      { label: "POSH", path: "/help#posh" },
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">

          {/* LEFT */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="BITS Hyderabad" className="w-10 h-10 object-contain mix-blend-multiply" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-900">BITS Hyderabad</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500 mt-[2px]">Student Welfare Division</span>
            </div>
          </Link>

          {/* CENTER NAV */}
          <nav ref={dropdownRef} className="hidden lg:flex justify-center items-center gap-10">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <button
                  onMouseEnter={() => setOpenDropdown(item.path)}
                  onClick={() => setOpenDropdown(openDropdown === item.path ? null : item.path)}
                  className={`relative text-[14px] font-medium px-2 py-1 flex items-center gap-1 ${
                    isActive(item.path) ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-70" />}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>

                <AnimatePresence>
                  {openDropdown === item.path && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50"
                    >
                      <div className="p-2">
                        <Link to={item.path} className="px-4 py-2.5 block text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-lg">Overview</Link>
                        <div className="h-px bg-gray-200 my-1" />
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4 justify-end">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"><Search className="w-4 h-4" /></button>

            <Link to="/help" className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300">
              Get Help
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
