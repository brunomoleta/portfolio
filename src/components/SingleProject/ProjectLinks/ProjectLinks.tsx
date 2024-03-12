import React from "react";
import { List } from "@/components/Footer/FooterList/FooterList.style";
import LiItem from "@/components/Footer/FooterList/LiItem";
import { IProject } from "@/types/types";

function ProjectLinks({
  project,
  isFront = true,
}: {
  project: IProject;
  isFront?: boolean;
}) {
  const { doc, backEndRepo, live, frontEndRepo } = project;
  return (
    <List>
      {isFront ? (
        <>
          <LiItem
            topic="Repositório front end"
            href={frontEndRepo}
            value={frontEndRepo}
          />
          <LiItem topic="Aplicação em funcionamento" href={live} value={live} />
        </>
      ) : (
        <>
          <LiItem topic="documentação back end" href={doc} value={doc} />
          <LiItem
            topic="Repositório back end"
            href={backEndRepo}
            value={backEndRepo}
          />
        </>
      )}
    </List>
  );
}

export default ProjectLinks;
