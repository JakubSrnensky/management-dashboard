import { ReactNode } from 'react'
import './Card.scss'

interface Card {
    children: ReactNode
    className?: string
    auth?: boolean
}

export default function Card({children, className = "", auth}: Card) {

    let authClass = ""

    if (auth) {
        authClass = "card-auth"
    }

    return (
        <div className={`card ${className} ${authClass}`}>
            {children}
        </div>
    )
}