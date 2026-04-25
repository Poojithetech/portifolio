import { Briefcase, GraduationCap, Code2, Sparkles } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const highlights = [
  { icon: GraduationCap, label: "Data Science Graduate", desc: "BSc in Data Science with strong foundations in ML, statistics & analytics." },
  { icon: Code2, label: "Full Stack Developer", desc: "React, Vite, Node — shipping production-grade, conversion-focused websites." },
  { icon: Briefcase, label: "Intern @ Staffarc", desc: "Joined Feb 19, 2026 — building real client projects end-to-end." },
  { icon: Sparkles, label: "49+ Websites Delivered", desc: "Across e-commerce, healthcare, travel, AI & corporate verticals." },
];

export const About = () => (
  <section id="about" className="relative py-28 md:py-36">
    <div className="container">
      <SectionTitle
        eyebrow="About"
        title={<>The mind behind the <span className="text-gradient italic">pixels & predictions</span></>}
        subtitle="I sit at the intersection of data and design — extracting insight from numbers and translating ideas into experiences people remember."
      />

      <div className="grid md:grid-cols-5 gap-6 reveal">
        <div className="md:col-span-2 glass gradient-border rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 blur-grad opacity-50" />
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            "Hi, I'm <span className="text-gradient">Poojitha</span> — a curious builder who codes as fluently as she queries."
          </p>
          <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
            Based in Visakhapatnam, I've spent the last few years going deep on both ends of the modern web: the data that powers decisions, and the interfaces that turn those decisions into action. From training deep learning models to delivering 49+ websites for real clients, I bring a rare full-spectrum perspective.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Data Science", "ML / DL", "React", "Full Stack", "SEO"].map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full glass text-foreground/80">{t}</span>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
          {highlights.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-6 glow-hover relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mb-4 border border-foreground/10">
                  <h.icon size={20} className="text-accent-glow" />
                </div>
                <div className="font-serif text-xl mb-1.5">{h.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
