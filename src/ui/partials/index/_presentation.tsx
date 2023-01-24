import { useState,useEffect} from 'react';
import { 
            ContainerStyled, 
            BottomButton,
            SectionContainer,
            SectionDescription, 
            SectionButton, 
            SectionPictureContainer, 
            SectionTitle } 
    from "./_presentation.styled";
    


const Presentation = () => {
    const [cleanerPicture, setCleanerPicture] = useState('');

    useEffect(()=>{
        const newCleanerPicture = Math.random() < 0.5 
        ? '/img/home/housekeeper.png'
         : '/img/home/janitor.png';
         setCleanerPicture(newCleanerPicture);
    },[])
    return (
        <SectionContainer>
         <ContainerStyled>
                <SectionTitle>
                    Encontre agora mesmo um(a) <em>diarista</em>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </SectionTitle>
                <SectionDescription>
                    São mais de 5.000 profissionais esperando por você!
                </SectionDescription>
                <SectionButton  mui={{ variant: 'contained' }}
                                href={'/encontrar-diarista'}>
                    Encontrar um(a) diarista
                </SectionButton>
                <SectionPictureContainer>
                    <img  src={cleanerPicture}/>
                </SectionPictureContainer>
                

        </ContainerStyled>
        <BottomButton>
        <i className="fa-solid fa-circle-down"></i>
            </BottomButton>
    </SectionContainer>

    );
   
};

export default Presentation;