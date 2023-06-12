import { styled } from '@mui/material/styles';
// import {  } from '@mui/material';
// import { UseFormProps } from './UseForm';

export const BaseGrid = styled('div')`
    display: grid;
    grid-auto-rows: auto;
    gap: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(3)};
    padding: ${({ theme }) => '0 0 ' + theme.spacing(5)};

    ${({ theme }) => theme.breakpoints.down('md') }{
        grid-template-columns: 1fr;
        gap:${({ theme }) => theme.spacing(3)};
    }
`;
export const NewContactData = styled(BaseGrid)`
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
        'email email'
        'senha  password-strength'
        'confirmar-senha password-strength';

    ${({ theme }) => theme.breakpoints.down('md') }{
        grid-template-areas:
            'email'
            'senha'
            'password-strength'
            'confirmar-senha';

    }      

`;
export const PaymentData = styled(BaseGrid)`
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
        'numero numero'
        'nome nome'
        'validate codigo'
        'erro erro';

    ${({ theme }) => theme.breakpoints.down('md') }{
        grid-template-areas:
            'numero'
            'nome'
            'validate'
            'codigo'
            'erro';

    }      

`;

export const PictureSelection = styled(BaseGrid)`
        grid-template-columns: 1fr;
        padding: 0;
         

`;
export const UserData = styled(BaseGrid)`
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas:
        'nome nome nome'
        'data-nascimento cpf telefone'
        

    ${({ theme }) => theme.breakpoints.down('md') }{
        grid-template-areas:
            'nome'
            'data-nascimento'
            'cpf'
            'telefone';

    }      

`;