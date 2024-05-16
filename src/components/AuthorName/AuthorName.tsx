import React from "react";
import { Author } from "@/components/AuthorName/AuthorName.style.ts";

function AuthorName({ author, site }: { author: string; site: string }) {
  return (
    <>
      {" "}
      <Author target="_blank" href={site}>
        {author}
      </Author>
      {"."}
    </>
  );
}

export default AuthorName;
