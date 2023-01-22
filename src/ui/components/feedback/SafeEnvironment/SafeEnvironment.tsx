import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@mui/material";

const SafeEnvironment = () => {
    return <SafeEnvironmentContainer>
        <Container>Ambiente 100% Seguro <i className="fa-regular fa-lock"></i> </Container>
        </SafeEnvironmentContainer>;

};
    export default SafeEnvironment