import Image from "next/image";

const services = [
  {
    title: "Møbelfornying",
    description: "Ta vare på det du er glad i, og gi det et nytt uttrykk.",
    image: "/images/mobelstoff-gjenbruk.jpg",
    alt: "Nærbilde av møbelstoff i varme, gjenbrukte tekstiler",
    position: "object-center",
  },
  {
    title: "Interiørdesign og styling",
    description: "Personlige rom med omtanke for helheten og de små detaljene.",
    image: "/images/hytte-styling.jpg",
    alt: "Hytteinteriør stylet med lanterne, treverk og tekstiler",
    position: "object-center",
  },
  {
    title: "Interiørsøm",
    description: "Tekstiler tilpasset rommet, fargene og livet som leves der.",
    image: "/images/sengegavl-puter.jpg",
    alt: "Sengegavl med håndplukkede puter i dempede tekstiler",
    position: "object-center",
  },
];

const ideas = [
  {
    number: "01",
    title: "Gi møbler en ny start",
    description:
      "Møbelfornying kan bevare det du liker og samtidig endre uttrykket rundt det.",
  },
  {
    number: "02",
    title: "Sy noe som passer",
    description:
      "Interiørsøm gir tekstiler og mål en personlig løsning til hjemmet ditt.",
  },
  {
    number: "03",
    title: "Innred med omtanke",
    description:
      "Gjenbruk og bærekraft kan være en naturlig del av et vakkert hjem.",
  },
];

function Brand() {
  return (
    <a
      aria-label="WW Interior – til toppen"
      className="inline-flex items-center gap-3"
      href="#hjem"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="size-12 rounded-full"
        height={48}
        src="/images/ww-interior-logo-round.svg"
        width={48}
      />
      <span className="text-[10px] font-medium tracking-[0.24em] text-ink">
        WW INTERIOR
      </span>
    </a>
  );
}

function Navigation() {
  return (
    <>
      <nav aria-label="Hovedmeny" className="hidden items-center gap-9 md:flex">
        <a className="nav-link" href="#tjenester">
          Tjenester
        </a>
        <a className="nav-link" href="#om">
          Om WW
        </a>
        <a className="nav-link" href="#inspirasjon">
          Inspirasjon
        </a>
        <a className="border-b border-ink pb-2 text-xs" href="#kontakt">
          Ta kontakt <span aria-hidden="true" className="ml-2">↗</span>
        </a>
      </nav>
      <details className="group relative md:hidden">
        <summary className="cursor-pointer list-none rounded-full border border-line px-4 py-2 text-xs marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum">
          Meny <span aria-hidden="true" className="ml-2">＋</span>
        </summary>
        <nav
          aria-label="Mobilmeny"
          className="absolute right-0 top-12 z-20 flex w-52 flex-col gap-5 border border-line bg-paper p-5 shadow-xl"
        >
          <a className="nav-link" href="#tjenester">Tjenester</a>
          <a className="nav-link" href="#om">Om WW</a>
          <a className="nav-link" href="#inspirasjon">Inspirasjon</a>
          <a className="nav-link" href="#kontakt">Ta kontakt ↗</a>
        </nav>
      </details>
    </>
  );
}

export default function Home() {
  return (
    <main id="hjem" className="overflow-hidden bg-paper text-ink">
      <header className="relative z-10 flex h-[82px] items-center justify-between px-6 sm:px-10 lg:px-[7vw]">
        <Brand />
        <Navigation />
      </header>

      <section className="relative isolate flex min-h-[650px] items-center px-7 py-24 sm:px-12 lg:min-h-[min(760px,calc(100svh-82px))] lg:px-[11vw]">
        <Image
          alt="Hytteinteriør med blå seng og spesialbygde skuffer"
          className="-z-20 object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/images/hytte-soverom.jpg"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241d28]/75 via-[#241d28]/40 to-[#241d28]/5" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8vw] top-1/2 z-0 hidden -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 p-5 shadow-2xl xl:flex"
        >
          <Image
            alt=""
            className="size-[clamp(220px,22vw,330px)]"
            height={1000}
            src="/images/ww-interior-logo.svg"
            width={1000}
          />
        </div>
        <div className="max-w-2xl text-white">
          <p className="eyebrow text-white/85">
            Interiørdesign · styling · møbelfornying
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.6rem]">
            Nytt liv til
            <br />
            <em className="font-normal">rom og møbler.</em>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/90 sm:text-base">
            Personlige interiører med omtanke for historien i tingene — og for
            ressursene vi allerede har.
          </p>
          <a
            className="mt-9 inline-flex items-center gap-8 bg-paper px-5 py-4 text-xs text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="#tjenester"
          >
            Utforsk tjenestene <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="absolute bottom-7 left-7 right-7 flex justify-between text-[9px] uppercase tracking-[0.16em] text-white/90 sm:left-12 sm:right-12 lg:left-[7vw] lg:right-[7vw]">
          <span>WW Interior · Bergen</span>
          <span>Interiør med fokus på gjenbruk</span>
        </div>
      </section>

      <section className="px-7 py-24 sm:px-12 sm:py-32 lg:px-[12vw]" id="om">
        <p className="eyebrow text-olive">En personlig tilnærming</p>
        <div className="mt-7 grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-end md:gap-20">
          <h2 className="font-display text-5xl leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Forny med
            <br />
            <em className="font-normal">personlighet.</em>
          </h2>
          <div className="max-w-lg">
            <p className="text-sm leading-7 text-muted">
              Wenche-Johanne Føynar Wie står bak WW Interior i Bergen. Hun
              arbeider med interiørdesign, styling, interiørsøm og møbelfornying
              — med gjenbruk og bærekraft som en rød tråd.
            </p>
            <a
              className="text-link mt-6"
              href="https://www.instagram.com/ww_interior/"
              rel="noreferrer"
              target="_blank"
            >
              Se mer på Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-7 pb-24 sm:px-12 sm:pb-32 lg:px-[12vw]" id="tjenester">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-olive">Fra idé til fornyelse</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Tjenester med <em className="font-normal">omtanke</em>
            </h2>
          </div>
          <a
            className="text-link hidden sm:inline-flex"
            href="https://www.instagram.com/ww_interior/"
            rel="noreferrer"
            target="_blank"
          >
            Se arbeidet på Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="grid gap-x-7 gap-y-10 md:grid-cols-3">
          {services.map((service, index) => (
            <article className={index === 1 ? "md:mt-14" : ""} key={service.title}>
              <a
                aria-label={`${service.title} – se WW Interior på Instagram`}
                className="group relative block aspect-[4/5] overflow-hidden bg-[#e6e0d8]"
                href="https://www.instagram.com/ww_interior/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  alt={service.alt}
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.035] ${service.position}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  src={service.image}
                />
                <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-paper text-base text-ink">
                  ↗
                </span>
              </a>
              <div className="flex flex-col gap-2 pt-4 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl">{service.title}</h3>
                <span className="text-[9px] uppercase tracking-[0.12em] text-muted">
                  WW Interior
                </span>
              </div>
              <p className="mt-2 max-w-sm text-xs leading-6 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e9e5dc] px-7 py-20 text-center sm:px-12 sm:py-24">
        <span aria-hidden="true" className="font-display text-6xl text-olive">“</span>
        <blockquote className="mx-auto mt-3 max-w-3xl font-display text-3xl italic leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
          Gjenbruk gir møbler og rom en historie videre.
        </blockquote>
        <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-muted">
          WW Interior · Bergen
        </p>
      </section>

      <section className="px-7 py-24 sm:px-12 sm:py-32 lg:px-[12vw]" id="inspirasjon">
        <div className="mb-10">
          <p className="eyebrow text-olive">Små ideer, stor forskjell</p>
          <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] sm:text-5xl">
            Hent litt <em className="font-normal">inspirasjon</em>
          </h2>
        </div>
        <div className="grid border-t border-line md:grid-cols-3">
          {ideas.map((idea, index) => (
            <article
              className={`py-6 md:pr-8 ${index > 0 ? "border-t border-line md:border-l md:border-t-0 md:pl-8" : ""}`}
              key={idea.number}
            >
              <span className="text-[9px] tracking-[0.12em] text-olive">{idea.number}</span>
              <h3 className="mt-6 font-display text-2xl">{idea.title}</h3>
              <p className="mt-2 max-w-xs text-xs leading-6 text-muted">
                {idea.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-olive px-7 py-20 text-white sm:px-12 sm:py-24 md:flex-row md:items-end md:justify-between lg:px-[12vw]" id="kontakt">
        <div>
          <p className="eyebrow text-white/70">WW Interior · Bergen</p>
          <h2 className="font-display text-5xl leading-[1.05] tracking-[-0.045em] sm:text-6xl">
            Har du noe som
            <br />
            fortjener <em className="font-normal">nytt liv?</em>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-sm leading-7 text-white/85">
            Ta kontakt med Wenche-Johanne om interiørdesign, styling,
            interiørsøm eller møbelfornying.
          </p>
          <a
            className="mt-6 inline-flex items-center gap-8 bg-paper px-5 py-4 text-xs text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="https://www.instagram.com/ww_interior/"
            rel="noreferrer"
            target="_blank"
          >
            Ta kontakt på Instagram <span aria-hidden="true">↗</span>
          </a>
          <a
            className="mt-5 block text-xs text-white/85 underline decoration-white/40 underline-offset-4"
            href="https://www.instagram.com/ww_interior/"
            rel="noreferrer"
            target="_blank"
          >
            @ww_interior · inspirasjon og oppdateringer
          </a>
        </div>
      </section>

      <footer className="grid gap-5 px-7 py-8 sm:grid-cols-2 sm:items-center sm:px-12 lg:px-[7vw]">
        <Brand />
        <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-end sm:gap-8">
          <p className="text-[10px] text-muted">Interiørdesign · styling · møbelfornying · Bergen</p>
          <a className="text-[10px] text-muted" href="#hjem">Til toppen ↑</a>
        </div>
        <small className="border-t border-line pt-4 text-[9px] tracking-[0.08em] text-muted sm:col-span-2">
          © {new Date().getFullYear()} WW Interior · Wenche-Johanne Føynar Wie
        </small>
      </footer>
    </main>
  );
}
