export default function ContentHeader() {
  const overlayStyle = `after:absolute after:inset-0 after:bg-linear-to-b after:from-amber-600 after:to-90%`;
  return (
    <header
      className={`absolute top-0 left-0 z-0 h-screen max-h-1/5 w-full bg-linear-to-t bg-[url("/public/content-header.webp")] bg-cover bg-center ${overlayStyle}`}
    >
      <div className="absolute top-1/2 left-1/2 z-10 -translate-1/2">
        <p className="text-3xl text-white">Bienvenue sur</p>
        <h2 className="text-5xl text-white">Jardinieres masquées</h2>
      </div>
    </header>
  );
}
