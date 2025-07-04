import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
   return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/deco1.jpg")}
          alt="Education illustration"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/university.png")} alt="University icon" />
            <div className={styles.aboutItemText}>
              <h3>United International University</h3>
              <p>
                B.Sc in Computer Science and Engineering (2020–2024) <br />
                GPA: 3.8/4.0 <br />
                Major: Software Engineering
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/college.png")} alt="College icon" />
            <div className={styles.aboutItemText}>
              <h3>Govt. Mohammadpur Model School & College</h3>
              <p>
                Higher Secondary Certificate (Science), 2019 <br />
                Grade: 4.50
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/school.png")} alt="School icon" />
            <div className={styles.aboutItemText}>
              <h3>Kisholoy Girls School & College</h3>
              <p>
                Secondary School Certificate (Science), 2017 <br />
                Grade: 5.00
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};