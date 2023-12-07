import { Button } from '../ui/button';
import ContainerFormAuth from './ContainerFormAuth';
import { z } from 'zod';
import ValidateInput from './Input';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonToogleForm from './ButtonToogleForm';
import { createUser, verification } from '@/services/firebase';
import { FormInitialState } from '@/contexts/Form';
import { useContext, useState } from 'react';

export type CreateUserData = z.infer<typeof createUserSchema>

const createUserSchema = z.object({
  name: z
    .string()
    .min(1, 'Digite seu nome completo')
    .trim(),
  document: z
    .string()
    .min(11, 'Digite seu CPF')
    .max(11, 'CPF inválido')
    .refine(value => typeof value !== 'number', {
      message: 'CPF deve conter apenas números',
    }),
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
    .min(8, 'A senha precisa de no mínimo 8 caracteres')
    .trim(),
  confirmPassword: z
    .string()
    .min(8, 'A senha precisa de no mínimo 8 caracteres')
    .trim()
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: 'custom',
      path: ['confirmPassword'],
      message: 'As senhas precisam ser iguais',
    })
  }
})

export default function FormRegister() {
  const { toogle, setToogle, setVerifyUser } = useContext(FormInitialState)
  const [error, setError] = useState('')

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema)
  })

  const { handleSubmit } = createUserForm

  async function handleSubmitCreateUser(data: CreateUserData) {

    const verify = await verification(data, 'register')

    if(verify) {
      setVerifyUser(true)
      setError('Conta já cadastrada')
    } else {
      setToogle(!toogle)
      createUser(data)
    }
  }

  return (
    <ContainerFormAuth>
      <h2 className="titleFormAuth">Faça seu cadastro:</h2>
      <FormProvider {...createUserForm}>
        <form
          onSubmit={handleSubmit(handleSubmitCreateUser)}
          className="flex flex-col my-4 gap-4 px-4"
        >
          <ValidateInput type="text" title="Nome" name="name" error={error} />
          <ValidateInput type="text" title="CPF" name="document" error={error} />
          <ValidateInput type="email" title="E-mail" name="email" error={error} />
          <ValidateInput type="password" title="Senha" name="password" error={error} />
          <ValidateInput type="password" title="Confirme sua senha" name="confirmPassword" error={error} />
          <Button type='submit' variant="default">Cadastrar</Button>        </form>
        <ButtonToogleForm label="Ja tem cadastro?" button="Entrar" />
      </FormProvider>
    </ContainerFormAuth>
  )
}
