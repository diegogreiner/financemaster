'use client'

import { createContext, useState, ReactNode } from "react"

type FormContextType = {
  toogle: boolean,
  setToogle: (toogle: boolean) => void,
  verifyUser: boolean,
  setVerifyUser: (verifyUser: boolean) => void,
  isAuth: string | null,
  setIsAuth: (isAuth: string) => void
}

export const FormInitialState = createContext<FormContextType>({
  toogle: true,
  setToogle: (toogle) => { },
  verifyUser: false,
  setVerifyUser: (verifyUser) => { },
  isAuth: 'loading' || 'no',
  setIsAuth: (isAuth) => { }
})

export default function FormProvider({ children }: { children: ReactNode }) {
  const [toogle, setToogle] = useState(true)
  const [verifyUser, setVerifyUser] = useState(false)
  const [isAuth, setIsAuth] = useState<string | null>('loading')

  return (
    <FormInitialState.Provider value={{ toogle, verifyUser, isAuth, setVerifyUser, setToogle, setIsAuth }}>
      {children}
    </FormInitialState.Provider>
  )
}