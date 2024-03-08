import LiItem from "@/components/Footer/FooterList/LiItem";
import React from "react";
import {projects} from "@/services/data";
import {HHeading} from "@/components/Main/hero/heroHeading/HeroHeading.style";
import {List} from "@/components/Footer/FooterList/FooterList.style";

function SingleProject({projectNumber}: {
    projectNumber: number;
}) {
    return (
        <>
            <HHeading>{projects[projectNumber].title}</HHeading>
            <List>
                <LiItem
                    topic="documentação back end"
                    href={projects[projectNumber].doc}
                    value={projects[projectNumber].doc}
                />
                <LiItem
                    topic="Repositório back end"
                    href={projects[projectNumber].backEndRepo}
                    value={projects[projectNumber].backEndRepo}
                />
                <LiItem
                    topic="Repositório front end"
                    href={projects[projectNumber].frontEndRepo}
                    value={projects[projectNumber].frontEndRepo}
                />
                <LiItem
                    topic="Aplicação em funcionamento"
                    href={projects[projectNumber].live}
                    value={projects[projectNumber].live}
                />
            </List>
        </>
    );
}

export default SingleProject;