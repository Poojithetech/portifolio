const stats = [
  { value: "49+", label: "Websites Delivered" },
  { value: "2+", label: "Domains Mastered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "10+", label: "Live Production Sites" },
];

export const Stats = () => (
  <section className="relative py-16">
    <div className="container">
      <div className="reveal glass gradient-border rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        {stats.map((s) => (
          <div key={s.label} className="relative text-center">
            <div className="font-serif text-5xl md:text-6xl text-gradient mb-2">{s.value}</div>
            <div className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
