"use client";
import { IProject } from "@/types/types";
import React from "react";
import {
  ProjectArticle,
  Wrapper,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import ProjectRelatedTechs from "@/components/Main/Projects/projectCard/ProjectRelatedTechs";
import ProjectIllustration from "@/components/Main/Projects/projectCard/ProjectIllustration";
import ProjectInfo from "@/components/Main/Projects/projectCard/ProjectInfo";
import ProjectBtn from "@/components/Main/Projects/projectCard/ProjectBtn";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { useUtilsStore } from "@/providers/utils.store.ts";

export const ProjectCard = ({ item }: { item: IProject }) => {
  const { illustration, backendTags, frontendTags, href, title } = item;
  const { setLoading, loading } = useUtilsStore();

  const router = useRouter();

  const handleClick = () => {
    setLoading();
    setTimeout(() => {
      setLoading();
      router.push(href);
    }, 2 * 1000);
  };
  return (
    <>
      <ProjectArticle>
        <Wrapper>
          <ProjectInfo item={item} />
          <ProjectRelatedTechs heading="Front end" tags={frontendTags} />
          <ProjectRelatedTechs heading="Back end" tags={backendTags} />
          <ProjectBtn disabled={loading} onClick={handleClick} />
        </Wrapper>
        {loading && <Spinner />}
        <ProjectIllustration
          isLoading={loading}
          disabled={loading}
          onClick={handleClick}
          alt={`Aplicação ${title} rodando em dispositivo móvel`}
          illustration={illustration}
        />
      </ProjectArticle>
    </>
  );
};

export default ProjectCard;
