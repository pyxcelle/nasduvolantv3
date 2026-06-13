import { ArrowRight, Phone, Mail, X } from "lucide-react";

interface CallButtonProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function CallButton({ className, children, id = "contact-modal" }: CallButtonProps) {
  const checkboxId = `${id}-checkbox`;
  const modalId    = `${id}-modal`;

  const defaultContent = (
    <>
      Nous contacter <ArrowRight className="h-4 w-4" />
    </>
  );

  return (
    <>
      <style>{`
        /* Checkbox toujours invisible */
        #${checkboxId} {
          position: absolute;
          opacity: 0;
          pointer-events: none;
          width: 0;
          height: 0;
        }

        /* Mobile → lien direct, pas de modal */
        .${id}-label-desktop { display: none; }
        .${id}-link-mobile   { display: inline-flex; }

        @media (min-width: 768px) {
          .${id}-label-desktop { display: inline-flex; }
          .${id}-link-mobile   { display: none; }
        }

        /* Modal caché par défaut */
        #${modalId} {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 200;
          padding: 2rem 1.5rem;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          /* centrage vertical avec scroll si écran trop petit */
          overflow-y: auto;
          align-items: flex-start;
          justify-content: center;
        }

        /* Visible quand cochée */
        #${checkboxId}:checked ~ #${modalId} {
          display: flex;
        }

        /* Overlay derrière la card */
        #${modalId} .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 0;
          cursor: default;
        }

        /* Card au-dessus de l'overlay */
        #${modalId} .modal-card {
          position: relative;
          z-index: 1;
          margin: auto;
          width: 100%;
          max-width: 24rem;
        }
      `}</style>

      {/* Checkbox cachée */}
      <input type="checkbox" id={checkboxId} />

      {/* Mobile : appel direct */}
      <a
        href="tel:+33978802232"
        className={`${id}-link-mobile items-center gap-2 ${className}`}
      >
        {children ?? defaultContent}
      </a>

      {/* Desktop : label ouvre le modal */}
      <label
        htmlFor={checkboxId}
        className={`${id}-label-desktop items-center gap-2 cursor-pointer ${className}`}
      >
        {children ?? defaultContent}
      </label>

      {/* Modal */}
      <div id={modalId} role="dialog" aria-modal="true" aria-label="Nous contacter">

        {/* Overlay — ferme le modal */}
        <label htmlFor={checkboxId} className="modal-overlay" aria-label="Fermer le modal" />

        {/* Card — z-index: 1, au-dessus de l'overlay */}
        <div className="modal-card rounded-3xl border border-border bg-card p-8 shadow-card">

          {/* Croix */}
          <label
            htmlFor={checkboxId}
            className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </label>

          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Nous contacter</div>
          <h2 className="font-display text-2xl text-balance">Une question sur votre formation ?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Notre équipe vous répond et construit avec vous le parcours idéal.
          </p>

          <div className="mt-6 space-y-3">
            {/* Numéro — sélectionnable, non cliquable, pointer-events: auto sur le contenu */}
            <div
              className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium"
              style={{ userSelect: "text" }}
            >
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

            {/* Email */}
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
