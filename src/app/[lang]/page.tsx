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
      <Sidebar className="lg:w-1/6" context={context} content={content[Namespaces.SIDEBAR]} />

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-16">
        {/* Home Section */}
        <section id="home">
          <HomeModule context={context} content={content[Namespaces.HOME]} />
        </section>

        {/* About Section */}
        <section id="about" className="pt-16">
          <AboutModule context={context} content={content[Namespaces.ABOUT]} />
        </section>

        {/* Blog Section */}
        <section id="blog" className="pt-16">
          <BlogModule context={context} content={content[Namespaces.BLOG]} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-16">
          <ContactModule context={context} content={content[Namespaces.CONTACT]} />
        </section>
      </main>
    </div>
  )
}

export default Page
