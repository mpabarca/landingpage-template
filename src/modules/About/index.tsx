import { ISiteContext } from "@/interfaces";

export interface IAboutData {
  title: string
  description: string
}

interface AboutModuleProps {
  context: ISiteContext;
  content: IAboutData;
}

const AboutModule = ({ context, content }: AboutModuleProps) => {
  return (
    <section id="about" className="pt-16">
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </section>
  )
}

export default AboutModule