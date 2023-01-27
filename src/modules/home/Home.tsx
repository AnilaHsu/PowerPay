import styles from "./Home.module.scss";
import { Banner } from "@/features/home/Banner";
import { Partners } from "@/features/home/Partners";
import { IntroContainer } from "@/features/home/IntroContainer";
import { Contact } from "@/features/home/Contact";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <Banner />
        <Partners />
        <IntroContainer />
        <Contact />
      </main>
    </>
  );
};

export default Home;
