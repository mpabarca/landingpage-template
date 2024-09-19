import { ISiteContext } from "@/interfaces";

export interface IAboutData {
  title: string
  description: string
}

interface AboutModuleProps {
  id: string;
  context: ISiteContext;
  content: IAboutData;
}

const AboutModule = ({ id, context, content }: AboutModuleProps) => {
  return (
    <section id={id} className="w-full h-screen p-8 flex flex-col items-start justify-center bg-gray-100 dark:bg-gray-500">
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </section>
  )
}

export default AboutModule