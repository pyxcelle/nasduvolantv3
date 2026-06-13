import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Car, GraduationCap, BookOpen, CheckCircle2, Star } from "lucide-react";
import { useState, useEffect } from "react";
const PLACE_ID = "ChIJF2sXKTjB9EcR6ty4qnkxDlw";
function useGoogleRating() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/google-rating").then((r) => r.json()).then(setData).catch(() => {
    });
  }, []);
  return data;
}
function Home() {
  const googleRating = useGoogleRating();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-50", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/hero-driving.jpg", alt: "", className: "h-full w-full object-cover", width: 1600, height: 1100 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-32 lg:pt-40 lg:pb-52", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
          " Auto-école · Bron 69500"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-8 font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-balance", children: [
          "Apprenez à conduire ",
          /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "comme un as." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed", children: "Permis B, conduite accompagnée, code de la route — une équipe humaine, des moniteurs diplômés d'État, et un suivi sur-mesure à chaque virage." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "tel:+33978802232", className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all", children: [
            "Nous appeler",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/formations", className: "inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-secondary transition-colors", children: "Nos formations" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-2 gap-8 max-w-sm", children: [{
          v: googleRating ? `${googleRating.rating}/5` : "4,9/5",
          l: "Note Google"
        }, {
          v: googleRating ? String(googleRating.count) : "233+",
          l: "Avis Google"
        }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-3xl lg:text-4xl text-primary", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "Nos formations" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl lg:text-6xl text-balance max-w-2xl", children: [
            "Un parcours ",
            /* @__PURE__ */ jsx("span", { className: "italic", children: "pour chaque conducteur." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/formations", className: "text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2", children: [
          "Voir toutes les formations ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:grid-cols-3", children: [{
        icon: Car,
        title: "Permis B",
        desc: "La formation classique dès 17 ans. Théorie, conduite, examen — accompagnés du début à la fin.",
        tag: "Le plus demandé"
      }, {
        icon: GraduationCap,
        title: "Conduite accompagnée",
        desc: "AAC dès 15 ans. Plus d'expérience, plus de sérénité, et une réussite supérieure à l'examen.",
        tag: "Dès 15 ans"
      }, {
        icon: BookOpen,
        title: "Code de la route",
        desc: "Cours en salle, accès en ligne illimité, examens blancs. Validez votre code en toute confiance.",
        tag: "En illimité"
      }].map((f) => /* @__PURE__ */ jsxs("div", { className: "group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all shadow-card", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6 text-[10px] tracking-[0.2em] uppercase text-primary", children: f.tag }),
        /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsx(f.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-2xl", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: f.desc }),
        /* @__PURE__ */ jsxs(Link, { to: "/formations", className: "mt-6 inline-flex items-center gap-2 text-sm text-primary", children: [
          "En savoir plus ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-28 bg-ink overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/lesson.jpg", alt: "Cours de conduite chez N'as du Volant", loading: "lazy", width: 1400, height: 1e3, className: "rounded-2xl shadow-card" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-red max-w-xs hidden sm:block", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-3xl italic", children: "+10 ans" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider mt-1 opacity-90", children: "d'expérience à Bron" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "L'auto-école" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl lg:text-5xl text-balance", children: [
          "Une école familiale, ",
          /* @__PURE__ */ jsx("span", { className: "italic", children: "une exigence de pro." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "Chez N'as du Volant, on connaît chaque élève par son prénom. Nos moniteurs diplômés d'État construisent un parcours unique, à votre rythme, avec une pédagogie bienveillante et sans jugement." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-3", children: ["Moniteurs diplômés d'État, formés en continu", "Véhicules récents, climatisés, équipés double commande", "Suivi personnalisé et planning flexible 6j/7", "Tarifs transparents, sans frais cachés"].map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: p })
        ] }, p)) }),
        /* @__PURE__ */ jsxs(Link, { to: "/agence", className: "mt-10 inline-flex items-center gap-2 rounded-full border border-primary text-primary px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors", children: [
          "Voir notre agence ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl overflow-hidden relative bg-ink", children: [
      /* @__PURE__ */ jsx("img", { src: "/images/voiture.png", alt: "Véhicule de l'auto-école N'as du Volant", loading: "lazy", className: "w-full h-72 sm:h-96 object-cover object-center" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-end p-8 sm:p-12", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-2", children: "Notre véhicule" }),
        /* @__PURE__ */ jsxs("p", { className: "font-display text-2xl sm:text-3xl text-white text-balance max-w-xs", children: [
          "Pour une formation ",
          /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "sûre et sur-mesure." })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "Ils ont eu leur permis" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl lg:text-6xl max-w-3xl text-balance", children: [
        '"Une équipe en or, ',
        /* @__PURE__ */ jsx("span", { className: "italic", children: "un permis du premier coup." }),
        '"'
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-6 lg:grid-cols-3", children: [{
        n: "Melik S.",
        q: "Franchement, un grand merci à toute N'as du Volant. Ils ont toujours été là pour moi, ils m'ont soutenu du début à la fin et m'ont redonné confiance chaque fois que j'en avais besoin. Grâce à eux, j'ai enfin eu mon permis. Une super équipe, je recommande fortement !"
      }, {
        n: "Yasmine B.",
        q: "Auto-école avec des monitrices qui donnent envie d'aller conduire ! Très arrangeantes niveau créneaux et hyper rapides pour trouver des dates de permis. Je recommande à 100%."
      }, {
        n: "Romain T.",
        q: "Une excellente auto-école ! Toute l'équipe est très professionnelle, bienveillante et à l'écoute. Des monitrices pédagogues et patientes qui m'ont vraiment mis en confiance. Je recommande vivement !"
      }].map((t) => /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-primary", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
        /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-sm leading-relaxed text-foreground/80", children: [
          '"',
          t.q,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 text-sm text-muted-foreground", children: [
          "— ",
          t.n
        ] })
      ] }, t.n)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs("a", { href: googleRating?.mapsUrl ?? `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm text-primary hover:underline", children: [
        "Voir tous nos avis Google ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-ink", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "Accès" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl lg:text-5xl text-balance", children: [
        "Comment ",
        /* @__PURE__ */ jsx("span", { className: "italic", children: "venir nous voir ?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "133 Av. Franklin Roosevelt, 69500 Bron" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [{
        icon: "🚌",
        title: "Bus",
        lines: ["Ligne 24 — arrêt Franklin Roosevelt", "Ligne 79 — arrêt Franklin Roosevelt", "Ligne C17 — arrêt Franklin Roosevelt", "Ligne C26 — arrêt Bron"]
      }, {
        icon: "🚊",
        title: "Tramway",
        lines: ["T2 & T5 — arrêt Boutasse - Camille Rousset (1 min à pied)"]
      }].map((m) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl", children: m.icon }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-2xl", children: m.title }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2", children: m.lines.map((l) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
          l
        ] }, l)) })
      ] }, m.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs("a", { href: "https://www.google.com/maps/dir/?api=1&destination=133+Avenue+Franklin+Roosevelt,+69500+Bron", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-primary text-primary px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-colors", children: [
        "Itinéraire Google Maps ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/student-success.jpg", alt: "", className: "h-full w-full object-cover opacity-20", loading: "lazy", width: 1200, height: 1400 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-6 lg:px-10 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl lg:text-7xl text-balance", children: [
          "Prêt à prendre ",
          /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "le volant ?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Contactez-nous directement par téléphone ou passez nous voir au 133 Av. Franklin Roosevelt à Bron." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "tel:+33978802232", className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-red", children: [
            "Nous appeler ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/inscription", className: "inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm", children: "S'inscrire" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Home as component
};
