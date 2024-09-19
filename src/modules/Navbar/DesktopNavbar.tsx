import { ISiteContext } from "@/interfaces";
import LanguageToggle from "@/components/language-toggle";
import { DisplayModeToggle } from "@/components/display-mode-toggle";
import Image from "next/image";
import Logo from "/public/next.svg";
import { cn } from "@/lib/client-utils";
import Link from "next/link";
import { Namespaces } from "@/localization/enums";
import { INavbarModuleData, DesktopNavbarStyleType } from "./";

interface DesktopNavbarProps {
  context: ISiteContext;
  content: INavbarModuleData;
  style: DesktopNavbarStyleType;
  navigationModules: Namespaces[];
}

const DesktopNavbar = ({ context, content, style, navigationModules }: DesktopNavbarProps) => {
  const mainStyle: React.CSSProperties = style.isSidebar
  ? { width: "200px" } 
  : { height: "100px" }

  const navStyle = `
    flex justify-between gap-2 bg-gray-50 dark:bg-gray-900
    ${
      style.isSidebar
        ? `h-screen p-8 flex-col fixed left-0`
        : `w-full p-8 flex-row items-center fixed top-0`
    }
  `;

  const navContentStyle = `
    ${style.isSidebar ? "flex-col" : "flex-row"}
  `;

  const navToggletStyle = `
    ${style.isSidebar ? "flex-col" : "flex-row"}
  `;

  return (
    <nav className={navStyle} style={mainStyle}>
      {/* Logo Section */}
      <Link href="/">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src={Logo}
          alt='Logo'
          width={180}
          height={37}
          priority
        />
      </Link>
      <ul id='navbar-content' className={cn("flex gap-3", navContentStyle)}>
        {navigationModules.map((namespace: string) => (
          <li key={`navbar-${namespace}`}>
            <Link href={`#${namespace}`}>{content.menuItems[namespace]}</Link>
          </li>
        ))}
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
  );
};

export default DesktopNavbar;
