import { Fragment, type ReactNode } from 'react'
interface FormFieldProps {
    label: string
    htmlFor: string
    children: ReactNode
}
export default function FormField({ label, htmlFor, children }: FormFieldProps) {
    return (
        <Fragment>
            <label htmlFor={htmlFor} className="form-label">
                {label}
            </label>
            {children}
        </Fragment>
    )
}
