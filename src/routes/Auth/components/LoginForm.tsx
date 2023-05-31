import { useRef } from "react";
import Button from "../../../components/Button/Button";
import { InputEmail } from "../../../components/Form/Input/InputEmail";
import { storeAuthLogin } from "../../../stores/storeAuth";
import Form from "../../../components/Form/Form/Form";
import { validateEmail } from "../../../utils/functions";
import { InputPassword } from "../../../components/Form/Input/InputPassword";

export default function LoginForm() {

    const refEmail = useRef<unknown>(null)
    const refPassword = useRef<unknown>(null)

    const { isLoading, user, setUser, setIsLoading } = storeAuthLogin()

    const handlerChangeInputs = () => {

        if (!validateEmail(refEmail?.current?.value)) {
            return
        }

        setUser({email: refEmail?.current?.value, password: refPassword?.current?.value})
    }

    //sending form
    const handlerClickLogin = (event: any) => {
        event.preventDefault()

        setIsLoading(true)
    }

    return (
        <Form>
            <InputEmail
                label="E-mail"
                placeholder="Zadej E-mail..."
                onChange={handlerChangeInputs}
                ref={refEmail}
                isRequired={isLoading}
            />
            <InputPassword 
                label="Heslo"
                placeholder="Zadej heslo..."
                onChange={handlerChangeInputs}
                ref={refPassword}
                isRequired={isLoading}
            />
            <Button as="button" design="primary" onClick={handlerClickLogin}>Přihlásit se</Button>
        </Form>
    )
}