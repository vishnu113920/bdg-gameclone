import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, Clock, Wallet, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/responsible-gaming")({
  head: () => ({
    meta: [
      { title: "Responsible Gaming | BDG Game" },
      {
        name: "description",
        content:
          "BDG Game promotes responsible gaming. Set limits, take breaks and play for entertainment — never for income.",
      },
      { property: "og:title", content: "Responsible Gaming — BDG Game" },
      { property: "og:description", content: "Tips and guidelines for responsible play on BDG Game." },
    ],
  }),
  component: ResponsibleGaming,
});

const tips = [
  { icon: Wallet, title: "Set a Budget", desc: "Decide how much you can afford to spend before you start — and never exceed it." },
  { icon: Clock, title: "Limit Play Time", desc: "Take regular breaks. Gaming is for entertainment, not a way to spend every hour." },
  { icon: ShieldCheck, title: "Play for Fun", desc: "Treat gaming as entertainment, not as a source of income or a way to recover losses." },
  { icon: AlertTriangle, title: "Know the Signs", desc: "If gaming feels stressful or affects your daily life, pause and seek support." },
];

function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <ShieldCheck size={14} /> 18+ Only
        </span>
        <h1 className="mt-6 font-display text-4xl font-black md:text-5xl">
          Responsible <span className="text-primary">Gaming</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          At BDG Game we believe gaming should always be fun, safe and under your control. Online
          gaming involves financial risk and can be addictive. Please play responsibly.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {tips.map((t) => (
            <div key={t.title} className="rounded-2xl border border-border/60 bg-card/60 p-6">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-gold)] text-primary-foreground">
                <t.icon size={20} />
              </div>
              <h3 className="font-display text-xl font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-destructive/40 bg-destructive/10 p-6">
          <h2 className="font-display text-xl font-bold text-destructive-foreground">
            Need Help?
          </h2>
          <p className="mt-2 text-sm text-foreground/85">
            If you or someone you know is struggling with gaming-related issues, please reach out
            to a local helpline or counsellor. Take a break — your wellbeing always comes first.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
