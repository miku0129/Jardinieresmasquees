type FbArticle = {
  article: {
    created_time: string;
    full_picture: string;
    id: string;
    message: string;
    permalink_url: string;
  };
};

export default function ArticleCard({ article }: FbArticle) {
  const { created_time, message, permalink_url, full_picture } = article;

  const src = full_picture
    ? full_picture
    : "https://i.ibb.co/kGqNLh5/Screenshot-2023-08-20-143312.jpg";

  const published_date = created_time.slice(0, 10);

  return (
    <article className="max-h-72 w-72 flex-col border border-gray-300">
      <a
        href={permalink_url}
        className="h-full w-full no-underline"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={src}
          alt={created_time}
          className="max-h-52 w-full place-self-center-safe object-cover"
        />
        <p className="text-md place-self-center-safe pt-3">{published_date}</p>
        <p className="text-md w-full place-self-center-safe truncate p-1 px-5 pb-5 text-gray-400">
          {message}
        </p>
      </a>
    </article>
  );
}
