import Image from "next/image";
import logo from "../../public/logo.png";

export default function Logo() {
  return (
    <div className="py-2 shadow">
      <Image src={logo} alt="Logo" width={undefined} height={undefined} priority className="w-4/5 m-auto"/>
    </div>
  )
}
