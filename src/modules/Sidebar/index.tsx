import { ISiteContext } from "@/interfaces";
import LanguageToggle from "@/components/language-toggle";
import { DisplayModeToggle } from "@/components/display-mode-toggle";
import styles from './Sidebar.module.css';
import Image from 'next/image'
import Logo from '/public/next.svg'
export interface ISidebarModuleData {
  menuItems: {
    home: string
    about: string
    blog: string
    contact: string
  }
}

interface SidebarModuleProps {
  context: ISiteContext;
  content: ISidebarModuleData;
}

const SidebarModule = ({ context, content }: SidebarModuleProps) => {

  return (
    <nav className="w-full h-screen lg:w-1/6 p-4 bg-gray-50 dark:bg-gray-900 flex flex-col gap-1 justify-center">
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
        <li key="sidebar-home">{content.menuItems.home}</li>
        <li key="sidebar-about">{content.menuItems.about}</li>
        <li key="sidebar-blog">{content.menuItems.blog}</li>
        <li key="sidebar-contact">{content.menuItems.contact}</li>
      </ul>
      <DisplayModeToggle />
      <LanguageToggle context={context} />

    </nav>
  )
}

export default SidebarModule