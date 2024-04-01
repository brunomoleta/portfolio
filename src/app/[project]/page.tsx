import SingleProject from "@/components/SingleProject";
import SProjSection from "@/components/SingleProject/SProjSection";
import SProjectBtns from "@/components/SingleProject/SProjectBtns";
import { projects } from "@/services/projects.data";
import { IProject } from "@/types/types";

export default function Project({ params }: { params: { project: string } }) {
  const { project } = params;

  const singleProject: IProject | undefined = projects.find(
    (item) => item.url === project,
  );

  if (!singleProject) return null;
  const id = singleProject.id;

  return (
    <>
      <SingleProject buttons={<SProjectBtns digit={id} />}>
        <SProjSection project={projects[id - 1]} />
      </SingleProject>
    </>
  );
}
