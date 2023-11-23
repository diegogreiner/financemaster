import { Button } from "./ui/button"

export default function Info() {

  const info = [
    { title: "Saldo atual:", value: "10.000.000", button: 'Adicionar transação' },
  ]

  return (
    <div className="shadow">
      {info.map((item, index) => (
        <div
          key={index}
          className="flex items-center flex-col bg-bgSecondaryLight dark:bg-bgSecondaryDark text-light dark:text-dark
          text-center text-lg py-4 rounded-xl gap-4 "
        >
          <h2 className="w-full">{item.title} {item.value}</h2>
          <Button>{item.button}</Button>
        </div>
      ))}
    </div>
  )
}