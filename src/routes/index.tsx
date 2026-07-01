import { createFileRoute } from "@tanstack/react-router";
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

type Work = {
  title: string;
  role: string;
  year: string;
  type?: string;
  videoId?: string;
};

const selectedWorks: Work[] = [
  {
    title: 'My Take on - "Spirit of the North" (Main Screen)',
    role: "Original Score",
    year: "2024",
    type: "Videogame",
    videoId: "KNcHSI-1WNs",
  },
  { title: "I'm afraid it's going to rain", role: "Original Composition", year: "2024", videoId: "hW0uWq7YvXs" },
  { title: "Fight On", role: "Original Composition", year: "2024", videoId: "8wtPTfCFDS0" },
  {
    title: 'My Take On - "Player Vs Game" (Main Menu)',
    role: "Original Score",
    year: "2023",
    type: "Videogame",
    videoId: "zrsD7ugB0zA",
  },
  {
    title: 'My Take On - "Player Vs Game" (Lvl 1)',
    role: "Original Score",
    year: "2023",
    type: "Videogame",
    videoId: "eCKZARexjw4",
  },
  {
    title: 'Proyecto Graham - What Remains',
    role: "Original Score",
    year: "2022",
    type: "Videogame",
    videoId: "hIKuzCQ9jCc",
  },
  {
    title: 'Proyecto Graham - Graham is that You',
    role: "Original Score",
    year: "2022",
    type: "Videogame",
    videoId: "F9I70zBWQoo",
  },
  {
    title: 'Proyecto Graham - Just Kill It Already',
    role: "Original Score",
    year: "2022",
    type: "Videogame",
    videoId: "bImnCpoXIF0",
  },
  
];

function Index() {
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
          <ul className="hidden gap-10 text-xs tracking-[0.25em] uppercase md:flex">
            <li><a href="#about" className="hover:text-gold transition-colors font-bold text-black">About</a></li>
            <li><a href="#reels" className="hover:text-gold transition-colors font-bold text-black">Reels</a></li>
            <li><a href="#works" className="hover:text-gold transition-colors font-bold text-black">Works</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO / INTRO */}
      <section id="top" className="relative flex min-h-screen items-center px-6 pt-24 pb-16">
        <div className="mx-auto w-full max-w-6xl grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <p className="mb-8 text-xs tracking-[0.4em] uppercase text-gold">
              Lucas Mercanti · Composer for Film & Video Games
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.05] tracking-tight">
              Sound that <span className="text-gold italic font-thin">moves</span>
              <br />
              the picture.
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
            <p className="text-xs tracking-[0.4em] uppercase text-gold">01 — About</p>
            <h2 className="mt-6 text-3xl md:text-4xl font-extralight">Biography</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              I'm a composer writing original music for video games, films and trailers.
              My work lives at the intersection of orchestral writing and contemporary
              electronic textures — scores built to disappear into the picture and surface
              only when the story needs them to.
            </p>
            <p>
              Over the last decade I've collaborated with independent studios, AAA
              publishers and directors across documentary and narrative film, shaping
              sonic identities for worlds that range from intimate character drama to
              large-scale interactive adventures.
            </p>
            <p>
              Trained classically and obsessed with synthesis, I treat every project as a
              new instrument — built from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* REELS */}
      <section id="reels" className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold">02 — Reels</p>
            <h2 className="mt-6 text-3xl md:text-4xl font-extralight">Showreels</h2>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <ReelCard
              label="Video Game Reel"
              year="2025"
              videoId="kAy6q93djLY"
            />
            <ReelCard
              label="Film & Trailer Reel"
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
            <p className="text-xs tracking-[0.4em] uppercase text-gold">03 — Works</p>
            <h2 className="mt-6 text-3xl md:text-4xl font-extralight">Selected Projects</h2>
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
                  <span>{w.role}</span>
                  {w.type && <span>{w.type}</span>}
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
          <p>
            <a href="mailto:hello@lucasmercanti.com" className="hover:text-gold transition-colors">
              hello@lucasmercanti.com
            </a>
          </p>
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
