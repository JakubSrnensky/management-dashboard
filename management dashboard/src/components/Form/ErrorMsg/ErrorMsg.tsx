import './ErrorMsg.scss'

interface ErrorMsg {
    msg: string
    isRequired: undefined | boolean | string
}

export default function ErrorMsg({msg, isRequired}: ErrorMsg) {

    return (
        <>
            {isRequired &&
                <span className="errorMsg">
                    {msg}
                </span>
            }
        </>
    )
}