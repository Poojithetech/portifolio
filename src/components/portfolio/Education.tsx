import { GraduationCap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const items = [
  {
    title: "BSc — Data Science",
    place: "Aditya Women's Degree College",
    score: "87.8%",
    period: "Undergraduate",
  },
  {
    title: "Intermediate — MPC",
    place: "Sri Chaitanya",
    score: "97.6%",
    period: "Higher Secondary",
  },
  {
    title: "SSC",
    place: "Mohan Secondary School",
    score: "9.8 CGPA",
    period: "Secondary",
  },
];

export const Education = () => (
  <section id="education" className="relative py-28">
    <div className="container">
      <SectionTitle
        eyebrow="Education"
        title={<>A foundation in <span className="text-gradient italic">numbers & nuance</span></>}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

        <div className="space-y-10">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`reveal relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_hsl(var(--primary)/0.7)]" />

              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="glass rounded-2xl p-6 glow-hover inline-block w-full">
                  <div className="flex items-center gap-3 mb-3 md:justify-start">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-foreground/10">
                      <GraduationCap size={16} className="text-accent-glow" />
                    </div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{it.period}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-1">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.place}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10">
                    <span className="text-xs text-muted-foreground">Score</span>
                    <span className="text-sm font-medium text-gradient">{it.score}</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
