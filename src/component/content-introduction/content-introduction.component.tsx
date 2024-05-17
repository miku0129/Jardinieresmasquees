import { Introduction } from "./content-introduction.styles";

const ContentIntroduction = () => {
  return (
    <Introduction>
      <div className="introduction-sub-container-left">
        <h2>Bonjour à tous les jardiniers et jardinières</h2>
        <p>
          Venez nombreux avec vos sourires, vos rires, votre joie dans un
          endroit de paix, au milieu des oiseaux, de la biodiversité, quelques
          fruits nous attendent, seront-ils mûrs ? Venez profiter et savourer
          cette journée
        </p>
      </div>
      <div className="introduction-sub-container-right">
        <div className="container-inner">
          <h3>Qui sommes-nous</h3>
          <p>Une organisation de bénévoles à Tours et dans les quartiers.</p>
        </div>
        <div className="container-inner">
          <h3>Que faisons-nous</h3>
          <p>
            Nous souhaitons nous réapproprier collectivement certains espaces à
            Tours pour cultiver des arbres fruitiers.
          </p>
        </div>
      </div>
    </Introduction>
  );
};

export default ContentIntroduction;
