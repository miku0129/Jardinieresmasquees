import ArticlesPreview from "../route/articles-preview.component";
import ContentContact from "./content-contact/content-contact.component";
import ContentHeader from "./content-header.compoment";
import ContentIntroduction from "./content-introduction.component";
import MainVisual from "./main-visual.component";

import "react-image-gallery/styles/image-gallery.css";

export default function Main() {
  return (
    <div className="flex flex-col gap-16">
      <ContentHeader />
      <ContentIntroduction />
      <MainVisual />
      <ArticlesPreview />
      <ContentContact />
    </div>
  );
}
