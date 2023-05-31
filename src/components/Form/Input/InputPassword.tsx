import { ChangeEventHandler, forwardRef, useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

interface IInputPassword {
    label?: string
    onChange: ChangeEventHandler<HTMLInputElement>
    placeholder: string
    isRequired?: boolean
    className?: string
}


export const InputPassword = forwardRef(({ label, onChange, placeholder, isRequired, className = ""}: IInputPassword, ref: unknown) => {

    const [ showPassword, setShowPassword ] = useState<boolean>(false)

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

        if (ref?.current?.value === "") {
            setValidationEmptyInput("input-isRequired")
        } else {
            setValidationEmptyInput(false)
        }

    },[isRequired])

   
    return (
        <>
            <fieldset className="input-fieldset">
                {label && <label className="input-label">{label}</label>}
                <div className="input-passwordField">
                    <input type={showPassword ? "text" : "password"} ref={ref} onChange={(e:any) => {onChange(e); handlerChangeValidationInput(e)}} placeholder={placeholder} className={`input input-password ${validationEmptyInput} ${className}`} />
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword((prev) => !prev)} className="input-passwordEye" />
                </div>
                <ErrorMsg
                    isRequired={validationEmptyInput}
                    msg="Je povinné"
                />
            </fieldset>
        </>
    )
})