import { Box, Button, List, Typography } from "@mui/material";
import Link from "ui/components/navigation/Link/Link";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


import {
    FooterContainer,
    FooterTitle,
    FooterGrid,
    FooterListItem,
    SocialContainer,
    AppList,
    FooterSocialList,
    SocialButton
} from "./Footer.style";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterGrid>

                <div>
                    <FooterTitle>Menu</FooterTitle>
                    <List>
                        <FooterListItem>
                            <Link
                                href="/encontrar-diarista"
                                mui={{ color: 'inherit', variant: 'body2' }}
                            >
                                Encontrar um(a) diarista
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link
                                href="/encontrar-diarista"
                                mui={{ color: 'inherit', variant: 'body2' }}
                            >
                                Seja um(a) diarista
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link
                                href="/"
                                mui={{ color: 'inherit', variant: 'body2' }}
                            >
                                Por que usar o E-Diaristas?
                            </Link>
                        </FooterListItem>
                        <FooterListItem>
                            <Link
                                href="/"
                                mui={{ color: 'inherit', variant: 'body2' }}
                            >
                                Principais dúvidas
                            </Link>
                        </FooterListItem>
                    </List>
                </div>

                <Box sx={{ maxWidth: "400px" }} >
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        E-Diaristas te ajuda a encontrar um profissional perfeito para
                        realizar a limpeza da sua casa. Garantimos o(a) melhor profissional
                        com total segurança e praticidade! São milhares de clientes
                        satisfeitos por todo país.
                    </Typography>
                </Box>

                <SocialContainer>
                    <div>
                        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                        <AppList>
                            <li>
                                <a href="https://apps.apple.com/br/app/treinaweb/id1322729447"
                                    target={"-blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    <img src="/img/logos/app-store.png" alt={"AppStore"} />
                                </a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=br.com.treinaweb.mobile"
                                    target={"-blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    <img src="/img/logos/google-play.png" alt={"Google Play"} />
                                </a>
                            </li>

                        </AppList>
                    </div>
                    <div>
                        <FooterTitle>Redes Sociais</FooterTitle>
                        <FooterSocialList>
                            <FooterListItem>
                            <SocialButton href={'/'}>
                                <FacebookIcon/>
                            </SocialButton>    
                            </FooterListItem>
                            <FooterListItem>
                            <SocialButton href={'/'}>
                                        <InstagramIcon/>
                            </SocialButton>          
                            </FooterListItem>
                            <FooterListItem>
                                <SocialButton href={'/'}>
                                <YouTubeIcon/>
                                </SocialButton>
                            </FooterListItem>
                        </FooterSocialList>
                    </div>
                </SocialContainer>



            </FooterGrid>

        </FooterContainer >
    );
}

export default Footer;