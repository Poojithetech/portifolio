import { Award } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const certs = [
  { name: "IBM AI Fundamentals", issuer: "IBM" },
  { name: "Cisco C Programming", issuer: "Cisco" },
  { name: "Python Essentials", issuer: "Cisco / OpenEDG" },
  { name: "SQL", issuer: "HackerRank" },
  { name: "AIML Basics", issuer: "AI/ML" },
  { name: "IBM Data Science", issuer: "IBM" },
];

export const Certifications = () => (
  <section id="certifications" className="relative py-28">
    <div className="container">
      <SectionTitle
        eyebrow="Credentials"
        title={<>Always <span className="text-gradient italic">learning</span></>}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <div
            key={c.name}
            className="reveal glass rounded-2xl p-6 glow-hover relative overflow-hidden group"
            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-foreground/10 flex-shrink-0">
                <Award size={18} className="text-accent-glow" />
              </div>
              <div>
                <div className="font-serif text-xl leading-tight">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{c.issuer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
