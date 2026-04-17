import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="inline-block rounded-md border-2 border-primary bg-background px-3 py-1.5 font-display text-lg font-black tracking-wider text-primary">
              BDG GAME
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted destination for Wingo, K3, 5D, Aviator and more colour prediction games.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">BDG Game Login</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/responsible-gaming" className="hover:text-primary">Responsible Gaming</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-primary">Play Responsibly</h4>
            <p className="text-sm text-muted-foreground">
              18+ only. Gaming involves financial risk and may be addictive. Please play responsibly.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} BDG Game. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
