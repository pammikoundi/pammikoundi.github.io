import Footer from "../components/global/Footer";
import Navbar from "../components/global/Nav";
import styles from "./page.module.css";
import Header from "../components/workflow/Header"
import TechStack from "../components/workflow/TechStack";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <TechStack/>
      <section id="contact"></section>
      <Footer/>
    </main>
  );
}
