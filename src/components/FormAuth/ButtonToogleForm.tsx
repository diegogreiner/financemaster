import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { FormInitialState } from '@/contexts/Form'

export default function ButtonToogleForm({label, button} : {label: string, button: string}) {
  const { toogle, setToogle } = useContext(FormInitialState)

  const handleClick = () => {
    setToogle(!toogle)
    console.log(toogle)
  }

  return (
    <div className="containerButtonFormAuth">
      <label className="text-lg text-light dark:text-dark cursor-pointer">{label}</label>
      <Button variant="outline" onClick={() => handleClick()}>{button}</Button>
    </div>
  )
}
