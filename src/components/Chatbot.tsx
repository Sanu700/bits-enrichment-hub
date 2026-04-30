import { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight, Sparkles } from "lucide-react";
import { sections, type DetailItem } from "@/data/sections";

interface BotAction {
  label: string;
  to: string;
}

interface BotMessage {
  id: number;
  role: "bot" | "user";
  text: string;
  heading?: string;
  bullets?: string[];
  secondary?: string;
  action?: BotAction;
}

// Flattened searchable index built from existing site content only
interface IndexEntry {
  sectionKey: string;
  sectionTitle: string;
  basePath: string;
  item?: DetailItem;
  haystack: string;
  to: string;
  label: string;
  description: string;
  detail?: string;
  features?: string[];
  contactLine?: string;
}

const STOPWORDS = new Set([
  "the","a","an","is","are","of","to","in","on","for","and","or","with","what",
  "where","how","do","i","my","me","you","your","can","this","that","about",
  "please","tell","need","want","find","get","show","give","at","by","it","be",
]);

const tokenize = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((w) => w && !STOPWORDS.has(w));

const buildIndex = (): IndexEntry[] => {
  const entries: IndexEntry[] = [];
  for (const key of Object.keys(sections)) {
    const s = sections[key];
    // Section-level entry
    entries.push({
      sectionKey: key,
      sectionTitle: s.title,
      basePath: s.basePath,
      haystack: `${s.title} ${s.subtitle}`.toLowerCase(),
      to: s.basePath,
      label: `Open ${s.title}`,
      description: s.subtitle.split("\n")[0],
    });
    // Item-level entries
    for (const item of s.items) {
      const contactLine = item.contacts?.map((c) => `${c.label}: ${c.value}`).join(" • ");
      entries.push({
        sectionKey: key,
        sectionTitle: s.title,
        basePath: s.basePath,
        item,
        haystack: [
          item.title,
          item.description,
          item.detail,
          (item.features || []).join(" "),
          (item.contacts || []).map((c) => `${c.label} ${c.value}`).join(" "),
          s.title,
        ]
          .join(" ")
          .toLowerCase(),
        to: `${s.basePath}/${item.slug}`,
        label: `Open ${item.title}`,
        description: item.description,
        detail: item.detail,
        features: item.features,
        contactLine,
      });
    }
  }
  return entries;
};

const scoreEntry = (entry: IndexEntry, tokens: string[]): number => {
  if (!tokens.length) return 0;
  let score = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (entry.item?.title.toLowerCase().includes(t)) score += 6;
    if (entry.sectionTitle.toLowerCase().includes(t)) score += 3;
    if (entry.haystack.includes(t)) score += 2;
    // partial / stem-ish match
    if (t.length > 4 && entry.haystack.includes(t.slice(0, Math.max(4, t.length - 2)))) score += 1;
  }
  return score;
};

const search = (query: string, index: IndexEntry[]): IndexEntry | null => {
  const tokens = tokenize(query);
  if (!tokens.length) return null;
  let best: IndexEntry | null = null;
  let bestScore = 0;
  for (const e of index) {
    const s = scoreEntry(e, tokens);
    if (s > bestScore) {
      bestScore = s;
      best = e;
    }
  }
  return bestScore >= 3 ? best : null;
};

const summarize = (text: string | undefined, maxSentences = 3): string | undefined => {
  if (!text) return undefined;
  const clean = text.replace(/\s+/g, " ").trim();
  const parts = clean.split(/(?<=[.!?])\s+/);
  return parts.slice(0, maxSentences).join(" ");
};

const replyFor = (query: string, index: IndexEntry[]): Omit<BotMessage, "id" | "role"> => {
  const hit = search(query, index);
  if (!hit) {
    return {
      heading: "Need a hand?",
      text: "I'm not sure about that, but the Student Welfare Division team can help you directly.",
      bullets: [
        "Phone: +91-40-6630-3535",
        "Email: swd@hyderabad.bits-pilani.ac.in",
        "Hours: Mon–Fri, 9:00 AM – 5:30 PM",
      ],
      secondary: "You can also browse the Help section for office contacts (AUGSD, SWD, AGSRD, POSH).",
      action: { label: "Go to Help Section", to: "/help" },
    };
  }
  const heading = hit.item ? `${hit.item.title} — ${hit.sectionTitle}` : hit.sectionTitle;
  const overview = summarize(hit.detail, 3) || hit.description;
  const text = hit.detail && hit.description && !overview.toLowerCase().includes(hit.description.toLowerCase().slice(0, 20))
    ? `${hit.description} ${overview}`
    : overview;
  const bullets = hit.features?.slice(0, 4);
  return {
    heading,
    text,
    bullets,
    secondary: hit.contactLine,
    action: { label: hit.label, to: hit.to },
  };
};

const SUGGESTIONS = ["Hostel", "Mental Health", "Emergency"];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<BotMessage[]>([
    {
      id: 0,
      role: "bot",
      text: "Hi! Ask me anything about this site — I'll point you to the right section.",
    },
  ]);
  const idRef = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const index = useMemo(buildIndex, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    const userMsg: BotMessage = { id: idRef.current++, role: "user", text };
    const reply = replyFor(text, index);
    const botMsg: BotMessage = { id: idRef.current++, role: "bot", ...reply };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full gradient-accent text-white shadow-2xl shadow-amber/30 flex items-center justify-center border border-white/20 backdrop-blur-xl"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-[60] w-[min(22rem,calc(100vw-3rem))] h-[32rem] bg-card/95 backdrop-blur-2xl border border-border/50 rounded-3xl shadow-2xl shadow-foreground/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="relative">
              <div className="h-1 w-full bg-gradient-to-r from-amber via-rose to-violet" />
              <div className="px-4 py-3 flex items-center gap-3 border-b border-border/40">
                <div className="w-9 h-9 rounded-full gradient-accent flex items-center justify-center shadow-md shadow-amber/20">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-display text-sm font-bold text-foreground">Campus Assistant</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70">Searches this site only</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] font-body leading-relaxed ${
                      m.role === "user"
                        ? "bg-foreground text-background rounded-br-sm"
                        : "bg-secondary/70 text-foreground rounded-bl-sm border border-border/40"
                    }`}
                  >
                    {m.heading && (
                      <p className="mb-1.5 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
                        {m.heading}
                      </p>
                    )}
                    <p className="whitespace-pre-line">{m.text}</p>
                    {m.bullets && m.bullets.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {m.bullets.map((b) => (
                          <li key={b} className="flex gap-1.5 text-[12px] text-foreground/80">
                            <span className="text-accent mt-0.5">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {m.secondary && (
                      <p className="mt-2 text-[12px] text-muted-foreground border-t border-border/30 pt-1.5">{m.secondary}</p>
                    )}
                    {m.action && (
                      <Link
                        to={m.action.to}
                        onClick={() => setOpen(false)}
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg gradient-accent text-white text-[11px] font-semibold tracking-wide shadow-md shadow-amber/20 hover:shadow-lg hover:shadow-amber/30 transition-all hover:gap-2"
                      >
                        {m.action.label}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Suggestions */}
            <div className="px-3 pt-2 pb-1.5 flex flex-wrap gap-1.5 border-t border-border/40">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-body font-medium bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/40 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="px-3 pb-3 pt-1.5 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about anything on this site…"
                className="flex-1 h-10 rounded-xl bg-secondary/60 border border-border/40 px-3.5 text-[13px] font-body text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-amber/30 focus:border-amber/40 transition-all"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="w-10 h-10 rounded-xl gradient-accent text-white flex items-center justify-center shadow-md shadow-amber/20 hover:shadow-lg hover:shadow-amber/30 hover:scale-105 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
