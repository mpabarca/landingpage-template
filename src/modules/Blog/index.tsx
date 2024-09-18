import { ISiteContext } from "@/interfaces";

export interface IBlogData {
  title: string
  intro: string
}

interface BlogModuleProps {
  id: string;
  context: ISiteContext;
  content: IBlogData;
}

const BlogModule = ({ id, context, content }: BlogModuleProps) => {
  return (
    <section id={id} className="w-full h-screen p-8 flex flex-col items-start justify-center">
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
    </section>
  )
}

export default BlogModule