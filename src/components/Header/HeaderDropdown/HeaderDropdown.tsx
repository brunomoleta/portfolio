import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Link from "next/link";
 import {DContent, DItem} from "@/components/Header/HeaderDropdown/HeaderDropdown.style";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";

function HeaderDropdown() {
    return (
        <DropdownMenu.Root>
             <DropdownMenu.Trigger asChild>
                 <HamburgerMenuIcon/>
             </DropdownMenu.Trigger>
        
             <DropdownMenu.Portal>
                 <DContent sideOffset={16}>
                     <DItem>
                         <Link href="/"> Home
                         </Link>
                     </DItem>
                     <DItem>
                         <Link href="/projetos"> Projetos
                         </Link>
                     </DItem>
                     <DItem>
                         <Link href="/#contato"> Contato
                         </Link>
                     </DItem>
                 </DContent>
        
             </DropdownMenu.Portal>
         </DropdownMenu.Root>
    )
}

export default HeaderDropdown;
