import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
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
            {sent && <div className="text-xs text-accent">Opening your email client…</div>}

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-gradient-to-r from-primary to-accent text-background hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all"
            >
              Send message
              <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
