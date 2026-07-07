import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoMark from "@/assets/logo-v2.jpg";
import logoMain from "@/assets/logo-main.png";
import logoHeader from "@/assets/logo-header-new.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lucas Mercanti Music — Original Scores for Film & Games" },
      {
        name: "description",
        content:
          "Lucas Mercanti — composer of original music for video games and films. Selected reels, projects and biography.",
      },
    ],
  }),
});

type Lang = "en" | "es";

type Work = {
  title: string;
  role: { en: string; es: string };
  year: string;
  type?: { en: string; es: string };
  videoId?: string;
};

const T = {
  en: {
    nav: { about: "About", reels: "Reels", works: "Works" },
    tagline: "Lucas Mercanti · Composer for Film & Video Games",
    hero1: "Sound that ",
    heroEm: "moves",
    hero2: "the picture.",
    aboutLabel: "01 — About",
    aboutTitle: "Biography",
    bio: [
      "Music composer based in Argentina, mainly oriented to videogame and film soundtracks.",
      "I specialize in telling stories through music — either the ones your project is telling explicitly, or the ones you want to make more subtle. My work has a heavy focus on versatility: from orchestral soundtracks to more electronic composition, I dedicate myself to creating a musical identity that goes along your project and enhances it.",
      "My experience comes from years of study, collaborating with a variety of independent projects, and pure passion for the job.",
    ],
    reelsLabel: "02 — Reels",
    reelsTitle: "Showreels",
    videogameReel: "Video Game Reel",
    filmReel: "Film & Trailer Reel",
    worksLabel: "03 — Works",
    worksTitle: "Selected Projects",
  },
  es: {
    nav: { about: "Sobre mí", reels: "Reels", works: "Trabajos" },
    tagline: "Lucas Mercanti · Compositor para Cine y Videojuegos",
    hero1: "Sonido que ",
    heroEm: "mueve",
    hero2: "la imagen.",
    aboutLabel: "01 — Sobre mí",
    aboutTitle: "Biografía",
    bio: [
      "Compositor musical radicado en Argentina, orientado principalmente a bandas sonoras de videojuegos y cine.",
      "Me especializo en contar historias a través de la música — tanto las que tu proyecto cuenta de forma explícita como las que querés transmitir de manera más sutil. Mi trabajo tiene un fuerte enfoque en la versatilidad: desde bandas sonoras orquestales hasta composición más electrónica, me dedico a crear una identidad musical que acompañe y potencie tu proyecto.",
      "Mi experiencia viene de años de estudio, de colaborar con una variedad de proyectos independientes y de pura pasión por el oficio.",
    ],
    reelsLabel: "02 — Reels",
    reelsTitle: "Reels",
    videogameReel: "Reel de Videojuegos",
    filmReel: "Reel de Cine y Trailers",
    worksLabel: "03 — Trabajos",
    worksTitle: "Proyectos Seleccionados",
  },
} as const;

const ORIGINAL_SCORE = { en: "Original Score", es: "Banda Sonora Original" };
const ORIGINAL_COMP = { en: "Original Composition", es: "Composición Original" };
const VIDEOGAME = { en: "Videogame", es: "Videojuego" };

const selectedWorks: Work[] = [
  {
    title: 'My Take on - "Spirit of the North" (Main Screen)',
    role: ORIGINAL_SCORE,
    year: "2024",
    type: VIDEOGAME,
    videoId: "KNcHSI-1WNs",
  },
  { title: "I'm afraid it's going to rain", role: ORIGINAL_COMP, year: "2024", videoId: "hW0uWq7YvXs" },
  { title: "Fight On", role: ORIGINAL_COMP, year: "2024", videoId: "8wtPTfCFDS0" },
  {
    title: 'My Take On - "Player Vs Game" (Main Menu)',
    role: ORIGINAL_SCORE,
    year: "2023",
    type: VIDEOGAME,
    videoId: "zrsD7ugB0zA",
  },
  {
    title: 'My Take On - "Player Vs Game" (Lvl 1)',
    role: ORIGINAL_SCORE,
    year: "2023",
    type: VIDEOGAME,
    videoId: "eCKZARexjw4",
  },
  {
    title: 'Proyecto Graham - What Remains',
    role: ORIGINAL_SCORE,
    year: "2022",
    type: VIDEOGAME,
    videoId: "hIKuzCQ9jCc",
  },
  {
    title: 'Proyecto Graham - Graham is that You',
    role: ORIGINAL_SCORE,
    year: "2022",
    type: VIDEOGAME,
    videoId: "F9I70zBWQoo",
  },
  {
    title: 'Proyecto Graham - Just Kill It Already',
    role: ORIGINAL_SCORE,
    year: "2022",
    type: VIDEOGAME,
    videoId: "bImnCpoXIF0",
  },
];

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="mx-auto flex w-full items-center justify-between px-6 py-4 bg-white">
          <a href="#top" className="flex items-center">
            <img
              src={logoHeader}
              alt="Lucas Mercanti Music"
              className="h-14 w-auto object-contain"
            />
          </a>
          <div className="flex items-center gap-8">
            <ul className="hidden gap-10 text-xs tracking-[0.25em] uppercase md:flex">
              <li><a href="#about" className="hover:text-gold transition-colors font-bold text-black">{t.nav.about}</a></li>
              <li><a href="#reels" className="hover:text-gold transition-colors font-bold text-black">{t.nav.reels}</a></li>
              <li><a href="#works" className="hover:text-gold transition-colors font-bold text-black">{t.nav.works}</a></li>
            </ul>
            <div className="flex items-center gap-1 text-xs tracking-[0.25em] uppercase font-bold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-1 transition-colors ${lang === "en" ? "text-gold" : "text-black hover:text-gold"}`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <span className="text-black/40">/</span>
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`px-1 transition-colors ${lang === "es" ? "text-gold" : "text-black hover:text-gold"}`}
                aria-pressed={lang === "es"}
              >
                ES
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO / INTRO */}
      <section id="top" className="relative flex min-h-screen items-center px-6 pt-24 pb-16">
        <div className="mx-auto w-full max-w-6xl grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <p className="mb-8 text-xs tracking-[0.4em] uppercase text-gold">
              {t.tagline}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.05] tracking-tight">
              {t.hero1}<span className="text-gold italic font-thin">{t.heroEm}</span>
              <br />
              {t.hero2}
            </h1>
            <div className="mt-16 h-px w-24 bg-gold" />
          </div>
          <div className="md:col-span-6 md:justify-self-end w-full">
            <div className="relative aspect-video w-full overflow-hidden border border-border bg-card">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/AKDxc-psnSc"
                title="Featured reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="px-6 py-32 border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.4em] uppercase text-gold">{t.aboutLabel}</p>
            <h2 className="mt-6 text-3xl md:text-4xl font-extralight">{t.aboutTitle}</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
            {t.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* REELS */}
      <section id="reels" className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold">{t.reelsLabel}</p>
            <h2 className="mt-6 text-3xl md:text-4xl font-extralight">{t.reelsTitle}</h2>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <ReelCard
              label={t.videogameReel}
              year="2025"
              videoId="kAy6q93djLY"
            />
            <ReelCard
              label={t.filmReel}
              year="2025"
              videoId="Rh0H9i9FI2I"
              start={5}
            />
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold">{t.worksLabel}</p>
            <h2 className="mt-6 text-3xl md:text-4xl font-extralight">{t.worksTitle}</h2>
          </div>

          <ul className="grid gap-10 md:grid-cols-2">
            {selectedWorks.map((w) => (
              <li
                key={w.title}
                className="group flex flex-col gap-4 border border-border bg-card/20 p-5 transition-colors hover:bg-card/40"
              >
                {w.videoId ? (
                  <div className="relative aspect-video w-full overflow-hidden border border-border bg-card">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${w.videoId}`}
                      title={w.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video w-full border border-border bg-card/40" />
                )}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-extralight tracking-wide group-hover:text-gold transition-colors">
                    {w.title}
                  </h3>
                  <span className="text-xs text-gold tracking-widest shrink-0">{w.year}</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  <span>{w.role[lang]}</span>
                  {w.type && <span>{w.type[lang]}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs tracking-[0.3em] uppercase text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" className="h-6 w-6 object-contain" />
            <p>© {new Date().getFullYear()} Lucas Mercanti Music</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@lucasmercanti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2 hover:text-gold hover:border-gold transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/>
              </svg>
              YouTube
            </a>
            <a href="mailto:lucasmercantimusic@gmail.com" className="hover:text-gold transition-colors">
              lucasmercantimusic@gmail.com
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}

function ReelCard({
  label,
  year,
  videoId,
  start,
}: {
  label: string;
  year: string;
  videoId: string;
  start?: number;
}) {
  const embedSrc = start
    ? `https://www.youtube.com/embed/${videoId}?start=${start}`
    : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="group">
      <div className="relative aspect-video overflow-hidden border border-border bg-card">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedSrc}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-sm md:text-base tracking-[0.25em] uppercase font-light">
          {label}
        </h3>
        <span className="text-xs text-gold tracking-widest">{year}</span>
      </div>
    </div>
  );
}
