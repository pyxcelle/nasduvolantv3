import { Link } from "@tanstack/react-router";
import { Phone, Mail, X } from "lucide-react";

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
        /* ── Menu mobile ── */
        #mobile-menu-toggle { display: none; }
        #mobile-menu-toggle:checked ~ .mobile-overlay  { display: block; }
        #mobile-menu-toggle:checked ~ .mobile-panel    { transform: translateX(0); }
        #mobile-menu-toggle:checked ~ * header .burger-open  { display: none; }
        #mobile-menu-toggle:checked ~ * header .burger-close { display: flex; }
        .burger-close { display: none; }
        .mobile-panel { transform: translateX(100%); transition: transform 0.3s ease; }

        /* ── Modal contact header ── */
        #header-contact-checkbox { display: none; }
        #header-contact-modal    { display: none; }
        #header-contact-checkbox:checked ~ * #header-contact-modal { display: block; }
      `}</style>

      {/* Checkbox menu mobile */}
      <input type="checkbox" id="mobile-menu-toggle" />

      {/* Checkbox modal contact — EN DEHORS du header pour échapper au stacking context */}
      <input type="checkbox" id="header-contact-checkbox" />

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

          {/* Mobile : appel direct */}
          <a
            href="tel:+33978802232"
            className="sm:hidden inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all shrink-0"
          >
            <Phone className="h-4 w-4" /> 09 78 80 22 32
          </a>

          {/* Desktop : label qui ouvre le modal contact */}
          <label
            htmlFor="header-contact-checkbox"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all shrink-0 cursor-pointer"
          >
            <Phone className="h-4 w-4" /> 09 78 80 22 32
          </label>

          {/* Burger */}
          <label
            htmlFor="mobile-menu-toggle"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Ouvrir le menu"
          >
            <span className="burger-open flex flex-col gap-1.5 w-5">
              <span className="block h-0.5 w-5 bg-foreground rounded-full" />
              <span className="block h-0.5 w-5 bg-foreground rounded-full" />
              <span className="block h-0.5 w-5 bg-foreground rounded-full" />
            </span>
            <span className="burger-close items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </label>
        </div>
      </header>

      {/* Overlay menu mobile */}
      <label
        htmlFor="mobile-menu-toggle"
        className="mobile-overlay fixed inset-0 z-40 bg-black/50 lg:hidden cursor-pointer"
        style={{ display: "none" }}
      />

      {/* Panel menu mobile */}
      <div className="mobile-panel fixed top-0 right-0 z-50 h-full w-72 max-w-full bg-background shadow-2xl lg:hidden flex flex-col">
        <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
          <span className="font-display italic text-lg">N'as du Volant</span>
          <label htmlFor="mobile-menu-toggle" className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
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
          <a
            href="tel:+33978802232"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all"
          >
            <Phone className="h-4 w-4" /> 09 78 80 22 32
          </a>
        </div>
      </div>

      {/* ── Modal contact — EN DEHORS du header, z-index libre ── */}
      <div id="header-contact-modal">
        {/* Overlay */}
        <label
          htmlFor="header-contact-checkbox"
          style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", cursor: "default", display: "block" }}
        />
        {/* Wrapper centrage — pointer-events: none pour ne pas bloquer les clics */}
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem", pointerEvents: "none" }}>
          <div
            className="rounded-3xl border border-border bg-card p-8 shadow-card"
            style={{ position: "relative", width: "100%", maxWidth: "24rem", maxHeight: "calc(100vh - 4rem)", overflowY: "auto", pointerEvents: "auto" }}
          >
            <label
              htmlFor="header-contact-checkbox"
              className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer flex items-center justify-center"
            >
              <X className="h-4 w-4" />
            </label>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Nous contacter</div>
            <h2 className="font-display text-2xl text-balance">Une question sur votre formation ?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Notre équipe vous répond et construit avec vous le parcours idéal.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium">
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Phone className="h-4 w-4" /></div>
                <div>
                  <div style={{ userSelect: "text", cursor: "text" }} className="font-medium">09 78 80 22 32</div>
                  <div className="text-xs text-muted-foreground">Lun–Ven 14h–19h · Sam 10h–12h</div>
                </div>
              </div>
              <a href="mailto:nasduvolant@gmail.com" className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium hover:border-primary/50 transition-colors">
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Mail className="h-4 w-4" /></div>
                <div>
                  <div className="font-medium">nasduvolant@gmail.com</div>
                  <div className="text-xs text-muted-foreground">Réponse sous 24h</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
