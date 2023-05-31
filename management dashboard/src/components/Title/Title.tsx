import { ReactNode } from "react";
import './Title.scss'

interface ITitle {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
    children: ReactNode
    className?: string
}

export default function Title({ as: Element, children, className = "" }: ITitle) {
    return (
        <Element className={`title title-${Element} ${className}`}>
            {children}
        </Element>
    )
}