'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faBitcoinSign, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons"

export default function NavLinks() {
  const pathname = usePathname()

  const navLinks = [
    { name: "Dashboard", path: "/", icon: faHome},
    { name: "Criptomoedas", path: "/criptomoedas", icon: faBitcoinSign},
    { name: "Moedas Globais", path: "/moedasglobais", icon: faGlobe},
    { name: "Minha conta", path: "/conta", icon: faUser },
  ]

  return (
    <nav>
      <ul className="flex flex-col">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={pathname === link.path ?
              "w-4/5 m-auto my-2 py-2 px-2 bg-colorPrimary cursor-pointer rounded-xl shadow" :
              "w-4/5 m-auto my-2 py-2 px-2 hover:bg-colorPrimary cursor-pointer rounded-xl"}
          >
            <li className="flex items-center text-light dark:text-dark text-xl">
              <FontAwesomeIcon icon={link.icon} className="w-4 h-4 mr-2"/>
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
