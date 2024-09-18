import { ISiteContext } from "@/interfaces";
import styles from "./Navbar.module.css";
import { Namespaces } from "@/localization/enums";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

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
  size: string;
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
      <MobileNavbar context={context} content={content} navigationModules={navigationModules} />
      <DesktopNavbar context={context} content={content} navigationModules={navigationModules} style={desktopNavbarStyle} />
    </>
  );
};

export default NavbarModule;
