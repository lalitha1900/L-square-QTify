import { ReactComponent as HeroImg } from "../../assets/hero_headphones.png";
import styles from "./HeroSection.module.css";
export default function HeroSection() {
  return (
    <div className={styles.herosection}>
      <div>
        <h1 className={styles.heroText}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.heroText}>Over thousands podcast episodes</h1>
      </div>
      <HeroImg className={styles.heroImg} />
    </div>
  );
}