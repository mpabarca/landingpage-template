import Navbar, { NavbarStyleType } from '@/modules/Navbar'
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
    Namespaces.NAVBAR,
  ]
  // Array of modules to show on this page
  const modulesToShow: Namespaces[] = [
    Namespaces.HOME,
    Namespaces.ABOUT,
    Namespaces.BLOG,
    Namespaces.CONTACT,
    Namespaces.NAVBAR,
  ]

  // Fetch content for required modules
  const content = await getPageContent(locale, modulesToShow);

  const navbarStyle: NavbarStyleType = {isSidebar: false}

  return (
    <div className={`flex ${navbarStyle.isSidebar ? "flex-row" : "flex-col"}`}>
      {/* Navbar */}
      <Navbar context={context} content={content[Namespaces.NAVBAR]} style={navbarStyle} navigationModules={navigationModules} />
      {/* Main Content */}
      <main className="flex-1 p-8 space-y-16">
        {/* Home Section */}
          <HomeModule id={Namespaces.HOME} context={context} content={content[Namespaces.HOME]} />
        {/* About Section */}
          <AboutModule id={Namespaces.ABOUT} context={context} content={content[Namespaces.ABOUT]} />
        {/* Blog Section */}
          <BlogModule id={Namespaces.BLOG} context={context} content={content[Namespaces.BLOG]} />
        {/* Contact Section */}
          <ContactModule id={Namespaces.CONTACT} context={context} content={content[Namespaces.CONTACT]} />
      </main>
    </div>
  )
}

export default Page
