import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Shield, Globe } from "lucide-react";
import heroLibrary from "@/assets/hero-library.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Practice School Program",
    description: "PS-I summer internship and a full-semester paid PS-II — industry experience built into the curriculum.",
    color: "from-[hsl(var(--amber))] to-[hsl(var(--rose))]",
  },
  {
    icon: Shield,
    title: "Welfare-First Campus",
    description: "SWD scholarships, MCN aid, 24/7 medical, MPower mental health and a strong anti-ragging framework.",
    color: "from-[hsl(var(--teal))] to-[hsl(var(--emerald))]",
  },
  {
    icon: Globe,
    title: "Global 2+2 Pathways",
    description: "Dual-degree partnerships with RMIT, University at Buffalo, Iowa State, CentraleSupélec and RPI.",
    color: "from-[hsl(var(--violet))] to-[hsl(var(--sky))]",
  },
];

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      <div className="uni-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-foreground/10 group bg-foreground/5">
              <img
                src={heroLibrary}
                alt="University library"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
                width={1920}
                height={800}
                style={{
                  objectPosition: "center 35%",
                  filter: "brightness(0.92) contrast(1.08) saturate(0.9) sepia(0.08)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[hsl(var(--amber)/0.06)] mix-blend-overlay pointer-events-none" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-border/50"
            >
              <div className="font-display text-3xl font-bold gradient-text">100+</div>
              <div className="text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-muted-foreground mt-1">
                Student Clubs & Bodies
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="accent-line mb-6" />
            <h2 className="uni-heading-lg">
              Why Students Pick{" "}
              <span className="gradient-text">BPHC</span>
            </h2>
            <p className="uni-body mt-4 mb-10">
              A residential campus that pairs academic rigour with the people, programs
              and pathways that turn ideas into careers.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 group cursor-pointer"
                  onClick={() => navigate("/campus-life")}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={() => navigate("/campus-life")}
              className="mt-10 inline-flex items-center gap-2 text-sm font-body font-semibold text-accent hover:gap-3 transition-all duration-300"
            >
              Learn more about our campus <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
