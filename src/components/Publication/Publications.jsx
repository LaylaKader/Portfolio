import React from "react";
import styles from "./Publications.module.css";
import { getImageUrl } from "../../utils";
export const Publications = () => {
  const publications = [
    {
      title:
        "GLOPS: A Hybrid Approach for Enhanced Scheduling in Cloud Computing Environments via Machine Learning-Based Process Prediction",
      status: "Under Review in IEEE Access (Q1 Journal)",
      authors:
        "Syed Abu Ammar Muhammad Zarif, Layla Kader Suma, Md. Sadat Rahman, Md. Motaharul Islam (IEEE Member), Phuoc Hung Pham, Phong Dung Thi Nguyen, Nguyen Thanh Binh",
    },
    {
      title:
        "TrustAid: A Decentralized Blockchain Solution for NGO Donation Tracking and Verification",
      status: "Under Review in IEEE Access (Q1 Journal)",
      authors:
        "Layla Kader Suma, Syed Abu Ammar Muhammad Zarif, Md. Sadat Rahman, Mr. Mir Moynuddin Ahmed Shibly",
    },
    {
      title:
        "The Impact of Large Language Models on STEM Students in South Asian Countries: A Mixed-Methods Study",
      status: "Ongoing",
      authors:
        "Layla Kader Suma, Mysun Mashira, Subangkar Karmaker Shanto",
    },
  ];

  return (
    <section className={styles.container} id="publications">
      <h2 className={styles.title}>Publications</h2>
      <div className={styles.content}>
        {publications.map((pub, index) => (
          <div key={index} className={styles.publicationCard}>
            <h3 className={styles.pubTitle}>{pub.title}</h3>
            <p className={styles.pubStatus}><strong>Status:</strong> {pub.status}</p>
            <p className={styles.pubAuthors}><strong>Authors:</strong> {pub.authors}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
