"use client";
import { IProject } from "@/types/types";
import React from "react";
import {
  ProjectArticle,
  Wrapper,
} from "@/components/Main/Projects/projectCard/ProjectCard.style";
import ProjectIllustration from "@/components/Main/Projects/projectCard/ProjectIllustration";
import ProjectInfo from "@/components/Main/Projects/projectCard/ProjectInfo";
import ProjectBtn from "@/components/Main/Projects/projectCard/ProjectBtn";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { useUtilsStore } from "@/providers/utils.store.ts";

export const ProjectCard = ({ item }: { item: IProject }) => {
  const { illustration, href, title } = item;
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
      <ProjectArticle onClick={handleClick}>
        <Wrapper>
          <ProjectInfo item={item} />
          <ProjectBtn />
        </Wrapper>
        {loading && <Spinner />}
        <ProjectIllustration
          isLoading={loading}
          alt={`Aplicação ${title} rodando em dispositivo móvel`}
          illustration={illustration}
        />
      </ProjectArticle>
    </>
  );
};

export default ProjectCard;
