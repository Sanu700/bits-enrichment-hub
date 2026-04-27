import { useNavigate } from "react-router-dom";
import { GraduationCap, FileCheck, Users, UserCheck, Microscope, Heart, Award, HelpCircle, ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardData {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

const services: ServiceCardData[] = [
  {
    title: "Academics",
    description: "Programs, departments, calendar, placements, and academic buildings.",
    icon: GraduationCap,
    path: "/acads",
    color: "text-amber",
    gradient: "from-[hsl(var(--amber))] to-[hsl(var(--amber-light))]",
  },
  {
    title: "Admissions & Aid",
    description: "Admission process, scholarships, loans, policies, and welcome guide.",
    icon: FileCheck,
    path: "/admissions",
    color: "text-emerald",
    gradient: "from-[hsl(var(--emerald))] to-[hsl(var(--teal-light))]",
  },
  {
    title: "Campus Life",
    description: "Clubs, hostels, fests, campus places, and virtual tour.",
    icon: Users,
    path: "/campus-life",
    color: "text-teal",
    gradient: "from-[hsl(var(--teal))] to-[hsl(var(--emerald))]",
  },
  {
    title: "Parents & Family",
    description: "Stay, safety, parcels, transport, and communication.",
    icon: UserCheck,
    path: "/parents",
    color: "text-violet",
    gradient: "from-[hsl(var(--violet))] to-[hsl(var(--sky))]",
  },
  {
    title: "Research & Innovations",
    description: "Labs, journals, recent innovations, and achievements.",
    icon: Microscope,
    path: "/research",
    color: "text-rose",
    gradient: "from-[hsl(var(--rose))] to-[hsl(var(--violet))]",
  },
  {
    title: "Health & Wellbeing",
    description: "Medical center, MPower, ambulance, and helplines.",
    icon: Heart,
    path: "/health",
    color: "text-sky",
    gradient: "from-[hsl(var(--sky))] to-[hsl(var(--teal))]",
  },
  {
    title: "Alumni",
    description: "BITSAA, SARC, achievements, and BGM.",
    icon: Award,
    path: "/alumni",
    color: "text-amber-light",
    gradient: "from-[hsl(var(--amber))] to-[hsl(var(--amber-light))]",
  },
  {
    title: "Help",
    description: "AUGSD, SWD, AGSRD, Admin Office, SWMC, and POSH.",
    icon: HelpCircle,
    path: "/help",
    color: "text-teal-light",
    gradient: "from-[hsl(var(--teal-light))] to-[hsl(var(--sky))]",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const ServiceCards = () => {
  const navigate = useNavigate();

  return (
    <section className="relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--amber))/0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--teal))/0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="uni-section relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="accent-line" />
            <span className="uni-label">Explore Resources</span>
            <div className="accent-line" style={{ transform: "scaleX(-1)" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="uni-heading-lg"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Thrive</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="uni-body mt-4 max-w-lg mx-auto"
          >
            Access all student services from one place — built for your success.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.path}
              variants={item}
              onClick={() => navigate(service.path)}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[13px] text-muted-foreground font-body leading-relaxed mb-5">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(service.path);
                  }}
                  className="relative z-10 inline-flex items-center gap-2 text-[11px] font-body font-semibold tracking-[0.12em] uppercase text-accent border-b border-accent/30 pb-1 hover:border-accent hover:gap-3 transition-all duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
