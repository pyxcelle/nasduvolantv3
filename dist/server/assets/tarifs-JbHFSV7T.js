import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Sparkles, Check } from "lucide-react";
const plans = [{
  name: "Code",
  price: "190",
  sub: "Forfait théorique seul",
  features: ["Inscription en préfecture", "Accès en ligne illimité 6 mois", "Cours en salle hebdomadaires", "Présentation à l'examen ETG"]
}, {
  name: "Permis B — 20h",
  price: "1 290",
  sub: "La formule complète",
  featured: true,
  features: ["Inscription + livret", "Forfait code complet", "20h de conduite", "Examens blancs", "Présentation pratique"]
}, {
  name: "Conduite Accompagnée",
  price: "1 390",
  sub: "AAC dès 15 ans",
  features: ["Forfait code complet", "20h de conduite", "2 rendez-vous pédagogiques", "Livret d'apprentissage", "Présentation à l'examen"]
}];
const extras = [{
  l: "Heure de conduite supplémentaire",
  p: "48 €"
}, {
  l: "Heure boîte automatique",
  p: "52 €"
}, {
  l: "Présentation à l'examen pratique",
  p: "80 €"
}, {
  l: "Stage code intensif (3 jours)",
  p: "120 €"
}, {
  l: "Évaluation initiale",
  p: "Offerte"
}, {
  l: "Frais de dossier",
  p: "Inclus"
}];
function Tarifs() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-36 bg-gradient-hero", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "Tarifs" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-display text-5xl lg:text-7xl max-w-3xl text-balance", children: [
        "Des prix clairs, ",
        /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "sans surprise." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Tout est inclus dans nos forfaits. Possibilité de paiement en 3 ou 4 fois sans frais." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid gap-6 lg:grid-cols-3", children: plans.map((p) => /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl p-8 lg:p-10 border " + (p.featured ? "bg-gradient-red text-primary-foreground border-primary shadow-red lg:scale-105" : "bg-card border-border shadow-card"), children: [
      p.featured && /* @__PURE__ */ jsxs("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary border border-primary/50", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
        " Le plus choisi"
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl", children: p.name }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.2em] " + (p.featured ? "opacity-80" : "text-muted-foreground"), children: p.sub }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-end gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-6xl", children: p.price }),
        /* @__PURE__ */ jsx("div", { className: "pb-2 text-lg", children: "€" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-3 text-sm " + (p.featured ? "" : ""), children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 mt-0.5 shrink-0 " + (p.featured ? "" : "text-primary") }),
        f
      ] }, f)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-xs text-muted-foreground italic", children: "Tarifs indicatifs — contactez-nous pour un devis personnalisé." })
    ] }, p.name)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-ink", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl lg:text-4xl text-balance", children: "À la carte" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 rounded-3xl border border-border bg-card divide-y divide-border overflow-hidden", children: extras.map((e) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: e.l }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-xl text-primary", children: e.p })
      ] }, e.l)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "* Tarifs indicatifs susceptibles d'évoluer. Contactez-nous pour un devis personnalisé." })
    ] }) })
  ] });
}
export {
  Tarifs as component
};
