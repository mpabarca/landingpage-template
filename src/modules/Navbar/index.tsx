import { ISiteContext } from "@/interfaces";
import LanguageToggle from "@/components/language-toggle";
import { DisplayModeToggle } from "@/components/display-mode-toggle";
import styles from './Navbar.module.css';
import Image from 'next/image'
import Logo from '/public/next.svg'

export interface INavbarModuleData {
  menuItems: {
    home: string
    about: string
    blog: string
    contact: string
  }
}

interface NavbarModuleProps {
  context: ISiteContext;
  content: INavbarModuleData;
}

const NavbarModule = ({ context, content }: NavbarModuleProps) => {

  return (
    <nav className="w-full h-screen lg:w-1/6 p-6 bg-gray-50 dark:bg-gray-900 flex flex-col gap-1 justify-between">
      {/* Logo Section */}
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={Logo}
          alt="Logo"
          width={180}
          height={37}
          priority
        />
      <ul>
        <li key="navbar-home">{content.menuItems.home}</li>
        <li key="navbar-about">{content.menuItems.about}</li>
        <li key="navbar-blog">{content.menuItems.blog}</li>
        <li key="navbar-contact">{content.menuItems.contact}</li>
      </ul>
      <ul className="flex flex-col gap-1">
        <DisplayModeToggle />
        <LanguageToggle context={context} />
      </ul>

    </nav>
  )
}

export default NavbarModule