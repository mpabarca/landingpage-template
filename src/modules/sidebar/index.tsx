import { ISiteContext } from "@/interfaces";
import LanguageToggle from "@/components/language-toggle";
import { DisplayModeToggle } from "@/components/display-mode-toggle";
import styles from './Sidebar.module.css';

export interface ISidebarData {
  menuItems: {
    home: string
    about: string
    blog: string
    contact: string
  }
}

interface SidebarProps {
  context: ISiteContext;
  className: string;
  content: ISidebarData;
}

const Sidebar = ({ context, className, content }: SidebarProps) => {

  return (
    <nav className={cn("w-full h-screen p-4 bg-gray-50 dark:bg-gray-900 flex flex-col gap-1 justify-center", className)}>
      <ul>
        <li>{content.menuItems.home}</li>
        <li>{content.menuItems.about}</li>
        <li>{content.menuItems.blog}</li>
        <li>{content.menuItems.contact}</li>
      </ul>
      <DisplayModeToggle />
      <LanguageToggle context={context} />

    </nav>
  )
}

export default Sidebar