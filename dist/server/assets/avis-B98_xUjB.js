import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ExternalLink, PenLine, Star, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
function useGoogleRating() {
  return useQuery({
    queryKey: ["google-rating"],
    queryFn: async () => {
      const res = await fetch("/api/google-rating");
      if (!res.ok) throw new Error("Erreur récupération note Google");
      return res.json();
    },
    // Revalider toutes les heures (cohérent avec le cache CDN)
    staleTime: 1e3 * 60 * 60,
    // Garder les données précédentes pendant 24h si le réseau échoue
    gcTime: 1e3 * 60 * 60 * 24,
    // Ne pas retenter trop agressivement si l'API est down
    retry: 1
  });
}
const temoignages = [{
  n: "Léa M.",
  note: 5,
  date: "Mars 2025",
  t: "Super auto-école, moniteurs à l'écoute et très patients. Permis obtenu du premier coup ! Je recommande vivement."
}, {
  n: "Karim B.",
  note: 5,
  date: "Février 2025",
  t: "Planning flexible, ce qui m'a permis de jongler avec mes études. Très bonne ambiance, équipe professionnelle."
}, {
  n: "Inès T.",
  note: 5,
  date: "Janvier 2025",
  t: "Conduite accompagnée parfaitement encadrée. Les rendez-vous pédagogiques sont très utiles. On se sent vraiment en confiance."
}, {
  n: "Mathieu R.",
  note: 5,
  date: "Décembre 2024",
  t: "Moniteur au top, pédagogue et bienveillant. Les cours de code sont bien organisés. Permis réussi !"
}, {
  n: "Sofia D.",
  note: 5,
  date: "Novembre 2024",
  t: "Très bonne expérience, je recommande à 100%. Moniteurs diplômés et véhicules récents. Formule boîte automatique parfaite pour moi."
}, {
  n: "Théo V.",
  note: 5,
  date: "Octobre 2024",
  t: "Agence au top du début à la fin. Inscription simple, suivi régulier et examen passé sereinement. Merci !"
}];
const PLACE_ID = "ChIJF2sXKTjB9EcR6ty4qnkxDlw";
const FALLBACK_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;
const FALLBACK_MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;
function Avis() {
  const {
    data: googleRating
  } = useGoogleRating();
  const reviewUrl = googleRating?.reviewUrl ?? FALLBACK_REVIEW_URL;
  const mapsUrl = googleRating?.mapsUrl ?? FALLBACK_MAPS_URL;
  const rating = googleRating?.rating ?? "4,9";
  const count = googleRating?.count ?? 233;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-gradient-hero", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "Avis Google" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-display text-5xl lg:text-7xl text-balance max-w-3xl", children: [
        "Ils ont eu ",
        /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "leur permis." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "La satisfaction de nos élèves est notre meilleure récompense. Retrouvez leurs témoignages directement sur Google." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: mapsUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all", children: [
          "Voir tous nos avis Google ",
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: reviewUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-secondary transition-colors", children: [
          "Laisser un avis ",
          /* @__PURE__ */ jsx(PenLine, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:grid-cols-3", children: temoignages.map((t) => /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-primary", children: [...Array(t.note)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
        /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-sm leading-relaxed text-foreground/80", children: [
          '"',
          t.t,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 flex justify-between items-center text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "— ",
            t.n
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs", children: t.date })
        ] })
      ] }, t.n)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-10 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 mb-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 fill-primary text-primary" }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "font-display text-5xl text-primary", children: [
          rating,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-2xl text-muted-foreground font-sans font-normal", children: "/ 5" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
          "Basé sur ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: count }),
          " avis Google"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-lg mx-auto text-muted-foreground leading-relaxed text-sm", children: "Vous avez obtenu votre permis chez N'as du Volant ? Partagez votre expérience sur Google et aidez les futurs élèves à faire leur choix." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: reviewUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all", children: [
            "Laisser mon avis Google ",
            /* @__PURE__ */ jsx(PenLine, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: mapsUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-secondary transition-colors", children: [
            "Voir sur Google Maps ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Avis as component
};
