import type { InputHTMLAttributes } from 'react'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    const { type = 'text', ...rest } = props

    return (
        <div className="form-element">
            <input type={type} className="input-text" {...rest} />
        </div>
    )
}
