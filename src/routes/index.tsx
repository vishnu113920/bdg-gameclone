import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Download, Sparkles, Wallet, Trophy, ShieldCheck, Gift } from "lucide-react";
import { GuideArticles } from "@/components/GuideArticles";

const EXTERNAL_URL = "https://bdggamein.in.net/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BDG Game Login | Register & Play Wingo, K3, Aviator" },
      {
        name: "description",
        content:
          "BDG Game (bdgwin) login & registration. Play Wingo, K3, 5D, Poker, Slots and Aviator. Get up to ₹150 welcome bonus.",
      },
      { property: "og:title", content: "BDG Game Login | Register & Play" },
      { property: "og:description", content: "Login or register on BDG Game. Play Wingo, K3, 5D, Aviator and more." },
    ],
  }),
  component: HomePage,
});

const features = [
  { label: "App Name", value: "BDG GAME" },
  { label: "Game Version", value: "2.1" },
  { label: "Platform Type", value: "Wingo, K3, 5D, Poker, Aviator" },
  { label: "App Size", value: "15 MB" },
  { label: "Invite Code", value: "65456515615615" },
  { label: "Welcome Bonus", value: "Up to ₹150" },
];

const games = [
  { name: "Wingo", desc: "Fast colour & number prediction." },
  { name: "K3", desc: "Classic dice prediction game." },
  { name: "5D", desc: "Five-digit lottery thrills." },
  { name: "Aviator", desc: "Cash out before it flies away." },
  { name: "Slots", desc: "Spin & win with vibrant slots." },
  { name: "Poker", desc: "Test your skills at the table." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.82_0.16_85/0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles size={14} /> Welcome Bonus Up to ₹150
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl">
              <span className="bg-[image:var(--gradient-gold)] bg-clip-text text-transparent">
                BDG Game Login
              </span>
              <br />
              <span className="text-foreground">Play. Predict. Win.</span>
            </h1>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              BDG Game (bdgwin) is a fast-growing online gaming and colour prediction platform
              featuring Wingo, K3, 5D, Poker, Slots and Aviator — win real rewards, instantly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[image:var(--gradient-gold)] px-7 py-3 text-base font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
              >
                Login Now
              </a>
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-primary px-7 py-3 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Register Free
              </a>
            </div>
          </div>

          {/* App info card */}
          <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-border/60 bg-card/70 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
            <h2 className="mb-6 text-center font-display text-2xl font-bold text-primary">
              BDG Game App
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 px-4 py-3"
                >
                  <span className="text-sm font-medium text-muted-foreground">{f.label}</span>
                  <span className="text-sm font-bold text-foreground">{f.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-gold)] px-6 py-3 font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
              >
                <Download size={18} /> Download APK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <h2 className="text-center font-display text-3xl font-black md:text-4xl">
          Why Choose <span className="text-primary">BDG Game?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          A modern gaming platform built for speed, security and serious rewards.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: Trophy, title: "Real Rewards", desc: "Win cash on Wingo, Aviator, Slots and more — credited instantly." },
            { icon: Wallet, title: "Fast Withdrawals", desc: "UPI & bank withdrawals processed within hours, starting ₹100." },
            { icon: ShieldCheck, title: "Safe & Secure", desc: "OTP verification, encrypted wallet and trusted transactions." },
            { icon: Gift, title: "Welcome Bonus", desc: "Get up to ₹150 bonus when you register and verify your account." },
            { icon: Sparkles, title: "Variety of Games", desc: "Wingo, K3, 5D, Poker, Aviator, Slots, Plinko and Limbo." },
            { icon: Download, title: "Lightweight APK", desc: "Just 15MB — smooth performance on any Android device." },
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border/60 bg-card/60 p-6 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-gold)] text-primary-foreground">
                <f.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Games */}
      <section className="border-y border-border/60 bg-card/30 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center font-display text-3xl font-black md:text-4xl">
            Popular <span className="text-primary">Game Categories</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((g, i) => (
              <div
                key={g.name}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-6 transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[image:var(--gradient-gold)] opacity-10 blur-2xl" />
                <span className="text-xs font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-2 font-display text-2xl font-black text-foreground">{g.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-5xl px-4 py-14 md:px-6">
        <h2 className="text-center font-display text-3xl font-black md:text-4xl">
          How to <span className="text-primary">Register & Login</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
            <h3 className="font-display text-xl font-bold text-primary">Register in 4 Steps</h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>1. Visit the official BDG Game registration page.</li>
              <li>2. Enter your active mobile number.</li>
              <li>3. Set a strong password and verify with OTP.</li>
              <li>4. (Optional) Add invite code for extra benefits.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
            <h3 className="font-display text-xl font-bold text-primary">Login in Seconds</h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>1. Open the BDG Game app or trusted website.</li>
              <li>2. Tap the Login option on the home screen.</li>
              <li>3. Enter your registered mobile and password.</li>
              <li>4. Click Sign In to access your dashboard.</li>
            </ol>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href={EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-gold)] px-8 py-4 text-lg font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            Login / Register Now
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
