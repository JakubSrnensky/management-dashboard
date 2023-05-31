import { ChangeEventHandler, forwardRef, useEffect, useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import './Input.scss'

interface IInputText {
    label?: string
    type: string
    onChange: ChangeEventHandler<HTMLInputElement>
    placeholder: string
    isRequired?: boolean
    className?: string
}

export const InputText = forwardRef(({ label, onChange, placeholder, isRequired, className = ""}: IInputText, ref: unknown) => {

    const [ validationEmptyInput, setValidationEmptyInput ] = useState<string | boolean>("")

    const handlerChangeValidationInput = (e: any) => {

        if (!isRequired) {
            return
        }

        if (e.target.value === "") {
            setValidationEmptyInput("input-isRequired")
        } else {
            setValidationEmptyInput(false)
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

    },[isRequired])

    return (
        <>
            <fieldset className="input-fieldset">
                {label && <label className="input-label">{label}</label>}
                <input type="email" ref={ref} onChange={(e: unknown) => {onChange(e);handlerChangeValidationInput(e)}} placeholder={placeholder} className={`input ${className} ${validationEmptyInput}`} />
                <ErrorMsg
                    isRequired={validationEmptyInput}
                    msg="Je povinné"
                />
            </fieldset>
        </>
    )
})