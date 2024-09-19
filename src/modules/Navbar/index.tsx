import { ISiteContext } from "@/interfaces";
import styles from "./Navbar.module.css";
import { Namespaces } from "@/localization/enums";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import React from "react";

export interface INavbarModuleData {
  menuItems: {
    [key: string]: string;
    home: string;
    about: string;
    blog: string;
    contact: string;
  };
}

export interface DesktopNavbarStyleType {
  isSidebar: boolean;
}

interface NavbarModuleProps {
  context: ISiteContext;
  content: INavbarModuleData;
  desktopNavbarStyle: DesktopNavbarStyleType;
  navigationModules: Namespaces[];
}

const NavbarModule = ({ context, content, desktopNavbarStyle, navigationModules }: NavbarModuleProps) => {

  return (
    <>
      <nav className="block lg:hidden">
        <MobileNavbar context={context} content={content} navigationModules={navigationModules} />
      </nav>
      <nav className="hidden lg:block">
        <DesktopNavbar context={context} content={content} navigationModules={navigationModules} style={desktopNavbarStyle} />
      </nav>
    </>
  );
};

export default NavbarModule;
