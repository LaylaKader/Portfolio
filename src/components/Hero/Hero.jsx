import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Layla</h1>
        <p className={styles.description}>
          My name is Layla Kader Suma, and I'm a Frontend Developer and UI Designer.
          I'm passionate about research in Human-AI Interaction and the application
          of Machine Learning in education and healthcare. Additionally, I have
          hands-on experience working with Blockchain technologies.
        </p>

        <div className={styles.buttonGroup}>
          <a 
            href="/assets/Layla_kader_resume.pdf" 
            download 
            className={styles.resumeBtn}
          >
            Download Job Resume
          </a>
          <a 
            href="/assets/Layla_kader_suma_academic_resume.pdf" 
            download 
            className={styles.academicBtn}
          >
            Download Academic Resume
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/layla.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
