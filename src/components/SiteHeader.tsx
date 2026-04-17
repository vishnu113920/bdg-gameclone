import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGIN_URL, REGISTER_URL } from "@/lib/constants";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "BDG Game Login" },
    { to: "/about", label: "About Us" },
    { to: "/responsible-gaming", label: "Responsible Gaming" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 md:px-6 md:py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="rounded-md border-2 border-primary bg-background px-2 py-1 font-display text-sm font-black tracking-wider text-primary md:px-3 md:py-1.5 md:text-xl">
            BDG GAME
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-primary px-4 py-1.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Login
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[image:var(--gradient-gold)] px-5 py-2 text-sm font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            Register
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md p-2 text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-muted hover:text-primary"
                activeProps={{ className: "text-primary bg-muted" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg border-2 border-primary px-4 py-2 text-center text-sm font-bold text-primary"
            >
              Login
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[image:var(--gradient-gold)] px-4 py-2.5 text-center text-sm font-bold text-primary-foreground"
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
