import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Fuse from "fuse.js";

function ArticleSearch() {
  const [fullArticles, setFullArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [fuse, setFuse] = useState(new Fuse([]));

  useEffect(() => {
    fetch("/hoi2-wiki/pages.json").then((response) => response.json()).then((json) => {
      setFullArticles(json.articles);
      setArticles(json.articles);
      setFuse(
        new Fuse(json.articles, {
          keys: ["title"],
        }),
      );
    });
  }, []);
  return (
    <ul className="menu bg-base-200 h-screen rounded-box overflow-y-scroll overflow-x-hidden flex-nowrap">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-primary w-full max-w-xs"
        onInput={(e) => {
          const searchTerm = e.target.value;
          console.log(searchTerm);
          if (searchTerm && searchTerm !== "") {
            const searchResult = fuse.search(searchTerm).map((r) => r.item);
            setArticles(searchResult);
          } else {
            setArticles(fullArticles);
          }
        }}
      />
      {articles.map((a, i) => (
        <li key={i}>
          <a href={a.link}>{a.title}</a>
        </li>
      ))}
    </ul>
  );
}

createRoot(document.getElementById("article-menu")).render(<ArticleSearch />);
