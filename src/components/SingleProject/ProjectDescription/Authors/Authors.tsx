import {
  AuthorLi,
  AuthorUL,
  Avatar,
  Name,
} from "@/components/SingleProject/ProjectDescription/ProjectDescription.style";
import { IAuthors } from "@/types/types";

function Authors({ authors }: { authors: IAuthors[] }) {
  return (
    <AuthorUL>
      {authors.map((author, index) => (
        <AuthorLi key={index}>
          <Avatar src={author.image} alt="" />
          <Name>{author.name}</Name>
        </AuthorLi>
      ))}
    </AuthorUL>
  );
}

export default Authors;
