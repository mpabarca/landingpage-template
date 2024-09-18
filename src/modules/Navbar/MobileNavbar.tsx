import { ISiteContext } from "@/interfaces";
import LanguageToggle from "@/components/language-toggle";
import { DisplayModeToggle } from "@/components/display-mode-toggle";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Logo from "/public/next.svg";
import Link from "next/link";
import { Namespaces } from "@/localization/enums";
import { INavbarModuleData } from "./";
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MobileNavbarProps {
  context: ISiteContext;
  content: INavbarModuleData;
  navigationModules: Namespaces[];
}

const MobileNavbar = ({ context, content, navigationModules }: MobileNavbarProps) => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="m-6 fixed">
          <Menu className="h-6 w-6" strokeWidth={2} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Image
                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                src={Logo}
                alt='Logo'
                width={100}
                height={30}
                priority
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ul id='navbar-content' className="flex flex-col gap-3">
          {navigationModules.map((namespace: string) => (
            <li key={`navbar-${namespace}`}>
              <SheetClose asChild>
                <Link href={`#${namespace}`}>{content.menuItems[namespace]}</Link>
              </SheetClose>
            </li>
          ))}
        </ul>
        <SheetFooter>
          <ul className="flex flex-col gap-1">
            <li>
              <DisplayModeToggle />
            </li>
            <li>
              <LanguageToggle context={context} />
            </li>
          </ul>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
};

export default MobileNavbar;
