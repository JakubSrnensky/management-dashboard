import { useLocation } from 'react-router-dom';
import { ROUTES } from "../../utils/enum";
import Title from "../../components/Title/Title";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Card from '../../components/Card/Card';


export default function Auth() {


    const location = useLocation()

   
    return (
        <Card auth>

            <Title as="h1">
                {location.pathname.includes(ROUTES.REGISTRATION) && "Registrace"}
                {location.pathname.includes(ROUTES.LOGIN) && "Login"}
            </Title>

            {location.pathname.includes(ROUTES.LOGIN) && <LoginForm /> }
            {location.pathname.includes(ROUTES.REGISTRATION) && <RegistrationForm />}

        </Card>
    )
}