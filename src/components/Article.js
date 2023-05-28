import React from "react";
import ReadTime from "./ReadTime";

const Article = ({ id, title, date = "January 1, 1970", preview, minutes }) => {
  return (
    <article key={id}>
      <h3>{title}</h3>
      <small>{date} • <ReadTime minutes={minutes}/></small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
