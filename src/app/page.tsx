import ContainerMain from "@/components/ContainerMain";
import GraficArea from "@/components/GraficArea";
import GraficRadialBar from "@/components/GraficRadialBar";
import Info from "@/components/AddTransation";
import Logs from "@/components/Logs";

export default function Home() {

  return (
    <ContainerMain>
      <section className="flex-1 flex flex-col gap-8">
        <GraficRadialBar />
        <GraficArea />
      </section>
      <section className="w-1/5 flex flex-col gap-8">
        <Info />
        <Logs />
      </section>
    </ContainerMain>
  )
}