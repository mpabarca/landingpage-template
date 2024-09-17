import Sidebar from '@/modules/Sidebar'
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
  // Fetch content for required modules
  const content = await getPageContent(locale, [
    Namespaces.HOME,
    Namespaces.ABOUT,
    Namespaces.BLOG,
    Namespaces.CONTACT,
    Namespaces.SIDEBAR,
  ]);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar context={context} content={content[Namespaces.SIDEBAR]} />
      {/* Main Content */}
      <main className="flex-1 p-8 space-y-16">
        {/* Home Section */}
          <HomeModule context={context} content={content[Namespaces.HOME]} />
        {/* About Section */}
          <AboutModule context={context} content={content[Namespaces.ABOUT]} />
        {/* Blog Section */}
          <BlogModule context={context} content={content[Namespaces.BLOG]} />
        {/* Contact Section */}
          <ContactModule context={context} content={content[Namespaces.CONTACT]} />
      </main>
    </div>
  )
}

export default Page
