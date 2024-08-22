import { ModeToggle } from "@/components/mode-toggle";
import { useRouter } from 'next/router'
import Sidebar from '@/components/sidebar'
import HomeModule from '@/modules/Home'
import AboutModule from '@/modules/About'
import BlogModule from '@/modules/Blog'
import ContactModule from '@/modules/Contact'
import { getSiteContext } from "@/lib/general-utils";
import { ISiteContext } from "@/interfaces";

const Page = () => {
  const context: ISiteContext = getSiteContext()

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-gray-100 dark:bg-gray-900">
        <Sidebar context={context} />
        <ModeToggle />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-16">
        {/* Home Section */}
        <section id="home">
          <HomeModule context={context} />
        </section>

        {/* About Section */}
        <section id="about" className="pt-16">
          <AboutModule context={context} />
        </section>

        {/* Blog Section */}
        <section id="blog" className="pt-16">
          <BlogModule context={context} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-16">
          <ContactModule context={context} />
        </section>
      </main>
    </div>
  )
}

export default Page
