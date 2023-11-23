import dynamic from "next/dynamic"
const ApexChartRadialBar = dynamic(() => import("@/components/ApexChartRadialBar"), { ssr: false })

export default function GraficRadialBar() {

  const info = [
    { title: "Criptomoedas:", value: "10.000.000" },
    { title: "Ações", value: "10.000.000" },
    { title: "Moedas Globais", value: "10.000.000" },
  ]

  return (
    <div className="flex gap-8 shadow">
      {info.map((item) => (
        <div
          key={item.title}
          className="flex flex-1 max-w-[40%] items-center flex-col bg-bgSecondaryLight dark:bg-bgSecondaryDark text-light dark:text-dark text-center text-lg py-2 rounded-xl"
        >
          <h2 className="w-full">{item.title}</h2>
          <ApexChartRadialBar />
        </div>
      ))}
    </div>
  )
}