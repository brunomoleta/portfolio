import SingleProject from "@/components/SingleProject";
import SProjSection from "@/components/SingleProject/SProjSection";
import {projects} from "@/services/projects.data";
import SProjectBtns from "@/components/SingleProject/SProjectBtns";

export default function DurvalMusisShop() {
  return (
    <>
        <SingleProject buttons={<SProjectBtns digit={1}/>}>
            <SProjSection project={projects[0]} />
        </SingleProject>
    </>
  );
}
