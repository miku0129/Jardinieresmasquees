import imgUrl from "../assets/content-header.webp"
export default function ContentHeader() {
  return (
    <header>
      <img
        src={imgUrl}
        className="h-screen max-h-1/5 w-full bg-center object-cover"
      />
    </header>
  );
}
