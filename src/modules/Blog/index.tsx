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
    <section>
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
    </section>
  )
}

export default BlogModule