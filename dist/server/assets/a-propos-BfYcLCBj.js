import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Heart, Users, Award, ArrowRight } from "lucide-react";
const lesson = "/assets/lesson-BBiGx9w0.jpg";
function APropos() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-36 bg-gradient-hero", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "L'auto-école" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-display text-5xl lg:text-7xl text-balance", children: [
          "Une équipe humaine, ",
          /* @__PURE__ */ jsx("span", { className: "italic text-primary", children: "un cap commun." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg text-muted-foreground leading-relaxed", children: "N'as du Volant, c'est avant tout une auto-école de quartier à Bron, où chaque élève est accueilli, écouté et accompagné. Notre mission : vous transmettre les clés d'une conduite sûre, autonome et respectueuse — pour la vie." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("img", { src: lesson, alt: "Équipe N'as du Volant", loading: "lazy", width: 1400, height: 1e3, className: "rounded-3xl shadow-card" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid gap-8 lg:grid-cols-3", children: [{
      icon: Heart,
      title: "Bienveillance",
      desc: "Pas de jugement, pas de pression. On apprend mieux en confiance — c'est notre conviction."
    }, {
      icon: Users,
      title: "Esprit familial",
      desc: "Une petite équipe soudée, qui connaît chaque élève par son prénom et son histoire."
    }, {
      icon: Award,
      title: "Exigence pro",
      desc: "Moniteurs diplômés d'État, formés en continu, et un suivi pédagogique de haut niveau."
    }].map((v) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(v.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-2xl", children: v.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: v.desc })
    ] }, v.title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-ink", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary", children: "L'équipe" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl lg:text-5xl text-balance", children: "Vos moniteurs." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: [{
        n: "Nadia",
        r: "Directrice & monitrice",
        q: "Fondatrice de l'école, +10 ans d'expérience."
      }, {
        n: "Thomas",
        r: "Moniteur diplômé d'État",
        q: "Spécialiste conduite urbaine et autoroute."
      }, {
        n: "Sami",
        r: "Moniteur diplômé d'État",
        q: "Pédagogue, expert AAC et perfectionnement."
      }].map((p) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-full bg-gradient-red flex items-center justify-center font-display text-2xl text-primary-foreground", children: p.n[0] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 font-display text-xl", children: p.n }),
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-primary mt-1", children: p.r }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: p.q })
      ] }, p.n)) }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-14 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-red", children: [
        "Venir nous rencontrer ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  APropos as component
};
