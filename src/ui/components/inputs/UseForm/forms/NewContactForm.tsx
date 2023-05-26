import PasswordStrength from "ui/components/feedback/PasswordStrength/PasswordStrength"
import TextField from "../../TextField/TextField"
import { NewContactData } from "../UseForm.style"

export const NewContactForm = () =>{
    return <NewContactData>
        <TextField 
        label={'E-mail'}
        style={{gridArea: 'email'}}

        />
        <TextField 
        type={'password'}
        label={'Senha'}
        style={{gridArea: 'senha'}}
        
        />
        <TextField 
        type={'password'}
        label={'Confirmação da Senha'}
        style={{gridArea: 'confirmar-senha'}}
        
        />
        <PasswordStrength password={''}/>
    </NewContactData>
}