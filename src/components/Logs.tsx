
export default function Logs() {

  const data = [
    { title: "Compra camiseta", value: "1.000", dia: 'Friday', hora: '10:00', data: '2022-01-01' },
  ]

  return (
    <div className="h-full bg-bgSecondaryLight dark:bg-bgSecondaryDark text-light dark:text-dark text-center text-lg py-4 rounded-xl border-t-2 border-colorPrimary shadow">
      {data.map((item, index) => (
        <div key={index}>
          <h1 className="text-start pl-2 pb-4">Histórico de transações:</h1>
          <div className="flex justify-between w-full p-2 border-t-[1px] border-zinc-600 ">
            <div className="flex flex-col items-start">
              <p className="text-sm">{item.dia}</p>
              <p className="text-xs">{item.hora} - {item.data}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p className="text-xs">{item.title}</p>
              <p className="text-xs font-bold">Valor: {item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
