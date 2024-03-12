import SingleProject from "@/components/SingleProject";
import SProjSection from "@/components/SingleProject/SProjSection";
import {projects} from "@/services/projects.data";

export default function DurvalMusisShop() {
  return (
    <>
        <SingleProject>
            <SProjSection project={projects[0]} />
        </SingleProject>
    </>
  );
}
