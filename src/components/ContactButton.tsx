import { useState } from "react";
import { ArrowRight, Phone, Mail, X } from "lucide-react";

function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Nous contacter</div>
        <h2 className="font-display text-2xl text-balance">Une question sur votre formation ?</h2>
        <p className="mt-2 text-sm text-muted-foreground">Notre équipe vous répond et construit avec vous le parcours idéal.</p>
        <div className="mt-6 space-y-3">
          <a
            href="tel:+33978802232"
            className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium hover:border-primary/50 transition-colors"
          >
            <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <div className="font-medium">09 78 80 22 32</div>
              <div className="text-xs text-muted-foreground">Lun–Ven 14h–19h · Sam 10h–12h</div>
            </div>
          </a>
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
}

export function ContactButton({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = "tel:+33978802232";
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        Nous contacter <ArrowRight className="h-4 w-4" />
      </button>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
}
