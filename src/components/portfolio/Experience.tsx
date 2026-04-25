import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const points = [
  "Built multiple production websites for real clients",
  "Delivered both frontend & backend across the stack",
  "Implemented SEO best practices for organic discoverability",
  "Hands-on with real-world deployment & performance tuning",
];

export const Experience = () => (
  <section id="experience" className="relative py-28">
    <div className="container max-w-5xl">
      <SectionTitle
        eyebrow="Experience"
        title={<>Where ideas <span className="text-gradient italic">meet deployment</span></>}
      />

      <div className="reveal glass gradient-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 blur-grad opacity-40" />
        <div className="relative grid md:grid-cols-3 gap-10">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mb-5 border border-foreground/10">
              <Briefcase size={22} className="text-accent-glow" />
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">Current Role</div>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight">Web Development Intern</h3>
            <div className="mt-3 text-foreground/80">Staffarc</div>
            <div className="mt-1 text-sm text-muted-foreground">Joined Feb 19, 2026 · Present</div>
          </div>

          <div className="md:col-span-2">
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Staffarc I work alongside a fast-moving team to design, develop and deploy modern websites for clients across industries — translating briefs into elegant, performant interfaces that ship to production.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
