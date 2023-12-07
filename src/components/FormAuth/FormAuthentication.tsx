'use client'

import { useContext } from "react"
import FormRegister from "./FormRegister"
import FormLogin from "./FormLogin"
import { FormInitialState } from "@/contexts/Form"

export default function FormAuthentication() {
  const { toogle } = useContext(FormInitialState)

  if (!toogle) {
    return <FormRegister />
  }

  return <FormLogin />
}
