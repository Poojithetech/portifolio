import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const FADE_IN_MS = 500;
const FADE_OUT_MS = 500;
const FADE_OUT_BEFORE_END_S = 0.55;

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const fadeStateRef = useRef<"in" | "hold" | "out">("in");
  const fadeStartRef = useRef<number>(0);
  const [email, setEmail] = useState("");

  // Custom RAF-based fade system
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = "0";

    const startFadeIn = () => {
      fadeStateRef.current = "in";
      fadeStartRef.current = performance.now();
    };

    const tick = () => {
      const v = videoRef.current;
      if (!v) return;
      const now = performance.now();

      if (fadeStateRef.current === "in") {
        const t = Math.min(1, (now - fadeStartRef.current) / FADE_IN_MS);
        v.style.opacity = t.toFixed(3);
        if (t >= 1) fadeStateRef.current = "hold";
      } else if (fadeStateRef.current === "hold") {
        const remaining = (v.duration || 0) - v.currentTime;
        if (remaining <= FADE_OUT_BEFORE_END_S + FADE_OUT_MS / 1000) {
          fadeStateRef.current = "out";
          fadeStartRef.current = now;
        }
      } else if (fadeStateRef.current === "out") {
        const t = Math.min(1, (now - fadeStartRef.current) / FADE_OUT_MS);
        v.style.opacity = (1 - t).toFixed(3);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const onPlay = () => {
      startFadeIn();
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    };

    const onEnded = () => {
      // Reset and replay smoothly
      v.currentTime = 0;
      v.style.opacity = "0";
      v.play().catch(() => {});
      startFadeIn();
    };

    const v = video;
    v.addEventListener("play", onPlay);
    v.addEventListener("ended", onEnded);

    // Kick things off
    v.play().catch(() => {});

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("ended", onEnded);
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:poojimedabayina@gmail.com?subject=Project%20inquiry&body=From:%20${encodeURIComponent(
      email
    )}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] pointer-events-none"
        src={VIDEO_URL}
        muted
        playsInline
        autoPlay
        preload="auto"
        // No `loop` — we re-play manually for smooth fade
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_hsl(var(--background))_85%)] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none mix-blend-overlay" />

      {/* Floating glows */}
      <div className="absolute -top-20 -left-20 w-[420px] h-[420px] blur-grad opacity-60" />
      <div
        className="absolute -bottom-32 -right-20 w-[460px] h-[460px] blur-grad opacity-50"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.6), transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 container px-6 pt-32 pb-20 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-wide text-foreground/80 mb-8 animate-fade-in">
          <Sparkles size={14} className="text-accent-glow" />
          Available for freelance & collaborations
        </div>

        <h1 className="font-serif text-[clamp(2.5rem,7vw,5.75rem)] leading-[1.02] tracking-tight animate-fade-in">
          <span className="block text-foreground/95">Turning Data into</span>
          <span className="block">
            <span className="text-gradient italic">Decisions</span>
            <span className="text-foreground/80"> & Ideas into </span>
            <span className="text-gradient-accent italic">Websites</span>
          </span>
        </h1>

        <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "120ms" }}>
          Data Science Graduate · Full Stack Developer · 49+ Websites Delivered
        </p>

        {/* Glass input + CTA */}
        <form
          onSubmit={onSubscribe}
          className="mt-10 mx-auto max-w-xl glass rounded-full p-1.5 flex items-center gap-1.5 animate-scale-in"
          style={{ animationDelay: "240ms" }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email — let's build something"
            className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <button
            type="submit"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-accent text-background hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all"
          >
            Get in touch
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>

        {/* Socials */}
        <div className="mt-8 flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "360ms" }}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass w-11 h-11 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)] transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass w-11 h-11 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground hover:shadow-[0_0_24px_hsl(var(--accent)/0.5)] transition-all"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.3em] text-muted-foreground/70 animate-float">
        SCROLL
      </div>
    </section>
  );
};
