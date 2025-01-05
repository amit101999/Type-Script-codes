import React, { Dispatch } from "react"


type inputValType = string | number

const Form = <T extends inputValType>({
    label,
    value,
    setter
}: {
    label: string,
    value: T,
    setter: Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <div>
            <form action="">
                <label htmlFor="">{label}</label>
                <input type="text" value={value} onChange={(e)=> setter(e.target.value)} />
            </form>
        </div>
    )
}

export default Form