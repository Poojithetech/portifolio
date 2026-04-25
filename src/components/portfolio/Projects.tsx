import { ArrowUpRight, Brain, Eye, Globe } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const dataProjects = [
  {
    icon: Brain,
    title: "Bone Fracture Detection",
    tag: "Deep Learning",
    desc: "CNN-based medical imaging model that classifies X-rays for fractures, designed to assist radiologists with rapid triage.",
  },
  {
    icon: Eye,
    title: "Outfit Color Suggestor",
    tag: "Computer Vision",
    desc: "Vision pipeline that detects garment colors and recommends complementary palettes using color theory + ML.",
  },
];

const webProjects = [
  { url: "https://www.aumorganicstore.com/", name: "Aum Organic Store", category: "E-commerce" },
  { url: "https://www.cgrowthbiosciences.com/", name: "C-Growth Biosciences", category: "Healthcare" },
  { url: "https://www.puneethtravels.in/", name: "Puneeth Travels", category: "Travel" },
  { url: "https://www.serenedermapharmaceutical.com/", name: "Serene Derma Pharma", category: "Pharma" },
  { url: "https://www.sreenex.com/", name: "Sreenex", category: "Corporate" },
  { url: "https://epioletransdermic.com/", name: "Epiole Transdermic", category: "Healthcare" },
  { url: "https://worldstringitsolutions.com/", name: "World String IT", category: "Technology" },
  { url: "https://www.talentiqai.com/", name: "TalentIQ AI", category: "AI / SaaS" },
  { url: "https://www.veerachandrammafunctionhall.in/", name: "Veera Chandramma Hall", category: "Hospitality" },
];

export const Projects = () => (
  <section id="projects" className="relative py-28">
    <div className="container">
      <SectionTitle
        eyebrow="Selected Work"
        title={<>Projects that <span className="text-gradient italic">ship & scale</span></>}
        subtitle="A curated mix of intelligent systems and client websites — each crafted with intent."
      />

      {/* Data Science */}
      <div className="reveal mb-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-foreground/10">
          <Brain size={16} className="text-accent-glow" />
        </div>
        <h3 className="font-serif text-2xl">Data Science</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {dataProjects.map((p) => (
          <article key={p.title} className="reveal glass gradient-border rounded-3xl p-8 glow-hover relative overflow-hidden group">
            <div className="absolute -top-16 -right-16 w-56 h-56 blur-grad opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-foreground/10">
                  <p.icon size={20} className="text-accent-glow" />
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{p.tag}</span>
              </div>
              <h4 className="font-serif text-2xl md:text-3xl mb-3">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Web Development */}
      <div className="reveal mb-6 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-foreground/10">
            <Globe size={16} className="text-accent-glow" />
          </div>
          <h3 className="font-serif text-2xl">Web Development</h3>
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="text-gradient font-medium">49+</span> websites built using modern technologies
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {webProjects.map((p, i) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="reveal glass rounded-2xl p-6 glow-hover relative overflow-hidden group"
            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">{p.category}</div>
                <div className="font-serif text-xl truncate">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1 truncate">
                  {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </div>
              </div>
              <div className="flex-shrink-0 w-9 h-9 rounded-full glass flex items-center justify-center text-foreground/70 group-hover:text-foreground group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
