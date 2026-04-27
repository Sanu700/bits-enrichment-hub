import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroMain from "@/assets/hero-main.jpg";

const stats = [
  { value: "15+", label: "Academic Programs" },
  { value: "11", label: "Hostels On Campus" },
  { value: "100+", label: "Clubs & Associations" },
  { value: "5", label: "Global 2+2 Partners" },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroMain}
          alt="BITS Hyderabad campus"
          className="w-full h-full object-cover"
        />

        {/* LIGHTER overlays (fix darkness) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.45),rgba(15,23,42,0.25),rgba(15,23,42,0.6))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.55),transparent,rgba(20,184,166,0.08))]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-40 md:pt-48 pb-20">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/80">
              BITS Pilani · Hyderabad Campus
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.95] drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            A Campus Built for
            <br />
            <span className="bg-gradient-to-r from-amber via-orange-300 to-amber bg-clip-text text-transparent">
              Curious
            </span>{" "}
            Minds
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-white/80 max-w-xl text-lg leading-relaxed"
          >
            From rigorous engineering and pharmacy programs to the celebrated
            Practice School and global 2+2 pathways — your single gateway to
            academics, hostels, clubs, scholarships and student welfare at BPHC.
          </motion.p>

          {/* Buttons */}
          <motion.div className="mt-10 flex gap-4">
            <Button
              onClick={() => navigate("/acads")}
              className="rounded-full px-8 py-6 text-sm font-semibold bg-gradient-to-r from-amber to-orange-400 text-white shadow-[0_10px_40px_rgba(245,158,11,0.35)] hover:scale-105 transition-all"
            >
              Explore Academics
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
  variant="outline"
  onClick={() => navigate("/admissions")}
  className="rounded-full px-8 py-6 text-sm font-semibold 
  border-white/40 text-white 
  bg-white/10 backdrop-blur-md 
  hover:bg-white/20 hover:text-white 
  transition-all duration-300"
>
  Admissions
</Button>
          </motion.div>
        </div>

        {/* Stats (glass instead of white fade) */}
        <div className="mt-24 bg-[rgba(15,23,42,0.35)] backdrop-blur-md rounded-2xl py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs uppercase text-white/60 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;