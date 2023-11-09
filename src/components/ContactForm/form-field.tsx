import { UseFormRegister } from "react-hook-form"

type FormFieldProps = {
  label: string
  id: string
  register: UseFormRegister<any>
  placeholder?: string
  error: string | undefined
  type?: "text" | "textarea"
  rows?: number
  required?: boolean
}

export function FormField({
  label,
  id,
  register,
  placeholder,
  error,
  type,
  rows,
  required,
}: FormFieldProps) {
  const fieldProps = {
    id: id,
    ...register(id),
    placeholder: placeholder,
    className:
      "min-h-10 flex w-full rounded-md border border-slate-50/25 bg-slate-950 px-3 py-2 text-sm",
  }
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium leading-none">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea {...fieldProps} rows={rows} />
      ) : (
        <input {...fieldProps} type={type} />
      )}
      {error && (
        <p className="mb-2 mt-1 text-xs text-red-500 sm:text-sm">{error}</p>
      )}
    </div>
  )
}
