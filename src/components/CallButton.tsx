import { ArrowRight, Phone, Mail, X } from "lucide-react";
import { useState } from "react";

interface CallButtonProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function CallButton({ className, children, id = "contact-modal-toggle" }: CallButtonProps) {
  const [open, setOpen] = useState(false);

  const labelClass = `contact-modal-label-${id}`;
  const mobileClass = `contact-mobile-link-${id}`;

  const defaultContent = (
    <>
      Nous contacter <ArrowRight className="h-4 w-4" />
    </>
  );

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .${labelClass} { display: none !important; }
          .${mobileClass} { display: inline-flex !important; }
        }
        @media (min-width: 768px) {
          .${labelClass} { display: inline-flex !important; }
          .${mobileClass} { display: none !important; }
        }
      `}</style>

      {/* Mobile : appel direct */}
      <a
        href="tel:+33978802232"
        className={`${mobileClass} items-center gap-2 ${className}`}
        style={{ display: "none" }}
      >
        {children ?? defaultContent}
      </a>

      {/* Desktop/tablette : ouvre le modal */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${labelClass} items-center gap-2 cursor-pointer ${className}`}
        style={{ display: "none" }}
      >
        {children ?? defaultContent}
      </button>

      {/* Modal — React-controlled, fermeture uniquement via la croix ou l'overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Croix — ferme le modal */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Nous contacter</div>
            <h2 className="font-display text-2xl text-balance">Une question sur votre formation ?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Notre équipe vous répond et construit avec vous le parcours idéal.</p>

            <div className="mt-6 space-y-3">
              {/* Numéro — sélectionnable, non cliquable */}
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium select-text">
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium" style={{ userSelect: "text" }}>09 78 80 22 32</div>
                  <div className="text-xs text-muted-foreground">Lun–Ven 14h–19h · Sam 10h–12h</div>
                </div>
              </div>

              {/* Email — cliquable */}
              <a
                href="mailto:nasduvolant@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium hover:border-primary/50 transition-colors"
              >
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">nasduvolant@gmail.com</div>
                  <div className="text-xs text-muted-foreground">Réponse sous 24h</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
