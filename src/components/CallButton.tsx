import { ArrowRight, Phone, Mail, X, Copy, Check } from "lucide-react";
import { useState } from "react";

interface CallButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function CallButton({ className, children }: CallButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("09 78 80 22 32").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const defaultContent = (
    <>
      Nous contacter <ArrowRight className="h-4 w-4" />
    </>
  );

  return (
    <>
      {/* Mobile : appel direct */}
      <a
        href="tel:+33978802232"
        className={`md:hidden ${className}`}
      >
        {children ?? defaultContent}
      </a>

      {/* Desktop/tablette : ouvre le modal */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`hidden md:inline-flex ${className}`}
      >
        {children ?? defaultContent}
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Nous contacter
            </div>
            <h2 className="font-display text-2xl text-balance">
              Une question sur votre formation ?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Notre équipe vous répond et construit avec vous le parcours idéal.
            </p>

            <div className="mt-6 space-y-3">
              {/* Numéro — cliquable uniquement pour copier */}
              <button
                type="button"
                onClick={handleCopy}
                className="w-full flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium hover:border-primary/50 transition-colors text-left group"
              >
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">09 78 80 22 32</div>
                  <div className="text-xs text-muted-foreground">
                    Lun–Ven 14h–19h · Sam 10h–12h
                  </div>
                </div>
                <div className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                  {copied ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </div>
              </button>
              {copied && (
                <p className="text-xs text-primary text-center -mt-1">
                  Numéro copié dans le presse-papier !
                </p>
              )}

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
