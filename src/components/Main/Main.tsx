import {Container, MainStyles} from "@/styles/Common.style";
import {ChildrenProps} from "@/types/children";

export const PageMain = ({children}:ChildrenProps) =>{
    return <MainStyles>
        <Container>
        {children}
        </Container>
    </MainStyles>
}

export default PageMain;