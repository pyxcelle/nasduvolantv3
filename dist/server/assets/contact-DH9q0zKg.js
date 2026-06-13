import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Phone, Mail, MapPin, Clock, Train } from "lucide-react";
function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-gradient-hero", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "Contact" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-display text-5xl lg:text-7xl text-balance max-w-3xl", children: [
        "Prenons ",
        /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "la route ensemble." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Une question, un devis, une inscription ? Appelez-nous ou écrivez-nous par email." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "tel:+33978802232", className: "inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
          " 09 78 80 22 32"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "mailto:nasduvolant@gmail.com", className: "inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-base font-medium hover:bg-secondary transition-colors", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }),
          " nasduvolant@gmail.com"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        [{
          icon: MapPin,
          t: "Adresse",
          v: "133 Av. Franklin Roosevelt\n69500 Bron"
        }, {
          icon: Phone,
          t: "Téléphone",
          v: "09 78 80 22 32"
        }, {
          icon: Mail,
          t: "Email",
          v: "nasduvolant@gmail.com"
        }, {
          icon: Clock,
          t: "Horaires d'ouverture",
          v: "Lundi au vendredi : 14h00 – 19h00\nSamedi : 10h00 – 12h00\nDimanche : Fermé"
        }].map((b) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: b.t }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 whitespace-pre-line text-sm leading-relaxed", children: b.v })
          ] })
        ] }, b.t)),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-primary/30 bg-primary/5 p-6", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Contactez-nous :" }),
            " par téléphone pour une réponse immédiate, ou par email si vous préférez nous écrire."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs("a", { href: "tel:+33978802232", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
              " Appeler maintenant"
            ] }),
            /* @__PURE__ */ jsxs("a", { href: "mailto:nasduvolant@gmail.com", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
              " Envoyer un email"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-border h-[480px]", children: /* @__PURE__ */ jsx("iframe", { title: "Plan N'as du Volant", src: "https://www.google.com/maps?q=133+Av.+Franklin+Roosevelt,+69500+Bron&output=embed", className: "h-full w-full grayscale contrast-125", loading: "lazy" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(Train, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Accès" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl", children: "Comment venir" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-3", children: "Tram" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "T2 & T5" }),
            " — Arrêt ",
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Desgenettes" }),
            " (3 min à pied) ou ",
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Bron Hôtel de Ville" }),
            " (5 min à pied)"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-3", children: "Bus" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Lignes 24, 79, C17" }),
            " — Arrêts sur l'avenue Franklin Roosevelt à quelques pas de l'agence"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-3", children: "Voiture & vélo" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2 text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "Parking disponible à proximité. Pistes cyclables sur l'avenue Franklin Roosevelt. Vélos en libre-service (Vélo'v) dans le quartier." }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Contact as component
};
