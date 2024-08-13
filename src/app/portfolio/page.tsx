import Footer from "../components/global/Footer";
import Navbar from "../components/global/Nav";
import styles from "./page.module.css";
import Header from "../components/portfolio/Header"

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <section id="contact"></section>
      <Footer/>
    </main>
  );
}
