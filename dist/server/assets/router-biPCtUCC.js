import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
const appCss = "/assets/styles-Ctw1BXSX.css";
const nav = [
  { label: "Formations", to: "/formations" },
  { label: "Inscription", to: "/inscription" },
  { label: "Notre agence", to: "/agence" },
  { label: "Avis", to: "/avis" },
  { label: "Vérifications techniques", to: "/verification-technique" }
];
function SiteHeader() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        #mobile-menu-toggle { display: none; }
        #mobile-menu-toggle:checked ~ .mobile-overlay { display: block; }
        #mobile-menu-toggle:checked ~ .mobile-panel { transform: translateX(0); }
        #mobile-menu-toggle:checked ~ header .burger-open { display: none; }
        #mobile-menu-toggle:checked ~ header .burger-close { display: flex; }
        .burger-close { display: none; }
        .mobile-panel { transform: translateX(100%); transition: transform 0.3s ease; }
      ` }),
    /* @__PURE__ */ jsx("input", { type: "checkbox", id: "mobile-menu-toggle", className: "hidden" }),
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 flex h-16 items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3 shrink-0", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/logo-nas-du-volant.jpg", alt: "N'as du Volant", width: 40, height: 40, className: "h-9 w-auto rounded-md" }),
        /* @__PURE__ */ jsx("span", { className: "font-display italic text-xl hidden sm:block", children: "N'as du Volant" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-6 text-sm", children: nav.map((n) => /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          className: "text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap",
          activeProps: { className: "text-foreground font-medium" },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "tel:+33978802232",
          className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all shrink-0",
          children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
            " 09 78 80 22 32"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "mobile-menu-toggle",
          className: "lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-secondary transition-colors cursor-pointer",
          "aria-label": "Ouvrir le menu",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "burger-open flex flex-col gap-1.5 w-5", children: [
              /* @__PURE__ */ jsx("span", { className: "block h-0.5 w-5 bg-foreground rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "block h-0.5 w-5 bg-foreground rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "block h-0.5 w-5 bg-foreground rounded-full" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "burger-close items-center justify-center", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M4 4l12 12M16 4L4 16", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: "mobile-menu-toggle",
        className: "mobile-overlay fixed inset-0 z-40 bg-black/50 lg:hidden cursor-pointer",
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mobile-panel fixed top-0 right-0 z-50 h-full w-72 max-w-full bg-background shadow-2xl lg:hidden flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 h-16 border-b border-border shrink-0", children: [
        /* @__PURE__ */ jsx("span", { className: "font-display italic text-lg", children: "N'as du Volant" }),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "mobile-menu-toggle",
            className: "flex items-center justify-center w-9 h-9 rounded-lg hover:bg-secondary transition-colors cursor-pointer",
            children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M4 4l12 12M16 4L4 16", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "flex-1 overflow-y-auto px-6 py-6 space-y-1", children: nav.map((n) => /* @__PURE__ */ jsx(
        Link,
        {
          to: n.to,
          className: "flex items-center rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all",
          activeProps: { className: "text-foreground font-medium bg-secondary" },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsx("div", { className: "px-6 py-6 border-t border-border shrink-0", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "tel:+33978802232",
          className: "flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-red hover:opacity-90 transition-all",
          children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
            " 09 78 80 22 32"
          ]
        }
      ) })
    ] })
  ] });
}
const logo = "/assets/logo-nas-du-volant--YRJ8Q4p.jpg";
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-border bg-ink relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "N'as du Volant", width: 64, height: 64, className: "h-14 w-auto rounded-md" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-display italic text-2xl", children: "N'as du Volant" }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-1", children: "Auto-école · Bron 69500" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-sm text-muted-foreground leading-relaxed", children: "Auto-école familiale à Bron. Permis B, boîte automatique, conduite accompagnée, code de la route — un accompagnement humain avec des moniteurs diplômés d'État. N° agrément : E2206900220." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary mb-5", children: "Navigation" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/formations", className: "hover:text-primary transition-colors", children: "Formations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/inscription", className: "hover:text-primary transition-colors", children: "Inscription" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/agence", className: "hover:text-primary transition-colors", children: "Notre agence" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/avis", className: "hover:text-primary transition-colors", children: "Avis Google" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/verification-technique", className: "hover:text-primary transition-colors", children: "Vérifications techniques" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/mentions-legales", className: "hover:text-primary transition-colors", children: "Mentions légales" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.3em] uppercase text-primary mb-5", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }),
            "133 Av. Franklin Roosevelt, 69500 Bron"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+33978802232", className: "hover:text-primary transition-colors", children: "09 78 80 22 32" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:nasduvolant@gmail.com", className: "hover:text-primary transition-colors", children: "nasduvolant@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2 items-start", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs leading-relaxed", children: "Lun : 14h–19h · Mar–Ven : 10h–12h, 14h–19h · Sam : 9h–12h" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " N'as du Volant — Auto-école de Bron · SIRET 911 800 423 00020 · RCS Lyon"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "font-display italic", children: [
        "Pour une formation sûre ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "et sur-mesure" })
      ] })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-8xl italic text-primary", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Cette page a manqué le virage" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "La page demandée n'existe pas ou a été déplacée." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground", children: "Retour à l'accueil" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl", children: "Cette page n'a pas chargé" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Réessayez ou revenez à l'accueil." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        router.invalidate();
        reset();
      }, className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground", children: "Réessayer" }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-full border border-border px-5 py-2.5 text-sm", children: "Accueil" })
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "N'as du Volant — Auto-école à Bron · Permis B, AAC, Code" },
      { name: "description", content: "Auto-école familiale à Bron (69500). Permis B, conduite accompagnée, code de la route. Formation sûre et sur-mesure avec des moniteurs diplômés d'État." },
      { name: "author", content: "N'as du Volant" },
      { property: "og:title", content: "N'as du Volant — Auto-école à Bron · Permis B, AAC, Code" },
      { property: "og:description", content: "Auto-école familiale à Bron (69500). Permis B, conduite accompagnée, code de la route. Formation sûre et sur-mesure avec des moniteurs diplômés d'État." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { name: "twitter:title", content: "N'as du Volant — Auto-école à Bron · Permis B, AAC, Code" },
      { name: "twitter:description", content: "Auto-école familiale à Bron (69500). Permis B, conduite accompagnée, code de la route. Formation sûre et sur-mesure avec des moniteurs diplômés d'État." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300..700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$9 = () => import("./verification-technique-CHOSnbsf.js");
const Route$b = createFileRoute("/verification-technique")({
  head: () => ({
    meta: [{
      title: "Vérifications techniques — N'as du Volant Bron"
    }, {
      name: "description",
      content: "Préparez-vous aux vérifications techniques de l'examen du permis B. Banque officielle de questions du Ministère de l'Intérieur. Auto-école N'as du Volant à Bron."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./tarifs-JbHFSV7T.js");
const Route$a = createFileRoute("/tarifs")({
  head: () => ({
    meta: [{
      title: "Tarifs — Formules permis B, AAC, Code · N'as du Volant"
    }, {
      name: "description",
      content: "Découvrez nos tarifs transparents : forfait code, permis B, AAC et heures supplémentaires. Auto-école à Bron."
    }, {
      property: "og:title",
      content: "Tarifs · N'as du Volant"
    }, {
      property: "og:description",
      content: "Forfaits permis B, AAC et code à Bron. Tarifs clairs, sans frais cachés."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const BASE_URL = "";
const Route$9 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/formations", priority: "0.9" },
          { path: "/inscription", priority: "0.8" },
          { path: "/agence", priority: "0.8" },
          { path: "/avis", priority: "0.7" },
          { path: "/verification-technique", priority: "0.8" },
          { path: "/contact", priority: "0.8" }
        ];
        const urls = entries.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><priority>${e.priority}</priority></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$7 = () => import("./mentions-legales-DqMO8rrV.js");
const Route$8 = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [{
      title: "Mentions légales — N'as du Volant Bron"
    }, {
      name: "description",
      content: "Mentions légales de l'auto-école N'as du Volant, 133 Av. Franklin Roosevelt, 69500 Bron."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./inscription-p4_b5Poi.js");
const Route$7 = createFileRoute("/inscription")({
  head: () => ({
    meta: [{
      title: "Inscription — Documents à fournir · N'as du Volant Bron"
    }, {
      name: "description",
      content: "Documents nécessaires pour s'inscrire à l'auto-école N'as du Volant à Bron. Appelez-nous au 09 78 80 22 32."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./formations-B7N5r5yj.js");
const Route$6 = createFileRoute("/formations")({
  head: () => ({
    meta: [{
      title: "Formations — Permis B, AAC, Boîte Auto, Code · N'as du Volant Bron"
    }, {
      name: "description",
      content: "Toutes nos formations : Permis B, boîte automatique, conduite accompagnée, conduite supervisée, perfectionnement et code en ligne. Auto-école N'as du Volant à Bron."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-DH9q0zKg.js");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — N'as du Volant Bron"
    }, {
      name: "description",
      content: "Contactez l'auto-école N'as du Volant à Bron par téléphone : 09 78 80 22 32. 133 Av. Franklin Roosevelt, 69500 Bron."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./avis-B98_xUjB.js");
const Route$4 = createFileRoute("/avis")({
  head: () => ({
    meta: [{
      title: "Avis Google — N'as du Volant Bron"
    }, {
      name: "description",
      content: "Ils ont eu leur permis chez N'as du Volant à Bron. Lisez les avis de nos élèves et laissez le vôtre sur Google."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./agence-CRQ514-1.js");
const Route$3 = createFileRoute("/agence")({
  head: () => ({
    meta: [{
      title: "Notre agence — N'as du Volant Bron 69500"
    }, {
      name: "description",
      content: "Retrouvez l'auto-école N'as du Volant au 133 Avenue Franklin Roosevelt, 69500 Bron. Horaires, accès et contact."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./a-propos-BfYcLCBj.js");
const Route$2 = createFileRoute("/a-propos")({
  head: () => ({
    meta: [{
      title: "L'auto-école — N'as du Volant à Bron"
    }, {
      name: "description",
      content: "Une auto-école familiale à Bron, des moniteurs diplômés d'État et une pédagogie bienveillante. Découvrez l'équipe N'as du Volant."
    }, {
      property: "og:title",
      content: "L'auto-école N'as du Volant — Bron"
    }, {
      property: "og:description",
      content: "Une équipe humaine, une formation sur-mesure à Bron (69500)."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-SFTlfp8g.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "N'as du Volant — Auto-école à Bron · Permis B, AAC, Code"
    }, {
      name: "description",
      content: "Auto-école familiale à Bron. Permis B, conduite accompagnée et code de la route. Formation sûre et sur-mesure."
    }, {
      property: "og:title",
      content: "N'as du Volant — Auto-école à Bron"
    }, {
      property: "og:description",
      content: "Pour une formation sûre et sur-mesure à Bron (69500)."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const PLACE_ID = "ChIJF2sXKTjB9EcR6ty4qnkxDlw";
const Route = createFileRoute("/api/google-rating")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const env = request.env ?? {};
        const apiKey = env.GOOGLE_PLACES_API_KEY;
        if (!apiKey) {
          return new Response(
            JSON.stringify({ error: "GOOGLE_PLACES_API_KEY non configurée" }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
              }
            }
          );
        }
        try {
          const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount&key=${apiKey}`;
          const response = await fetch(url, {
            headers: {
              "X-Goog-FieldMask": "rating,userRatingCount"
            }
          });
          if (!response.ok) {
            throw new Error(`Google API error: ${response.status}`);
          }
          const data = await response.json();
          const rating = data.rating ?? 4.9;
          const userRatingCount = data.userRatingCount ?? 0;
          return new Response(
            JSON.stringify({
              rating: rating.toFixed(1).replace(".", ","),
              ratingRaw: rating,
              count: userRatingCount,
              // Lien direct pour laisser un avis Google (s'ouvre directement sur le formulaire)
              reviewUrl: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
              mapsUrl: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`
            }),
            {
              headers: {
                "Content-Type": "application/json",
                // Cache 1h côté CDN Cloudflare pour limiter les appels API
                "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
                "Access-Control-Allow-Origin": "*"
              }
            }
          );
        } catch (error) {
          console.error("Google Places API error:", error);
          return new Response(
            JSON.stringify({
              rating: "4,9",
              ratingRaw: 4.9,
              count: 233,
              reviewUrl: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
              mapsUrl: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
              fallback: true
            }),
            {
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, s-maxage=300",
                "Access-Control-Allow-Origin": "*"
              }
            }
          );
        }
      }
    }
  }
});
const VerificationTechniqueRoute = Route$b.update({
  id: "/verification-technique",
  path: "/verification-technique",
  getParentRoute: () => Route$c
});
const TarifsRoute = Route$a.update({
  id: "/tarifs",
  path: "/tarifs",
  getParentRoute: () => Route$c
});
const SitemapDotxmlRoute = Route$9.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const MentionsLegalesRoute = Route$8.update({
  id: "/mentions-legales",
  path: "/mentions-legales",
  getParentRoute: () => Route$c
});
const InscriptionRoute = Route$7.update({
  id: "/inscription",
  path: "/inscription",
  getParentRoute: () => Route$c
});
const FormationsRoute = Route$6.update({
  id: "/formations",
  path: "/formations",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const AvisRoute = Route$4.update({
  id: "/avis",
  path: "/avis",
  getParentRoute: () => Route$c
});
const AgenceRoute = Route$3.update({
  id: "/agence",
  path: "/agence",
  getParentRoute: () => Route$c
});
const AProposRoute = Route$2.update({
  id: "/a-propos",
  path: "/a-propos",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const ApiGoogleRatingRoute = Route.update({
  id: "/api/google-rating",
  path: "/api/google-rating",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AProposRoute,
  AgenceRoute,
  AvisRoute,
  ContactRoute,
  FormationsRoute,
  InscriptionRoute,
  MentionsLegalesRoute,
  SitemapDotxmlRoute,
  TarifsRoute,
  VerificationTechniqueRoute,
  ApiGoogleRatingRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
