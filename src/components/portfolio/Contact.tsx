import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const WHATSAPP_NUMBER = "919390438559"; // +91 93904 38559

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || name.length > 100) return setError("Please enter a valid name (max 100 chars).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return setError("Please enter a valid email.");
    if (!message || message.length > 1000) return setError("Message is required (max 1000 chars).");

    const text = `Hi Poojitha, I'm ${name} (${email}).%0A%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <SectionTitle
          eyebrow="Let's Talk"
          title={<>Have a project? <span className="text-gradient italic">Let's build it.</span></>}
          subtitle="Whether it's a data problem, a website, or a wild idea — drop a message."
        />

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Info card */}
          <div className="reveal lg:col-span-2 glass gradient-border rounded-3xl p-8 relative overflow-hidden flex flex-col">
            <div className="absolute -top-24 -right-24 w-72 h-72 blur-grad opacity-40" />
            <div className="relative flex-1">
              <h3 className="font-serif text-3xl mb-2">Reach out</h3>
              <p className="text-muted-foreground text-sm mb-8">I usually reply within a day.</p>

              <div className="space-y-5">
                <a href="tel:9390438559" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center border border-foreground/10 group-hover:border-primary/40 transition-colors">
                    <Phone size={16} className="text-accent-glow" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Phone</div>
                    <div className="text-sm">+91 93904 38559</div>
                  </div>
                </a>
                <a href="mailto:poojimedabayina@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center border border-foreground/10 group-hover:border-primary/40 transition-colors">
                    <Mail size={16} className="text-accent-glow" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Email</div>
                    <div className="text-sm">poojimedabayina@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center border border-foreground/10">
                    <MapPin size={16} className="text-accent-glow" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Location</div>
                    <div className="text-sm">Visakhapatnam, Andhra Pradesh</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 flex items-center gap-3">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                 className="glass w-11 h-11 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground hover:shadow-[0_0_24px_hsl(var(--accent)/0.5)] transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"
                 className="glass w-11 h-11 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)] transition-all">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="reveal lg:col-span-3 glass rounded-3xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Name</label>
                <input
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-background/40 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Email</label>
                <input
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-background/40 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all"
                  placeholder="you@domain.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Message</label>
              <textarea
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-background/40 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all resize-none"
                placeholder="Tell me about your project…"
                required
              />
            </div>

            {error && <div className="text-xs text-destructive">{error}</div>}
            {sent && <div className="text-xs text-accent">Opening WhatsApp chat…</div>}

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-gradient-to-r from-primary to-accent text-background hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all"
            >
              Send via WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:translate-x-0.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
