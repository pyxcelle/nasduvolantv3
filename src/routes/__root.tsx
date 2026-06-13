import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, X } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl italic text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Cette page a manqué le virage</h2>
        <p className="mt-2 text-sm text-muted-foreground">La page demandée n'existe pas ou a été déplacée.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Cette page n'a pas chargé</h1>
        <p className="mt-2 text-sm text-muted-foreground">Réessayez ou revenez à l'accueil.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Réessayer</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm">Accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
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
      { name: "twitter:description", content: "Auto-école familiale à Bron (69500). Permis B, conduite accompagnée, code de la route. Formation sûre et sur-mesure avec des moniteurs diplômés d'État." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300..700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function bindFooterPhoneCopy() {
                  var btn = document.getElementById("footer-phone-copy");
                  if (!btn || btn.dataset.bound) return;
                  btn.dataset.bound = "true";
                  btn.addEventListener("click", function () {
                    var text = btn.getAttribute("data-phone") || "";
                    function showCopied() {
                      var copyIcon = document.getElementById("footer-phone-copy-icon");
                      var checkIcon = document.getElementById("footer-phone-check-icon");
                      var label = document.getElementById("footer-phone-copied-label");
                      if (copyIcon) copyIcon.classList.add("hidden");
                      if (checkIcon) checkIcon.classList.remove("hidden");
                      if (label) label.classList.remove("hidden");
                      setTimeout(function () {
                        if (copyIcon) copyIcon.classList.remove("hidden");
                        if (checkIcon) checkIcon.classList.add("hidden");
                        if (label) label.classList.add("hidden");
                      }, 2000);
                    }
                    function fallback() {
                      var textarea = document.createElement("textarea");
                      textarea.value = text;
                      textarea.style.position = "fixed";
                      textarea.style.left = "-9999px";
                      textarea.style.top = "-9999px";
                      document.body.appendChild(textarea);
                      textarea.focus();
                      textarea.select();
                      try {
                        document.execCommand("copy");
                        showCopied();
                      } catch (e) {}
                      document.body.removeChild(textarea);
                    }
                    if (navigator.clipboard && window.isSecureContext) {
                      navigator.clipboard.writeText(text).then(showCopied).catch(fallback);
                    } else {
                      fallback();
                    }
                  });
                }
                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", bindFooterPhoneCopy);
                } else {
                  bindFooterPhoneCopy();
                }
              })();
            `,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <style>{`
        #header-contact-checkbox {
          position: absolute; opacity: 0; pointer-events: none; width: 0; height: 0;
        }
        #header-contact-modal { display: none; }
        #header-contact-checkbox:checked ~ #header-contact-modal { display: block; }
      `}</style>

      {/* Checkbox du modal header — frère direct du modal */}
      <input type="checkbox" id="header-contact-checkbox" />

      {/* Modal contact header — frère direct de la checkbox, hors de tout stacking context */}
      <div id="header-contact-modal">
        {/* Overlay cliquable pour fermer */}
        <label
          htmlFor="header-contact-checkbox"
          style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", cursor: "default", display: "block" }}
        />
        {/* Wrapper centrage — pointer-events none pour ne pas bloquer */}
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem", pointerEvents: "none" }}>
          <div
            className="rounded-3xl border border-border bg-card p-8 shadow-card"
            style={{ position: "relative", width: "100%", maxWidth: "24rem", maxHeight: "calc(100vh - 4rem)", overflowY: "auto", pointerEvents: "auto" }}
          >
            <label
              htmlFor="header-contact-checkbox"
              className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer flex items-center justify-center"
            >
              <X className="h-4 w-4" />
            </label>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Nous contacter</div>
            <h2 className="font-display text-2xl text-balance">Une question sur votre formation ?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Notre équipe vous répond et construit avec vous le parcours idéal.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium">
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div style={{ userSelect: "text", cursor: "text" }} className="font-medium">09 78 80 22 32</div>
                  <div className="text-xs text-muted-foreground">Lun–Ven 14h–19h · Sam 10h–12h</div>
                </div>
              </div>
              <a href="mailto:nasduvolant@gmail.com" className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-5 py-4 text-sm font-medium hover:border-primary/50 transition-colors">
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

      <div className="min-h-screen flex flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
