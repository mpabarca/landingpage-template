import { ISiteContext } from "@/interfaces";
import styles from './Home.module.css';

export interface IHomeData {
  title: string;
  welcomeMessage: string;
  intro: string;
}

interface HomeModuleProps {
  context: ISiteContext;
  content: IHomeData;
}

const HomeModule = ({ context, content }: HomeModuleProps) => {
  return (
    <section>
      <h1>{content.title}</h1>
      <p>{content.welcomeMessage}</p>
      <p>{content.intro}</p>
    </section>
  );
};

export default HomeModule;