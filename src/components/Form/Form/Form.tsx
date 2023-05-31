import { ReactNode } from "react"

interface IForm {
    children: ReactNode
}

export default function Form({children}: IForm) {
    return (
        <form>
            {children}
        </form>
    )
}