import { ISiteContext } from "@/interfaces";

export interface IBlogData {
  title: string
  intro: string
}

interface BlogModuleProps {
  context: ISiteContext;
  content: IBlogData;
}

const BlogModule = ({ context, content }: BlogModuleProps) => {
  return (
    <section id="blog" className="pt-16">
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
    </section>
  )
}

export default BlogModule