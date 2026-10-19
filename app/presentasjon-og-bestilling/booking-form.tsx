"use client";

import type { FormEvent } from "react";

const recipient = "wenche@wwinterior.no";

export function BookingForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Forespørsel om ${service} – ${name}`;
    const body = [
      `Hei Wenche-Johanne,`,
      "",
      `Jeg ønsker å høre mer om ${service.toLowerCase()}.`,
      "",
      message,
      "",
      `Navn: ${name}`,
      `E-post: ${email}`,
      phone ? `Telefon: ${phone}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="booking-field">
          <span>Navn *</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label className="booking-field">
          <span>E-post *</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="booking-field">
          <span>Telefon</span>
          <input autoComplete="tel" name="phone" type="tel" />
        </label>
        <label className="booking-field">
          <span>Jeg er interessert i *</span>
          <select defaultValue="" name="service" required>
            <option disabled value="">Velg tjeneste</option>
            <option>Interiørkonsultasjon</option>
            <option>Interiørsparring</option>
            <option>Interiørplan</option>
            <option>Helhetlig interiørkonsept</option>
            <option>Komplett interiørprosjekt</option>
            <option>Annet oppdrag</option>
          </select>
        </label>
      </div>
      <label className="booking-field mt-5">
        <span>Fortell kort om prosjektet *</span>
        <textarea
          name="message"
          placeholder="Hva ønsker du hjelp til, og hvor gjelder det?"
          required
          rows={5}
        />
      </label>
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="booking-submit" type="submit">
          Opprett e-postforespørsel <span aria-hidden="true">↗</span>
        </button>
        <p className="max-w-xs text-xs leading-5 text-muted">
          E-postprogrammet ditt åpnes. Send e-posten derfra for å fullføre forespørselen.
        </p>
      </div>
      <p className="mt-6 text-xs leading-6 text-muted">
        Du kan også skrive direkte til <a className="underline underline-offset-4" href={`mailto:${recipient}`}>{recipient}</a>.
        En forespørsel er ikke en bekreftet bestilling før du har fått svar.
      </p>
    </form>
  );
}
