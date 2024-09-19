import { ISiteContext } from "@/interfaces";
import styles from './Home.module.css';

export interface IExampleData {
  title: string;
  welcomeMessage: string;
  intro: string;
}

interface ExampleModuleProps {
  id: string;
  context: ISiteContext;
  content: IExampleData;
}

const ExampleModule = ({ id, context, content }: ExampleModuleProps) => {
  return (
    <section id={id} className="w-full h-screen p-8 flex flex-col items-start justify-center">
      <h1>{content.title}</h1>
      <p>{content.welcomeMessage}</p>
      <p>{content.intro}</p>
    </section>
  );
};

export default ExampleModule;