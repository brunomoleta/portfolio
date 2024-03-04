import { Container } from "@/styles/Common.style";
import {ChildrenProps} from "@/types/children";

export const PageMain = ({children}:ChildrenProps) =>{
    return <main>
        <Container>
        {children}
        </Container>
    </main>
}

export default PageMain;