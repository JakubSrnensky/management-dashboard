import { PASSWORD } from "../../../utils/enum";
import './PasswordStrong.scss'

export default function PasswordStrong({password}: unknown) {

    const passwordSpecialChars = (str: any) => {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    }

    const handlerPasswordStrong = (password: string | undefined) => {
        if (!password) {
            return null
        } else if(password.length > 0 && password.length <= 3) {
            return PASSWORD.WEEK
        } else if(password.length > 3 && password.length <= 7){
            return PASSWORD.GOOD
        } else if(password.length > 7 && !passwordSpecialChars(password)){
            return PASSWORD.STRONG
        } else if(password.length > 7 && passwordSpecialChars(password)){
            return PASSWORD.BEST
        }
    }

    const handlerPasswordTranslate = (event: any) => {
        if (event === PASSWORD.WEEK) {
            return "Heslo je slabé"
        } else if (event === PASSWORD.GOOD) {
            return "Heslo je dobré"
        } else if (event === PASSWORD.STRONG) {
            return "Heslo je silné"
        } else if (event === PASSWORD.BEST) {
            return "Heslo je velmi silné"
        } else {
            return "Síla hesla ..."
        }
    }


    return (
        <>
            <div className={`passwordStrong passwordStrong-${handlerPasswordStrong(password)}`}></div>
            <p>
                {handlerPasswordTranslate(handlerPasswordStrong(password))}
            </p>
        </>
    )
}