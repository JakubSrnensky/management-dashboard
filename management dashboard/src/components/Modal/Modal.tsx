import { ReactNode, useState } from "react"
import Title from "../Title/Title"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import storeModal from "../../stores/storeModal"
import './Modal.scss'

interface IModal {
    title: string
    footer?: ReactNode
    children: ReactNode
}

export default function Modal({footer, children, title}: IModal) {

    const { isOpen, setIsOpen } = storeModal()

    return (
        <>
            <div className={`modal ${isOpen ? "modal-isOpen" : ""}`}>
                <div className="modal-dialog">
                    <div className="modal-header">
                        <Title as="h2" className="modal-title">{title}</Title>
                        <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(false)} className="modal-closeButton" />
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {footer &&
                    <div className="modal-footer">
                        {footer}
                    </div>
                    }
                </div>
                <div className="modal-background" onClick={() => setIsOpen(false)}></div>
            </div>
        </>
    )
}