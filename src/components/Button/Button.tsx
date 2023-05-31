import { ReactNode } from "react"
import { BUTTON } from "../../utils/enum"
import './Button.scss'

interface IButton {
    as: React.ElementType;
    children: ReactNode
    design: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
    transparent?: boolean | string
    onClick?: any
}

export default function Button({as: Element, children, design, transparent, onClick}: IButton) {

    const designButton = (design: string) => {
        if ( design === BUTTON.PRIMARY ) {
            return `button-${BUTTON.PRIMARY}`
        } else if ( design === BUTTON.SECONDARY ) {
            return`button-${BUTTON.SECONDARY}`
        } else if ( design === BUTTON.SUCCESS ) {
            return `button-${BUTTON.SUCCESS}`
        } else if ( design === BUTTON.DANGER ) {
            return `button-${BUTTON.DANGER}`
        } else if ( design === BUTTON.WARNING ) {
            return `button-${BUTTON.WARNING}`
        } else if ( design === BUTTON.INFO ) {
            return `button-${BUTTON.INFO}`
        } else if ( design === BUTTON.DARK ) {
            return `button-${BUTTON.DARK}`
        }
    }

    const transparentButton = (transparent: boolean | string | undefined) => {
        if ( transparent ) {
            return `button-${BUTTON.TRANSPARENT}`
        }
    }

    return (
        <Element className={`button ${designButton(design)} ${transparentButton(transparent) || ""}`} onClick={onClick}>
            {children}
        </Element>
    )
}