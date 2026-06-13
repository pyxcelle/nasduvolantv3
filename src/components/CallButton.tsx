import { ArrowRight, Phone, Mail, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

interface CallButtonProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function CallButton({ className, children, id = "contact-modal" }: CallButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Évite le mismatch SSR : on monte le portal uniquement côté client
  useEffect(() => { setMounted(true); }, []);

  const defaultContent = (
    <>
      Nous contacter <ArrowRight className="h-4 w-4" />
    </>
  );

  const modal = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="rounded-3xl border border-border bg-card p-8 shadow-card"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "24rem",
          maxHeight: "calc(100vh - 4rem)",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer flex items-center justify-center"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Nous contacter</div>
        <h2 className="font-display text-2xl text-balance">Une question sur votre formation ?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Notre équipe vous répond et construit avec vous le parcours idéal.
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium">
            <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <div className="font-medium" style={{ userSelect: "text", cursor: "text" }}>
                09 78 80 22 32
              </div>
              <div className="text-xs text-muted-foreground">Lun–Ven 14h–19h · Sam 10h–12h</div>
            </div>
          </div>

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
  );

  return (
    <>
      <style>{`
        .${id}-link-mobile   { display: inline-flex; }
        .${id}-label-desktop { display: none; }
        @media (min-width: 768px) {
          .${id}-link-mobile   { display: none; }
          .${id}-label-desktop { display: inline-flex; }
        }
      `}</style>

      {/* Mobile : appel direct */}
      <a
        href="tel:+33978802232"
        className={`${id}-link-mobile items-center gap-2 ${className}`}
      >
        {children ?? defaultContent}
      </a>

      {/* Desktop : ouvre le modal */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${id}-label-desktop items-center gap-2 cursor-pointer ${className}`}
      >
        {children ?? defaultContent}
      </button>

      {/* Portal : rendu directement dans <body>, échappe tout stacking context */}
      {mounted && open && createPortal(modal, document.body)}
    </>
  );
}
