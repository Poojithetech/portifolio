import { BookOpen, Music, Palette, Camera, Languages } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const hobbies = [
  { icon: BookOpen, label: "Reading" },
  { icon: Music, label: "Music" },
  { icon: Palette, label: "Design" },
  { icon: Camera, label: "Photography" },
];

export const Extras = () => (
  <section className="relative py-20">
    <div className="container">
      <SectionTitle
        eyebrow="Beyond Code"
        title={<>The <span className="text-gradient italic">human</span> behind the work</>}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="reveal glass rounded-3xl p-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">Hobbies</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {hobbies.map((h) => (
              <div key={h.label} className="flex flex-col items-center gap-3 p-4 rounded-2xl glass glow-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-foreground/10">
                  <h.icon size={20} className="text-accent-glow" />
                </div>
                <span className="text-sm">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal glass rounded-3xl p-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">Languages</div>
          <div className="space-y-5">
            {[
              { name: "Telugu", level: "Native", pct: 100 },
              { name: "English", level: "Professional", pct: 92 },
            ].map((l) => (
              <div key={l.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Languages size={16} className="text-accent-glow" />
                    <span className="font-medium">{l.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{l.level}</span>
                </div>
                <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
