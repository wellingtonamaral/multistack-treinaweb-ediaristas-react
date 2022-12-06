import React from "react";
import { GradientBackground,ListDivider, ListStyled, SectionTitle,AvatarStyled,ListItemTextStyled } from "./_advantages.styled"
import { ListItem,ListItemAvatar, Container, Avatar } from "@mui/material";


const advantagesList = [
{
    
    icon: 'fa-solid fa-users',
    title:'Diversidade',
    description: '123',
},
{
    icon: 'fa-solid fa-certificate',
    title:'Confiabilidade',
    description: '123',
},
{
    icon: 'fa-brands fa-searchengin',
    title:'Rastreabilidade',
    description: '123',
},
{
    icon: 'fa-solid fa-lock',
    title:'Segurança',
    description: '123',
},
{
    icon: 'fa-solid fa-file-signature',
    title:'Controle',
    description: '123',
},
{
    icon: 'fa-solid fa-users-gear',
    title:'Experiência',
    description: '123',
}
];
const Advantages = () => {
    return (
    <GradientBackground>
        <Container >
        <SectionTitle>Por que usar o E-diarista?</SectionTitle>

        <ListStyled>
            {advantagesList.map((item, index) => (
                <React.Fragment key={item.icon}>
                          {index !== 0 && <ListDivider/>}
                <ListItem disableGutters>
                <ListItemAvatar>
                        <AvatarStyled>
                            <i className={item.icon}/>
                        </AvatarStyled>
               </ListItemAvatar>
               <ListItemTextStyled
               primary={item.title}
               secondary={item.description}
               />
                    

            </ListItem>
          
            </React.Fragment>
            ))}
            
             </ListStyled>
            </Container>
     </GradientBackground>
   
    );

};

export default Advantages;