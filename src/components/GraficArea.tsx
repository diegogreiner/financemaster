import dynamic from "next/dynamic";
const ApexChartArea = dynamic(() => import("@/components/ApexChartArea"), { ssr: false })

export default function GraficArea() {

  const info = [
    { title: "Criptomoedas:", value: "10.000.000" },
  ]

  return (
    <div className="flex h-full shadow">
      {info.map((item) => (
        <div
          key={item.title}
          className="flex h-full w-full flex-col bg-transparent text-light dark:text-dark 
          text-center text-lg py-2 rounded-xl gap-4"
        >
          <h2 className="w-full text-start pl-4">{item.title} {item.value}</h2>
          <ApexChartArea />
        </div>
      ))}
    </div>
  )
}