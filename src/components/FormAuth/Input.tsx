import { FormInitialState } from "@/contexts/Form";
import { InputHTMLAttributes, useContext } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  title: string;
  error: string;
}

export default function ValidateInput({ name, type, title, error, ...props }: InputProps) {
  const { register, formState: { errors } } = useFormContext();
  const { toogle, verifyUser } = useContext(FormInitialState)

  return (
    <div className="containerFormAuth">
      <label htmlFor={name}>{title}:</label>
      <input
        id={name}
        type={type}
        className={`${errors[name] && 'border-red-500 border'} inputFormAuth`}
        {...register(name)}
        {...props}
        autoComplete={toogle ? 'current-password' : 'new-password'}
      />
      {errors[name] ?
        <span className="text-red-500 text-sm">{errors[name]?.message?.toString()}</span>
        :
        verifyUser &&
        <span className="text-red-500 text-sm">{error}</span>
      }
    </div>
  )
}
