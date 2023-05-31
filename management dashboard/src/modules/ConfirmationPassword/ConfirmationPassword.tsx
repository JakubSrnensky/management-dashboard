import { useEffect, useRef, useState } from "react";
import PasswordStrong from "./components/PasswordStrong";
import ErrorMsg from "../../components/Form/ErrorMsg/ErrorMsg";
import { InputPassword } from "../../components/Form/Input/InputPassword";

export default function ConfirmationPassword({isLoading, password}: unknown) {

    const refPassword = useRef<unknown>(null)
    const refConfirmationPassword = useRef<unknown>(null)

    const [ passwordConfirmation, setPasswordConfirmation ] = useState<boolean>("")
    const [ passwordStrong, setPasswordStrong ] = useState<string>("")

    const handlerChangePassword = () => {
 
        setPasswordStrong(refPassword?.current?.value)

        if (!isLoading) {
            return
        }
        
        if (refPassword?.current?.value !== refConfirmationPassword?.current?.value) {
            setPasswordConfirmation(true)
            return null
        }
        
        setPasswordConfirmation(false)

        password(refPassword?.current?.value)

    }

    useEffect(() => {
        
        if (!isLoading) {
            return
        }

        if (refPassword?.current?.value !== refConfirmationPassword?.current?.value) {
            setPasswordConfirmation(true)
        }

    }, [isLoading, refPassword, refConfirmationPassword])

    return (
        <div className="password">
            <InputPassword 
                label="Heslo"
                placeholder="Zadej heslo..."
                onChange={handlerChangePassword}
                ref={refPassword}
                isRequired={isLoading}
            />
            <PasswordStrong
                password={passwordStrong}
            />
                <br />
            <InputPassword 
                label="Heslo"
                placeholder="Zadej heslo..."
                onChange={handlerChangePassword}
                ref={refConfirmationPassword}
                isRequired={isLoading}
            />
            <ErrorMsg 
                msg="Hesla nejsou stejná"
                isRequired={passwordConfirmation}
            />
        </div>
    )
}