import React from "react";
import { Author } from "@/components/AuthorName/AuthorName.style.ts";

interface AuthorNameProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  author: string;
  site: string;
}

function AuthorName({ author, site, ...props }: AuthorNameProps) {
  return (
    <>
      {" "}
      <Author {...props} target="_blank" href={site}>
        {author}
      </Author>
    </>
  );
}

export default AuthorName;
