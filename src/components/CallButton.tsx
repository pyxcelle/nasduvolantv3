import { ArrowRight, Phone, Mail, X } from "lucide-react";

interface CallButtonProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function CallButton({ className, children, id = "contact-modal" }: CallButtonProps) {
  const checkboxId = `${id}-checkbox`;
  const modalId = `${id}-modal`;

  const defaultContent = (
    <>
      Nous contacter <ArrowRight className="h-4 w-4" />
    </>
  );

  return (
    <>
      <style>{`
        /* L'input checkbox est toujours caché */
        #${checkboxId} {
          position: absolute;
          opacity: 0;
          pointer-events: none;
          width: 0;
          height: 0;
        }

        /* Mobile : label = lien direct, pas de modal */
        .${id}-label-desktop { display: none; }
        .${id}-link-mobile   { display: inline-flex; }

        /* Desktop : label = bouton modal, lien mobile masqué */
        @media (min-width: 768px) {
          .${id}-label-desktop { display: inline-flex; }
          .${id}-link-mobile   { display: none; }
        }

        /* Modal : caché par défaut */
        #${modalId} {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 200;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
        }

        /* Modal visible quand checkbox cochée */
        #${checkboxId}:checked ~ #${modalId} {
          display: flex;
        }
      `}</style>

      {/* Checkbox cachée — pilote le modal */}
      <input type="checkbox" id={checkboxId} />

      {/* Mobile : appel direct (pas de label, pas de modal) */}
      <a
        href="tel:+33978802232"
        className={`${id}-link-mobile items-center gap-2 ${className}`}
      >
        {children ?? defaultContent}
      </a>

      {/* Desktop : label qui coche la checkbox → ouvre le modal */}
      <label
        htmlFor={checkboxId}
        className={`${id}-label-desktop items-center gap-2 cursor-pointer ${className}`}
      >
        {children ?? defaultContent}
      </label>

      {/* Modal — CSS-only, fermé par un second label (décocher) */}
      <div id={modalId}>
        {/* Overlay cliquable pour fermer */}
        <label
          htmlFor={checkboxId}
          className="absolute inset-0"
          aria-label="Fermer"
          style={{ cursor: "default" }}
        />

        <div
          className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-card"
          style={{ zIndex: 1 }}
        >
          {/* Croix — ferme le modal */}
          <label
            htmlFor={checkboxId}
            className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer flex items-center justify-center"
          >
            <X className="h-4 w-4" />
          </label>

          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Nous contacter</div>
          <h2 className="font-display text-2xl text-balance">Une question sur votre formation ?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Notre équipe vous répond et construit avec vous le parcours idéal.</p>

          <div className="mt-6 space-y-3">
            {/* Numéro — sélectionnable */}
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
    </>
  );
}
