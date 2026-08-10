import { Briefcase, CheckCircle2, Sparkles } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const experiences = [
  {
    title: "Associate Trainee – EUC Client Engineering",
    company: "LTM Limited",
    group: "Cloud & Infrastructure",
    period: "May 20, 2026 · Present",
    status: "current",
    description:
      "Joined LTM Limited as an Associate Trainee in Cloud & Infrastructure. Completed CIS Multitech training covering Windows, Azure, PowerShell, DevOps, ITIL, and Networking, and currently working in End User Computing (EUC) in Hyderabad.",
    points: [
      "Completed CIS Multitech training across Windows, Azure, PowerShell, DevOps, ITIL, and Networking.",
      "Currently working in EUC Client Engineering with exposure to Microsoft 365, VDI, Intune, SCCM, Image Management, Application Packaging, and DEX.",
      "Building knowledge of enterprise endpoint management, virtual desktop environments, application deployment, and client engineering technologies.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "StaffArc",
    group: "Full Stack Development",
    period: "Jan 19, 2026 · Apr 20, 2026",
    status: "completed",
    description:
      "Completed an on-site Full Stack Development internship at StaffArc, gaining practical exposure to IT and full-stack website development.",
    points: [
      "Completed a structured internship in Full Stack Development.",
      "Worked on assigned projects and responsibilities related to IT and full-stack website development.",
      "Gained practical exposure to web development and software development practices.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="relative py-28">
    <div className="container max-w-6xl">
      <SectionTitle
        eyebrow="Experience"
        title={<>Where ideas <span className="text-gradient italic">meet deployment</span></>}
      />

      <div className="reveal glass gradient-border rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 blur-grad opacity-40" />
        <div className="relative grid gap-10">
          <div className="hidden md:block absolute inset-y-8 left-8 w-px bg-gradient-to-b from-accent/80 via-transparent to-transparent" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.company} className="relative grid gap-6 md:grid-cols-[52px_minmax(0,1fr)] items-start">
                <div className="flex flex-col items-center">
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-3xl border-2 ${
                      experience.status === "current"
                        ? "border-accent bg-gradient-to-br from-accent to-primary shadow-[0_0_18px_rgba(56,189,248,0.25)]"
                        : "border-foreground/10 bg-slate-950/80"
                    }`}
                  >
                    <Briefcase size={22} className={`text-white ${experience.status === "current" ? "text-white" : "text-muted-foreground"}`} />
                  </div>
                  {index < experiences.length - 1 && (
                    <span className="mt-4 block h-full w-px bg-gradient-to-b from-accent/50 to-transparent" />
                  )}
                </div>

                <div className={`glass rounded-[2rem] p-8 border ${experience.status === "current" ? "border-accent/30" : "border-foreground/10"} shadow-[0_24px_80px_rgba(15,23,42,0.08)]`}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                    <div>
                      <div className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-2">
                        {experience.status === "current" ? "Current Role" : "Completed"}
                      </div>
                      <h3 className="font-serif text-3xl leading-tight text-foreground">{experience.title}</h3>
                      <div className="mt-2 text-foreground/75">
                        {experience.company} <span className="text-muted-foreground">· {experience.group}</span>
                      </div>
                    </div>
                    <div className={`rounded-full px-4 py-2 text-xs font-medium ${
                      experience.status === "current"
                        ? "bg-gradient-to-r from-primary/15 to-accent/15 text-accent"
                        : "bg-white/5 text-muted-foreground"
                    }`}> 
                      {experience.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{experience.description}</p>
                  <ul className="space-y-3">
                    {experience.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                        <Sparkles size={16} className="mt-1 text-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
