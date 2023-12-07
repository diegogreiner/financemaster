'use client'

import Loading from "@/app/loading"
import FormAuthentication from "@/components/FormAuth/FormAuthentication"
import { FormInitialState } from "@/contexts/Form"
import { getCookie } from "cookies-next"
import { ReactNode, useContext, useEffect } from "react"

export default function Auth({ children }: { children: ReactNode }) {
  const { isAuth, setIsAuth } = useContext(FormInitialState)

  useEffect(() => {
    async function verifyAuth() {
      const auth = await getCookie('auth')
      if (auth) {
        setIsAuth(auth)
      } else {
        setIsAuth('no')
      }
    }

    verifyAuth()
  })

  if (isAuth === 'loading') {
    return (
      <Loading />
    )
  }

  if (isAuth === 'no') {
    return (
      <FormAuthentication />
    )
  }

  if (isAuth) {
    return (
      <>
        {children}
      </>
    )
  }
}