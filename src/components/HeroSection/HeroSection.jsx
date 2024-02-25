import   HeroImg  from "../../assets/hero_headphones.png";
import styles from "./HeroSection.module.css";
export default function HeroSection() {
  return (
    <section className={styles.herosection}>
      <div className={styles.headerDiv}>
        <h1 className={styles.heroText}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.heroText}>Over thousands podcast episodes</h1>
      </div>
      <img className={styles.heroImg} src={HeroImg} alt="HeroImage" width="250" height="200"></img>
    </section>
  );
}