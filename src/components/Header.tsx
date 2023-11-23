import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Contact from "./Contact";

export default function Header() {

  return (
    <header className="w-1/5 flex flex-col bg-bgSecondaryLight dark:bg-bgSecondaryDark relative">
      <Logo />
      <NavLinks />
      <Contact />
    </header>
  )
}
