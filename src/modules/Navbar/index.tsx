import { ISiteContext } from "@/interfaces";
import LanguageToggle from "@/components/language-toggle";
import { DisplayModeToggle } from "@/components/display-mode-toggle";
import styles from './Navbar.module.css';
import Image from 'next/image'
import Logo from '/public/next.svg'
import { cn } from "@/lib/client-utils";

export interface INavbarModuleData {
  menuItems: {
    home: string
    about: string
    blog: string
    contact: string
  }
}

export interface NavbarStyleType {
  isSidebar: boolean
}

interface NavbarModuleProps {
  context: ISiteContext;
  content: INavbarModuleData;
  style: NavbarStyleType;
}

const NavbarModule = ({ context, content, style }: NavbarModuleProps) => {

  const navStyle = `
    ${style.isSidebar ? 
      "w-full h-screen lg:w-1/6 p-8 flex-col" :
      "w-full h-24 p-8 flex-row items-center"
    }
  `

  const navContentStyle = `
    ${style.isSidebar ? 
      "flex-col" :
      "flex-row"
    }
  `

  const navToggletStyle = `
    ${style.isSidebar ? 
      "flex-col" :
      "flex-row"
    }
  `

  return (
    <nav className={cn("flex gap-1 justify-between bg-gray-50 dark:bg-gray-900", navStyle)}>
      {/* Logo Section */}
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={Logo}
          alt="Logo"
          width={180}
          height={37}
          priority
        />
      <ul id='navbar-content' className={cn("flex gap-3" ,navContentStyle)}>
        <li key="navbar-home">{content.menuItems.home}</li>
        <li key="navbar-about">{content.menuItems.about}</li>
        <li key="navbar-blog">{content.menuItems.blog}</li>
        <li key="navbar-contact">{content.menuItems.contact}</li>
      </ul>
      <ul className={cn("flex gap-1", navToggletStyle)}>
        <li className={`${!style.isSidebar && "order-last"}`}>
          <DisplayModeToggle />
        </li>
        <li>
          <LanguageToggle context={context} />
        </li>
      </ul>

    </nav>
  )
}

export default NavbarModule