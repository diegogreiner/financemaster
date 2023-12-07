import ContainerFormAuth from "./ContainerFormAuth";
import { Button } from "../ui/button";
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import ValidateInput from "./Input";
import ButtonToogleForm from "./ButtonToogleForm";
import { verification } from "@/services/firebase";
import { FormInitialState } from "@/contexts/Form";
import { useContext, useState } from "react";
import { setCookie } from "cookies-next";

export type ValidateUserData = z.infer<typeof validateUserSchema>

const validateUserSchema = z.object({
  email: z
    .string()
    .min(1, 'Digite seu e-mail')
    .email('Formato de e-mail inválido')
    .trim()
    .transform(email => {
      let newEmail = email.split('@')
      newEmail[1] = newEmail[1].toLocaleLowerCase()
      return newEmail.join('@')
    }),
  password: z
    .string()
    .min(1, 'Digite sua senha')
    .trim(),
})

export default function FormLogin() {
  const { setIsAuth } = useContext(FormInitialState)
  const [error, setError] = useState('')

  const validateUserForm = useForm<ValidateUserData>({
    resolver: zodResolver(validateUserSchema)
  })

  const { handleSubmit } = validateUserForm

  async function validateUser(data: ValidateUserData) {
    const verify = await verification(data, 'login')

    if (verify && verify !== '') {
      setIsAuth(verify.email)
      setCookie('auth', verify.email)
    } else {
      setError('Email ou senha inválido')
    }
  }

  return (
    <ContainerFormAuth>
      <h2 className="titleFormAuth">Entre na sua conta:</h2>
      <FormProvider {...validateUserForm}>
        <form
          onSubmit={handleSubmit(validateUser)}
          className="flex flex-col my-4 gap-4 px-4"
        >
          <ValidateInput type="email" title="E-mail" name="email" error={error} />
          <ValidateInput type="password" title="Senha" name="password" error={error} />
          <Button type='submit' variant="default">Entrar</Button>
        </form>
        <ButtonToogleForm label="Ainda não tem cadastro?" button="Cadastrar" />
      </FormProvider>
    </ContainerFormAuth>
  )
}