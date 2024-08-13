import Footer from "../components/global/Footer";
import Navbar from "../components/global/Nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section id="contact"></section>
      <Footer/>
    </main>
  );
}
