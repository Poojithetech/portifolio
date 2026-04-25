import { Code, Database, Layers, Lightbulb, MessageSquare, Users, Wrench, BarChart3 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const technical = [
  { name: "Python", icon: Code },
  { name: "C", icon: Code },
  { name: "Java", icon: Code },
  { name: "SQL", icon: Database },
  { name: "React", icon: Layers },
  { name: "Vite", icon: Wrench },
  { name: "Node.js", icon: Layers },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Code },
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: BarChart3 },
];

const core = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Communication", icon: MessageSquare },
  { name: "Team Collaboration", icon: Users },
  { name: "Critical Thinking", icon: Lightbulb },
];

export const Skills = () => (
  <section id="skills" className="relative py-28">
    <div className="container">
      <SectionTitle
        eyebrow="Toolkit"
        title={<>Skills sharpened by <span className="text-gradient italic">shipping</span></>}
      />

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="reveal lg:col-span-3 glass gradient-border rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 blur-grad opacity-40" />
          <div className="relative">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">Technical</div>
            <div className="flex flex-wrap gap-3">
              {technical.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full glass border border-foreground/10 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all cursor-default"
                >
                  <s.icon size={14} className="text-accent-glow" />
                  <span className="text-sm">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal lg:col-span-2 glass gradient-border rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 blur-grad opacity-40" style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.5), transparent 70%)" }} />
          <div className="relative">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">Core</div>
            <div className="grid grid-cols-2 gap-3">
              {core.map((s) => (
                <div
                  key={s.name}
                  className="glass rounded-xl p-4 flex items-center gap-3 glow-hover"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-foreground/10">
                    <s.icon size={16} className="text-accent-glow" />
                  </div>
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
