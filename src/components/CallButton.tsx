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
        #${checkboxId} {
          position: absolute;
          opacity: 0;
          pointer-events: none;
          width: 0;
          height: 0;
        }

        .${id}-label-desktop { display: none; }
        .${id}-link-mobile   { display: inline-flex; }

        @media (min-width: 768px) {
          .${id}-label-desktop { display: inline-flex; }
          .${id}-link-mobile   { display: none; }
        }

        #${modalId} { display: none; }
        #${checkboxId}:checked ~ #${modalId} { display: block; }
      `}</style>

      <input type="checkbox" id={checkboxId} />

      <a href="tel:+33978802232" className={`${id}-link-mobile items-center gap-2 ${className}`}>
        {children ?? defaultContent}
      </a>

      <label htmlFor={checkboxId} className={`${id}-label-desktop items-center gap-2 cursor-pointer ${className}`}>
        {children ?? defaultContent}
      </label>

      <div id={modalId}>
        {/* Overlay */}
        <label
          htmlFor={checkboxId}
          aria-label="Fermer le modal"
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 200,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            cursor: "default",
            display: "block",
          }}
        />

        {/* Card — centrée dans le viewport avec margin auto + flexbox trick */}
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 201,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1.5rem",
            pointerEvents: "none",
          }}
        >
          <div
            className="rounded-3xl border border-border bg-card p-8 shadow-card"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "24rem",
              maxHeight: "calc(100vh - 4rem)",
              overflowY: "auto",
              pointerEvents: "auto",
            }}
          >
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
      </div>
    </>
  );
}
