export default function ContentIntroduction() {
  return (
    <div className="flex flex-col justify-around gap-5 md:flex-row">
      <section className="max-w-72 place-self-center-safe md:max-w-80">
        <h2 className="mb-2 text-2xl md:text-3xl">
          Bonjour à tous les jardiniers et jardinières
        </h2>
        <p className="md:text-lg">
          Venez nombreux avec vos sourires, vos rires, votre joie dans un
          endroit de paix, au milieu des oiseaux, de la biodiversité, quelques
          fruits nous attendent, seront-ils mûrs ? Venez profiter et savourer
          cette journée
        </p>
      </section>
      <div className="max-w-72 place-self-center-safe">
        <section className="mb-4">
          <h2 className="mb-2 text-2xl md:text-3xl">Qui sommes-nous</h2>
          <p className="md:text-lg">
            Une organisation de bénévoles à Tours et dans les quartiers.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl md:text-3xl">Que faisons-nous</h2>
          <p className="md:text-lg">
            Nous souhaitons nous réapproprier collectivement certains espaces à
            Tours pour cultiver des arbres fruitiers.
          </p>
        </section>
      </div>
    </div>
  );
}
