import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { REGISTER_URL } from "@/lib/constants";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BDG Game | Online Gaming & Colour Prediction Platform" },
      {
        name: "description",
        content:
          "Learn about BDG Game (bdgwin) — a modern online gaming platform offering Wingo, K3, 5D, Aviator and more.",
      },
      { property: "og:title", content: "About BDG Game" },
      { property: "og:description", content: "About the BDG Game platform, mission and games offered." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="font-display text-4xl font-black md:text-5xl">
          About <span className="text-primary">BDG Game</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          BDG Game (bdgwin) is a fast-growing online gaming and colour prediction platform that
          offers a curated selection of games including Wingo, K3, 5D, Poker, Slots and Aviator.
        </p>
        <div className="mt-10 space-y-6 text-foreground/90">
          <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
            <h2 className="font-display text-2xl font-bold text-primary">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              To deliver a fast, fair and secure gaming experience where users can enjoy a variety
              of prediction-based and entertainment games — and earn real rewards instantly.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
            <h2 className="font-display text-2xl font-bold text-primary">What We Offer</h2>
            <ul className="mt-3 grid gap-2 text-muted-foreground sm:grid-cols-2">
              <li>• Wingo Colour Prediction</li>
              <li>• K3 Dice Game</li>
              <li>• 5D Lottery</li>
              <li>• Aviator Crash Game</li>
              <li>• Slots & Casino</li>
              <li>• Poker, Plinko, Limbo</li>
              <li>• UPI & Bank Withdrawals</li>
              <li>• Refer & Earn Program</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
            <h2 className="font-display text-2xl font-bold text-primary">Why Players Trust Us</h2>
            <p className="mt-3 text-muted-foreground">
              Secure OTP verification, encrypted wallet transactions, fast withdrawals starting
              from ₹100, a generous welcome bonus and 24/7 platform availability.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[image:var(--gradient-gold)] px-8 py-4 font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            Join BDG Game
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
