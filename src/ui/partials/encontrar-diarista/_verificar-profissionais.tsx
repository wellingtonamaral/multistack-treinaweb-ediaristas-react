import { Button, Container, Typography, CircularProgress } from '@mui/material';
import useVerificarProfissionais from 'data/hooks/pages/useVerificarProfissionais.page';
import React from 'react';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { callbackify } from 'util';

import { FormElementsContainer, ProfissionaisPaper, ProfissionaisContainer } from './_verificar-profissionais.styled';

const VerificarProfissionais: React.FC = () => {
     const {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes,
     } = useVerificarProfissionais();
    return (
        
        <>
        <SafeEnvironment />
        <PageTitle     
        title={'Conheça os profissionais'} 
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}         
        />
        <Container sx={{mb: 10}}>
            <FormElementsContainer>
                <TextFieldMask 
                    mask={'99.999-999'} label={'Digite seu CEP'} fullWidth
                    value={cep}
                    onChange={(event) =>setCep(event?.target.value)}
                />
                {erro && (
                        <Typography color={'error'}> {erro}
                        </Typography>
                )}
                
                <Button 
                    variant={'contained'}  
                    color={'secondary'} 
                    sx={{width: '220px'}}
                    disabled={!cepValido || carregando}
                    onClick={()=> buscarProfissionais(cep)}
                            > {carregando ? <CircularProgress size={20} />: 'Buscar'}
                </Button>
            </FormElementsContainer>
            <ProfissionaisPaper>
            <ProfissionaisContainer>
            <UserInformation
                    name={'Flamengo'}
                    picture={'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg'}
                    rating={5}
                    description={'Rio de Janeiro'}
                />
                <UserInformation
                    name={'Palmeiras'}
                    picture={'https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg'}
                    rating={1}
                    description={'São Paulo'}
                />                
                <UserInformation
                    name={'Atletico Mineiro'}
                    picture={'https://upload.wikimedia.org/wikipedia/commons/5/5f/Atletico_mineiro_galo.png'}
                    rating={3}
                    description={'Minas Gerais'}
                />
            </ProfissionaisContainer>
                <Container sx={{textAlign: 'center'}}>
                    <Typography 
                    variant={'body2'} 
                    color={'textSecondary'}
                    sx={{mt: 5}}
                    >...e mais 50 profissionais atendem ao seu endereço.
                    </Typography>

                    <Button 
                    variant={'contained'}
                    color={'secondary'}
                    sx={{mt: 5}}
                    > Contratar um(a) profissional
                    </Button>
                </Container>
            </ProfissionaisPaper>
        </Container>
        </>
    );
};

export default VerificarProfissionais;