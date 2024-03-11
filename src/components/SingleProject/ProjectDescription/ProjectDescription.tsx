import React from "react";
import {
  InfoList,
  Item,
  PItem,
  ProjectSpecs,
  WrappedItem,
} from "@/components/SingleProject/SingleProject.style";
import { IProject } from "@/types/types";
import { joinArray } from "@/services/service";

function ProjectDescription({ project }: { project: IProject }) {
  const { date, authors, motivation, tags } = project;
  return (
    <InfoList>
      <Item>
        <PItem>Motivação:</PItem>
        <ProjectSpecs>{motivation}</ProjectSpecs>
      </Item>
      <Item>
        <PItem>Autoria:</PItem>
        <ProjectSpecs>{joinArray(authors)}</ProjectSpecs>
      </Item>
      <Item>
        <PItem>Data de início:</PItem>
        <ProjectSpecs>{date}</ProjectSpecs>
      </Item>
      <Item>
        <PItem>Tecnologias:</PItem>
        <ProjectSpecs as="ul">
          <WrappedItem>{joinArray(tags)}</WrappedItem>
        </ProjectSpecs>
      </Item>
    </InfoList>
  );
}

export default ProjectDescription;
