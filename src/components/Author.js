import React from "react";
import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors//authorsSlice";
import { Link, useParams } from "react-router-dom";

// Import useParams from React Router: Imported before so commented out
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Author() {
  // Extract the `name` URL parameter.
  const { name } = useParams();
  const authors = useSelector(selectAuthors);
  const author = authors[name];

  return (
    <main>
      <h1>مقالات {name}</h1>
      <ul>
        {author && author.articles ? (
          author.articles.map((slug) => {
            return (
              <li key={slug}>
                <Link to={`/articles/${slug}`}>{slug}</Link>
              </li>
            );
          })
        ) : (
          <p> هیچ مقاله‌ای یافت نشد... </p>
        )}
      </ul>
    </main>
  );
}
