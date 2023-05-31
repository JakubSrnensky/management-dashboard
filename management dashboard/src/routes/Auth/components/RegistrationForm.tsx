import { Suspense, lazy, useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import { InputText } from "../../../components/Form/Input/InputText";
import { storeAuthRegistration } from "../../../stores/storeAuth";
import Form from "../../../components/Form/Form/Form";
import storeModal from "../../../stores/storeModal";
import ConfirmationPassword from "../../../modules/ConfirmationPassword/ConfirmationPassword";
import { InputEmail } from "../../../components/Form/Input/InputEmail";

const Modal = lazy(() => import("../../../components/Modal/Modal"));
const WebCam = lazy(() => import("../../../components/WebCam/WebCam"));

export default function RegistrationForm() {


    const refEmail = useRef<unknown>(null)
    const refFirstName = useRef<unknown>(null)
    const refLastName = useRef<unknown>(null)

    const { title } = storeModal()
    const { isLoading, login, setLogin, setIsLoading } = storeAuthRegistration()

    const { isOpen, setIsOpen } = storeModal()

    const handlerChangeInput = () => {

        setLogin({...login, email: refEmail?.current?.value, firstName: refFirstName?.current?.value, lastName: refLastName?.current?.value})
    }

    //sending form
    const handlerClickRegistration = (event: any) => {
        event.preventDefault()

        setIsLoading(true)
    }

    const handlerClickShowWebCam = (event: any) => {
        event.preventDefault()

        setIsOpen(true)
    }

    return (
        <Form>
            <InputEmail
                label="E-mail"
                placeholder="Zadej login..."
                onChange={handlerChangeInput}
                ref={refEmail}
                isRequired={isLoading}
            />
            <InputText
                type="text"
                label="Jméno"
                placeholder="Zadej jméno..."
                onChange={handlerChangeInput}
                ref={refFirstName}
                isRequired={isLoading}
            />
            <InputText
                type="text"
                label="Příjmení"
                placeholder="Zadej jméno..."
                onChange={handlerChangeInput}
                ref={refLastName}
                isRequired={isLoading}
            />
            <ConfirmationPassword
                isLoading={isLoading}
                password={(value: any) => setLogin({...login, password: value})}
            />
            <Suspense fallback={<div>Loading...</div>}>
                <Modal title={title}>
                    <WebCam />
                </Modal>
            </Suspense>
                <br />
            <Button as="button" design="secondary" onClick={handlerClickShowWebCam}>Vyfotit se</Button>
            <Button as="button" design="primary" onClick={handlerClickRegistration}>Registrovat se</Button>
        </Form>
    )
}