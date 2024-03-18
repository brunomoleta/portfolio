import {
  AuthorLi,
  AuthorUL,
  Avatar,
} from "@/components/SingleProject/ProjectDescription/ProjectDescription.style";
import { IAuthors } from "@/types/types";

function Authors({ authors }: { authors: IAuthors[] }) {
  return (
    <AuthorUL>
      {authors.map((author, index) => (
        <AuthorLi key={index}>
          <Avatar src={author.image} alt="" />
          <span>{author.name}</span>
        </AuthorLi>
      ))}
    </AuthorUL>
  );
}

export default Authors;
