import { ChangeEventHandler, forwardRef, useEffect, useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import { validateEmail } from '../../../utils/functions';
import './Input.scss'

interface IInputEmail {
    label?: string
    onChange: ChangeEventHandler<HTMLInputElement>
    placeholder: string
    isRequired?: boolean
    className?: string
}

export const InputEmail = forwardRef(({ label, onChange, placeholder, isRequired, className = ""}: IInputEmail, ref: unknown) => {

    const [ validationEmptyInput, setValidationEmptyInput ] = useState<string | boolean>("")
    const [ validationIsEmail, setValidationIsEmail ] = useState<string | boolean>("")

    const handlerChangeValidationInput = (e: any) => {

        if (!isRequired) {
            return
        }

        if (e.target.value === "") {
            setValidationEmptyInput("input-isRequired")
        } else {
            setValidationEmptyInput(false)
        }
        
        if (!validateEmail(e.target.value)) {
            setValidationIsEmail("input-isRequired")
        } else {
            setValidationIsEmail(false)
        }

    }

    useEffect(() => {
        
        if (!isRequired) {
            return
        }

        if (ref?.current.value === "") {
            setValidationEmptyInput("input-isRequired")
        } else {
            setValidationEmptyInput(false)
        }
        
        if (!validateEmail(ref?.current.value)) {
            setValidationIsEmail("input-isRequired")
        } else {
            setValidationIsEmail(false)
        }

    },[isRequired])

    return (
        <>
            <fieldset className="input-fieldset">
                {label && <label className="input-label">{label}</label>}
                <input type="email" ref={ref} onChange={(e:any) => {onChange(e); handlerChangeValidationInput(e)}} placeholder={placeholder} className={`input ${validationIsEmail} ${validationEmptyInput} ${className}`} />
                <ErrorMsg
                    isRequired={validationIsEmail}
                    msg="E-mail je ve špatném formátu"
                />
                <ErrorMsg
                    isRequired={validationEmptyInput}
                    msg="Je povinné"
                />
            </fieldset>
        </>
    )
})