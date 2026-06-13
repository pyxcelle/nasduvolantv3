import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
function Agence() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-gradient-hero", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "Notre agence" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-display text-5xl lg:text-7xl text-balance max-w-3xl", children: [
        "Venez nous ",
        /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "rencontrer." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Située au cœur de Bron, notre agence est facilement accessible en voiture, en bus ou à pied. Un seul moyen de nous contacter : le téléphone." }),
      /* @__PURE__ */ jsxs("a", { href: "tel:+33978802232", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all", children: [
        /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
        " 09 78 80 22 32"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Adresse" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 font-medium", children: "133 Avenue Franklin Roosevelt" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "69500 Bron" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Téléphone" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+33978802232", className: "mt-1 font-medium hover:text-primary transition-colors", children: "09 78 80 22 32" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:nasduvolant@gmail.com", className: "mt-1 font-medium hover:text-primary transition-colors", children: "nasduvolant@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Horaires d'ouverture" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-1.5 text-sm", children: [{
              j: "Lundi",
              h: "14h00 – 19h00"
            }, {
              j: "Mardi",
              h: "14h00 – 19h00"
            }, {
              j: "Mercredi",
              h: "14h00 – 19h00"
            }, {
              j: "Jeudi",
              h: "14h00 – 19h00"
            }, {
              j: "Vendredi",
              h: "14h00 – 19h00"
            }, {
              j: "Samedi",
              h: "10h00 – 12h00"
            }, {
              j: "Dimanche",
              h: "Fermé"
            }].map((l) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium w-24", children: l.j }),
              /* @__PURE__ */ jsx("span", { className: l.h === "Fermé" ? "text-muted-foreground" : "", children: l.h })
            ] }, l.j)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "N° Agrément préfectoral" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 font-medium", children: "E2206900220" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "SIRET : 911 800 423 00020 · RCS Lyon" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-border h-80 lg:h-96", children: /* @__PURE__ */ jsx("iframe", { title: "Plan N'as du Volant Bron", src: "https://www.google.com/maps?q=133+Avenue+Franklin+Roosevelt,+69500+Bron&output=embed", className: "h-full w-full grayscale contrast-125", loading: "lazy" }) }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-primary/20 bg-primary/5 p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl", children: "Comment venir ?" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-primary mb-2", children: "🚌 Bus" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsx("li", { children: "Ligne 24 — arrêt Franklin Roosevelt" }),
                /* @__PURE__ */ jsx("li", { children: "Ligne 79 — arrêt Franklin Roosevelt" }),
                /* @__PURE__ */ jsx("li", { children: "Ligne C17 — arrêt Franklin Roosevelt" }),
                /* @__PURE__ */ jsx("li", { children: "Ligne C26 — arrêt Bron" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-primary mb-2", children: "🚊 Tramway" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("li", { children: "T2 & T5 — arrêt Boutasse - Camille Rousset (1 min à pied)" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "https://www.google.com/maps/dir//133+Avenue+Franklin+Roosevelt,+69500+Bron", target: "_blank", rel: "noopener noreferrer", className: "mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline", children: [
            "Itinéraire Google Maps ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Agence as component
};
