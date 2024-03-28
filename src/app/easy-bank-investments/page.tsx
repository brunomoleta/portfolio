import SingleProject from "@/components/SingleProject";
import SProjSection from "@/components/SingleProject/SProjSection";
import { projects } from "@/services/projects.data";
import SProjectBtns from "@/components/SingleProject/SProjectBtns";

export default function EasyBankInvestments() {
  return (
    <>
      <SingleProject buttons={<SProjectBtns digit={0} />}>
        <SProjSection project={projects[1]} />
      </SingleProject>
    </>
  );
}
