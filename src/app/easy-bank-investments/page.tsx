import SingleProject from "@/components/SingleProject";
import SProjSection from "@/components/SingleProject/SProjSection";
import { projects } from "@/services/projects.data";

export default function EasyBankInvestments() {
  return (
    <>
      <SingleProject>
        <SProjSection project={projects[1]} />
      </SingleProject>
    </>
  );
}
