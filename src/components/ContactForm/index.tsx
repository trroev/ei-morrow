"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { experimental_useFormStatus as useFormStatus } from "react-dom"
import { SubmitHandler, useForm } from "react-hook-form"

import { FormSchema, type Form } from "@/app/models/form"

import { FormField } from "./form-field"

export function ContactForm() {
  const { pending } = useFormStatus()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({ resolver: zodResolver(FormSchema) })

  const processForm: SubmitHandler<Form> = async (values) => {}

  return (
    <div className="flex w-full items-center justify-center p-10">
      <form
        onSubmit={handleSubmit(processForm)}
        className="w-11/12 space-y-6 sm:w-2/3"
      >
        <FormField
          label="Name"
          id="name"
          register={register}
          placeholder="First Last"
          error={errors.name?.message}
          required={true}
        />
        <FormField
          label="Phone Number"
          id="phone"
          register={register}
          placeholder="3216540987"
          error={errors.phone?.message}
        />
        <FormField
          label="Email"
          id="email"
          register={register}
          placeholder="jane.doe@email.com"
          error={errors.email?.message}
          required={true}
        />
        <FormField
          label="Subject"
          id="subject"
          register={register}
          placeholder="Subject"
          error={errors.subject?.message}
        />
        <FormField
          label="Message"
          id="message"
          register={register}
          placeholder="Type your message here..."
          error={errors.message?.message}
          type="textarea"
          rows={6}
          required={true}
        />
        <button className="inline-flex h-10 items-center justify-center rounded-md bg-slate-50 px-4 py-2 text-sm font-medium text-slate-950 duration-300 ease-in hover:bg-slate-50/70">
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  )
}
