import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { CallButton } from "./CallButton";

const nav = [
  { label: "Formations", to: "/formations" },
  { label: "Inscription", to: "/inscription" },
  { label: "Notre agence", to: "/agence" },
  { label: "Avis", to: "/avis" },
  { label: "Vérifications techniques", to: "/verification-technique" },
];

export function SiteHeader() {
  return (
    <>
      <style>{`
        #mobile-menu-toggle { display: none; }
        #mobile-menu-toggle:checked ~ .mobile-overlay { display: block; }
        #mobile-menu-toggle:checked ~ .mobile-panel { transform: translateX(0); }
        #mobile-menu-toggle:checked ~ header .burger-open { display: none; }
        #mobile-menu-toggle:checked ~ header .burger-close { display: flex; }
        .burger-close { display: none; }
        .mobile-panel { transform: translateX(100%); transition: transform 0.3s ease; }
      `}</style>

      <input type="checkbox" id="mobile-menu-toggle" className="hidden" />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex h-16 items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/images/logo-nas-du-volant.jpg" alt="N'as du Volant" width={40} height={40} className="h-9 w-auto rounded-md" />
            <span className="font-display italic text-xl hidden sm:block">N'as du Volant</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Header CTA — mobile appelle, desktop/tablette ouvre le modal */}
          <CallButton className="items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all shrink-0 hidden sm:inline-flex">
            <Phone className="h-4 w-4" /> 09 78 80 22 32
          </CallButton>

          {/* Burger label — triggers the checkbox */}
          <label
            htmlFor="mobile-menu-toggle"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Ouvrir le menu"
          >
            {/* Open icon */}
            <span className="burger-open flex flex-col gap-1.5 w-5">
              <span className="block h-0.5 w-5 bg-foreground rounded-full" />
              <span className="block h-0.5 w-5 bg-foreground rounded-full" />
              <span className="block h-0.5 w-5 bg-foreground rounded-full" />
            </span>
            {/* Close icon */}
            <span className="burger-close items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </label>
        </div>
      </header>

      {/* Overlay */}
      <label
        htmlFor="mobile-menu-toggle"
        className="mobile-overlay fixed inset-0 z-40 bg-black/50 lg:hidden cursor-pointer"
        style={{ display: "none" }}
      />

      {/* Panel */}
      <div className="mobile-panel fixed top-0 right-0 z-50 h-full w-72 max-w-full bg-background shadow-2xl lg:hidden flex flex-col">
        <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
          <span className="font-display italic text-lg">N'as du Volant</span>
          <label
            htmlFor="mobile-menu-toggle"
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </label>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="flex items-center rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              activeProps={{ className: "text-foreground font-medium bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-border shrink-0">
          {/* In mobile panel: always direct call */}
          <a
            href="tel:+33978802232"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all"
          >
            <Phone className="h-4 w-4" /> 09 78 80 22 32
          </a>
        </div>
      </div>
    </>
  );
}
