
import React, { useEffect, useRef } from "react";
import { ReactComponent as HeroImg } from "../../assets/hero_headphones.png";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const parentRef = useRef(null);

  useEffect(() => {
    // Function to find the parent element with specified text and image
    const findParentElement = () => {
      const elements = document.querySelectorAll(`.${styles.herosection} h1.${styles.heroText} + ${styles.heroImg}`);
      
      for (const element of elements) {
        const text = element.previousElementSibling.textContent.trim().toLowerCase();
        if (text === "100 thousand songs, ad-free") {
          return element.parentElement;
        }
      }

      return null;
    };

    // Find the parent element
    const parentElement = findParentElement();

    if (parentElement) {
      // Check the background color of the parent element
      const backgroundColor = window.getComputedStyle(parentElement).getPropertyValue("background-color");
      console.log("Background Color:", backgroundColor);
    } else {
      console.error("Parent element not found");
    }
  }, []);

  return (
    <div ref={parentRef} className={styles.herosection}>
      <div>
        <h1 className={styles.heroText}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.heroText}>Over thousands podcast episodes</h1>
      </div>
      <HeroImg className={styles.heroImg} />
    </div>
  );
}
