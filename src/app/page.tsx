import styles from "./page.module.css";
import Navbar from "./components/global/Nav";
import Header from "./components/home/Header";
import About from "./components/home/About";
import Portfolio from "./components/home/Portfolio";
import Footer from "./components/global/Footer";
import Link from 'next/link';

export default function Home() {

  return (
    
    <main className={styles.main}>
      <Navbar />
      <Header />
      <section id="about"></section>
      <About  />
      <section id="portfolio"></section>
      <Portfolio />
      <section id="contact"></section>
      <Footer/>
    </main>
  );
}
