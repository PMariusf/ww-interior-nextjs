import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/components/brand";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Presentasjon og bestilling — WW Interior",
  description:
    "Utforsk personlig interiørveiledning, tjenester og priser hos WW Interior i Bergen, og send en forespørsel til Wenche-Johanne.",
};

const services = [
  {
    number: "01",
    title: "Planløsning og møblering",
    description:
      "Bedre utnyttelse av rommet og gode sammenhenger mellom funksjoner og møbler.",
  },
  {
    number: "02",
    title: "Farger og materialer",
    description:
      "Farger, gulv, fliser, tekstiler og materialkombinasjoner som skaper en helhet.",
  },
  {
    number: "03",
    title: "Møbler, belysning og tekstiler",
    description:
      "Hjelp med produktvalg, gardiner, solskjerming, tepper, puter, møbler og belysning.",
  },
  {
    number: "04",
    title: "Spesialtilpassede løsninger",
    description:
      "Skap, bokhyller, bord, benker, hyller og møbler som er tilpasset rommet.",
  },
  {
    number: "05",
    title: "Styling og fornyelse",
    description:
      "Styling av bolig og hytte, eller hjelp til å se det du allerede har med nye øyne.",
  },
];

const packages = [
  {
    number: "01",
    name: "Interiørsparring",
    price: "9 999 kr",
    description:
      "For mindre prosjekter, ett rom eller en mindre leilighet. Forslag til tekstiler, søm, produkter og interiørløsninger med estimerte priser.",
  },
  {
    number: "02",
    name: "Interiørplan",
    price: "19 999 kr",
    description:
      "For mellomstore prosjekter, typisk 2–4 rom. Helhetlige forslag til tekstiler, produkter og innredning. Plantegning eller skisse etter avtale.",
  },
  {
    number: "03",
    name: "Helhetlig interiørkonsept",
    price: "49 999 kr",
    description:
      "For større leiligheter, hus og hytter med mer enn fire rom. Et detaljert interiørforslag med plantegning eller skisse etter avtale.",
  },
  {
    number: "04",
    name: "Komplett interiørprosjekt",
    price: "79 999 kr",
    description:
      "For større prosjekter med tett oppfølging, prosjektkontroll og eventuell oppfølging av håndverkere. Endelig pristilbud avtales.",
  },
];

export default function PresentationAndBooking() {
  return (
    <main id="hjem" className="bg-paper text-ink">
      <a className="skip-link" href="#innhold">Hopp til innhold</a>
      <header className="relative z-10 flex h-[86px] items-center justify-between border-b border-line/70 px-5 sm:h-[96px] sm:px-10 lg:px-[7vw]">
        <Brand href="/" large />
        <nav aria-label="Hovedmeny" className="hidden items-center gap-7 md:flex lg:gap-10">
          <Link className="nav-link" href="/">Forsiden</Link>
          <a className="nav-link" href="#tjenester">Tjenester</a>
          <a className="nav-link" href="#pakker">Priser</a>
          <a className="nav-contact" href="#bestilling">Bestilling <span aria-hidden="true">↗</span></a>
        </nav>
        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 border-b border-ink px-1 text-xs uppercase tracking-[0.15em] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum">
            Meny <span aria-hidden="true" className="text-lg leading-none group-open:rotate-45">＋</span>
          </summary>
          <nav aria-label="Mobilmeny" className="absolute right-0 top-14 z-20 flex w-56 flex-col gap-5 border border-line bg-paper p-6 shadow-xl">
            <Link className="nav-link" href="/">Forsiden</Link>
            <a className="nav-link" href="#tjenester">Tjenester</a>
            <a className="nav-link" href="#pakker">Priser</a>
            <a className="nav-link" href="#bestilling">Bestilling ↗</a>
          </nav>
        </details>
      </header>

      <section className="booking-hero" id="innhold">
        <div className="booking-hero-copy">
          <p className="eyebrow text-olive">WW Interior · Personlig interiørveiledning</p>
          <h1 className="mt-7 max-w-2xl font-display text-[clamp(3.3rem,6vw,6.5rem)] leading-[0.98] tracking-[-0.06em]">
            Ta det første steget til et <em className="font-normal">unikt hjem.</em>
          </h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Fra en enkelt problemstilling til et komplett interiørprosjekt.
            Få hjelp til å skape rom som fungerer i hverdagen og føles riktige over tid.
          </p>
          <a className="editorial-link" href="#bestilling">Send en forespørsel <span aria-hidden="true">↗</span></a>
        </div>
        <div className="booking-hero-image">
          <Image
            alt="Puter og tekstiler i dempede blå og beige toner"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 42vw"
            src="/images/presentasjon-puter.png"
          />
        </div>
      </section>

      <section className="booking-intro" aria-labelledby="booking-intro-title">
        <p className="eyebrow text-olive">En personlig tilnærming</p>
        <div>
          <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] sm:text-5xl" id="booking-intro-title">
            Et hjem skal føles <em className="font-normal">som ditt.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Et godt interiør handler om mer enn hvordan det ser ut. Det skal fungere i hverdagen,
            gjenspeile dem som bor der og føles riktig over tid. Du kan bruke Wenche-Johanne som
            sparringspartner noen timer, eller få oppfølging fra de første ideene til ferdig resultat.
          </p>
        </div>
      </section>

      <section className="px-7 py-20 sm:px-12 sm:py-28 lg:px-[12vw]" id="tjenester">
        <p className="eyebrow text-olive">Fra idé til helhet</p>
        <h2 className="mt-5 font-display text-4xl tracking-[-0.04em] sm:text-5xl">Dette kan du få hjelp med</h2>
        <div className="mt-11 border-t border-line">
          {services.map((service) => (
            <div className="service-row" key={service.number}>
              <span className="text-xs tracking-[0.16em] text-olive">{service.number}</span>
              <h3 className="font-display text-2xl sm:text-3xl">{service.title}</h3>
              <p className="max-w-md text-sm leading-7 text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eee8df] px-7 py-20 sm:px-12 sm:py-28 lg:px-[12vw]" id="pakker">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="eyebrow text-olive">Velg hvor mye hjelp du ønsker</p>
            <h2 className="mt-5 font-display text-4xl tracking-[-0.04em] sm:text-5xl">Priser og <em className="font-normal">pakker</em></h2>
          </div>
          <div className="border-t border-[#cec3b6] pt-5 text-sm leading-7 text-muted">
            <p>En interiørkonsultasjon gir råd om planløsning, farger, møblering, materialer og belysning.</p>
            <p className="mt-3 text-ink">De første 30 minuttene er kostnadsfrie. Deretter 999 kr/time. Eventuelt etterarbeid faktureres med 999 kr/time eller etter avtale.</p>
          </div>
        </div>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2">
          {packages.map((item) => (
            <article className="package-row" key={item.number}>
              <div className="flex items-baseline justify-between gap-5">
                <span className="text-xs tracking-[0.16em] text-olive">{item.number}</span>
                <span className="text-xs tracking-[0.08em]">{item.price}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl">{item.name}</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-12 px-7 py-20 sm:px-12 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-[12vw]" id="bestilling">
        <div>
          <p className="eyebrow text-olive">Ta det første steget</p>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
            Fortell om <em className="font-normal">prosjektet ditt.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Beskriv kort hva du ønsker hjelp til. Wenche-Johanne kan svare med forslag til hvordan dere kan begynne.
          </p>
          <div className="relative mt-10 aspect-[5/4] max-w-sm overflow-hidden bg-[#e1d9ce]">
            <Image
              alt="Materialpalett med tekstiler i blå og beige toner"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 90vw, 30vw"
              src="/images/presentasjon-materialer.png"
            />
          </div>
        </div>
        <BookingForm />
      </section>

      <footer className="flex flex-col gap-5 border-t border-line px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-[7vw]">
        <Brand href="/" />
        <Link className="text-link" href="/">Til forsiden <span aria-hidden="true">↗</span></Link>
      </footer>
    </main>
  );
}
