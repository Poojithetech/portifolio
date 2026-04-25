interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={`reveal mb-14 ${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}>
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] tracking-[0.25em] uppercase text-foreground/70 mb-5`}>
      <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
      {eyebrow}
    </div>
    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>
    )}
  </div>
);
