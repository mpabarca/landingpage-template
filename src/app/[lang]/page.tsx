import Navbar, { DesktopNavbarStyleType } from '@/modules/Navbar'
import HomeModule from '@/modules/Home'
import AboutModule from '@/modules/About'
import BlogModule from '@/modules/Blog'
import ContactModule from '@/modules/Contact'
import { getSiteContext } from "@/lib/general-utils";
import { ISiteContext } from "@/interfaces";
import { LanguageCode, Namespaces } from '@/localization/enums'
import { getPageContent } from '@/services/page-service'

const Page = async() => {
  const context: ISiteContext =  getSiteContext()
  const locale = context.locale as LanguageCode
  // Main Modules that will be on the navigation bar
  const navigationModules: Namespaces[] = [
    Namespaces.HOME,
    Namespaces.ABOUT,
    Namespaces.BLOG,
    Namespaces.CONTACT,
  ]
  // Array of modules to show on this page
  const modulesToShow: Namespaces[] = [
    Namespaces.HOME,
    Namespaces.ABOUT,
    Namespaces.BLOG,
    Namespaces.CONTACT,
  ]
  // Map each namespace from Namespaces[] to its respective component
  const componentMap: { [key in Namespaces]: React.ComponentType<any> } = {
    [Namespaces.HOME]: HomeModule,
    [Namespaces.ABOUT]: AboutModule,
    [Namespaces.BLOG]: BlogModule,
    [Namespaces.CONTACT]: ContactModule,
    [Namespaces.NAVBAR]: Navbar,
  };
  // Fetch content for required modules
  const content = await getPageContent(locale, modulesToShow.concat(Namespaces.NAVBAR));
  const desktopNavbarStyle: DesktopNavbarStyleType = {isSidebar: true, size: "50px"}
  // Check the navigation bar's minimum width or height. If navbarStyle.size is smaller than the minimum, it will be overridden.
  const mainStyle: React.CSSProperties = desktopNavbarStyle.isSidebar
  ? { maxWidth: "calc(100% - 200px)", right: 0, position: "absolute" } 
  : {}
  
  return (
    <div className={`w-full flex ${desktopNavbarStyle.isSidebar ? "flex-row" : "flex-col"}`}>
      {/* Navbar */}
      <Navbar context={context} content={content[Namespaces.NAVBAR]} desktopNavbarStyle={desktopNavbarStyle} navigationModules={navigationModules} />
      {/* Main Content */}
      <main className="flex-1 p-8 space-y-16 w-full" style={mainStyle}>
        {/* Dynamically render the Module Section */}
        {modulesToShow.map((namespace: Namespaces) => {
          const ModuleComponent = componentMap[namespace];
          return (
            <ModuleComponent context={context} content={content[namespace]} id={namespace}/>
          )
        })}
      </main>
    </div>
  )
}

export default Page
