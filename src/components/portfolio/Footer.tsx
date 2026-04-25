export const Footer = () => (
  <footer className="relative py-10 border-t border-foreground/5">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <div className="font-serif text-base text-foreground/80">Medabayina Poojitha</div>
      <div>© {new Date().getFullYear()} — Crafted with intention in Visakhapatnam.</div>
    </div>
  </footer>
);
