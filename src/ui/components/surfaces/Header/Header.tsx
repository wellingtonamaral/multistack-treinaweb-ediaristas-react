import { AppBar, Container, Divider, MenuList, Toolbar, MenuItem, IconButton } from "@mui/material";
import Link from "ui/components/navigation/Link/Link";
import { HeaderAppBar, HeaderLogo, ButtonContainer, HeaderDrawer } from "./Header.style";
import RoundedButton from 'ui/components/inputs/RoundedButton/RoundedButton';
import { useState } from "react";
import useIsMobile from "data/services/hooks/useIsMobile";

const Header: React.FC = () => {
  const isMobile =  useIsMobile();

    return isMobile? <HeaderMobile /> : <HeaderDesktop />
};

export default Header;


const HeaderDesktop: React.FC = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <Link href="/">
                    <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista" />
                </Link>

                <div>&nbsp;</div>
                <div>&nbsp;</div>

                <ButtonContainer>
                    <Link href="/cadastro/diarista" Component={RoundedButton} mui={{ variant: 'contained', color: 'primary' }} >
                        Seja um(a) diarista
                    </Link>

                    <Link href="/login">
                        Login
                    </Link>
                </ButtonContainer>


            </Toolbar>
        </HeaderAppBar>
    );
};


const HeaderMobile: React.FC = () => {

    const [isDrawerOpen, setDrawerOpen] = useState(false)

    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
               <IconButton edge={"start"} color={"inherit"} onClick={()=>setDrawerOpen(true)}>
                <i className="twf-bars" />
               </IconButton>

                <Link href="/">
                    <HeaderLogo src="/img/logos/logo.svg" alt="e-diarista" />
                </Link>

                <HeaderDrawer 
                        open={isDrawerOpen} 
                        onClose={() => setDrawerOpen(false)}
                        onClick={() => setDrawerOpen(false)}>
                    <MenuList>
                        <Link href="/login" Component={MenuItem}>Login</Link>
                        <Divider />
                        <Link href="/cadastro/diarista" Component={MenuItem}>  Seja um(a) diarista</Link>
                    </MenuList>
                </HeaderDrawer>

            </Toolbar>
        </HeaderAppBar>
    );
}