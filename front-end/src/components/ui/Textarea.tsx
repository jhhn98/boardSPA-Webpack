import type { TextareaHTMLAttributes } from 'react'

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const { ...rest } = props
    return (
        <div className="form-element">
            <textarea className="textarea" {...rest} />
        </div>
    )
}
